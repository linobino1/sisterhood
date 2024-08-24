import { existsSync, readdirSync, rmSync } from 'fs'
import path from 'path'
import { type CollectionSlug, type GlobalSlug, type Payload } from 'payload'
import { fileURLToPath } from 'url'
import 'dotenv/config.js'
import { home } from './pages/home'
import { about } from './pages/about'
import { legal } from './pages/legal'
import { site } from './globals/site'
import { book1 } from './books/book1'
import { book2 } from './books/book2'
import { book3 } from './books/book3'
import { book4 } from './books/book4'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const collections: CollectionSlug[] = ['media', 'books']
const globals: GlobalSlug[] = ['site']

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding database...')

  // if (process.env.NODE_ENV === 'production') {
  //   payload.logger.error('Seed script is disabled in production. Aborting seed script.')
  //   return
  // }

  payload.logger.info(`— Clearing media...`)

  // Clear media directory
  const mediaDir = path.resolve(dirname, '../media')
  if (existsSync(mediaDir)) {
    readdirSync(mediaDir).forEach((file) => rmSync(path.join(mediaDir, file), { recursive: true }))
  }

  payload.logger.info(`— Clearing collections and globals...`)
  await Promise.all([
    ...collections.map(async (collection) =>
      payload.delete({
        collection: collection as 'media',
        where: {},
      }),
    ),
    ...globals.map(async (global) => payload.updateGlobal({ slug: global, data: {} })),
  ])

  payload.logger.info(`— Seeding media...`)
  const [img, imgBook1, imgBook2, imgBook3, imgBook4] = await Promise.all(
    [
      {
        filePath: 'media/exlibris.svg',
        alt: 'the ex libris',
      },
      {
        filePath: 'media/book1.jpg',
        alt: 'a book',
      },
      {
        filePath: 'media/book2.jpg',
        alt: 'a book',
      },
      {
        filePath: 'media/book3.jpg',
        alt: 'a book',
      },
      {
        filePath: 'media/book4.jpg',
        alt: 'a book',
      },
    ].map((img) =>
      payload.create({
        collection: 'media',
        filePath: path.resolve(dirname, img.filePath),
        data: {
          alt: img.alt,
        },
      }),
    ),
  )

  payload.logger.info(`— Seeding pages...`)
  await payload.updateGlobal({
    slug: 'home',
    // @ts-ignore
    data: home({
      image: img.id,
    }),
  })
  await payload.updateGlobal({
    slug: 'about',
    // @ts-ignore
    data: about(),
  })
  await payload.updateGlobal({
    slug: 'legal',
    // @ts-ignore
    data: legal(),
  })

  payload.logger.info(`— Seeding site...`)
  await payload.updateGlobal({
    slug: 'site',
    data: site({
      image: img.id,
    }),
  })

  payload.logger.info(`— Seeding books...`)
  const bookImages = [imgBook1, imgBook2, imgBook3, imgBook4]
  await Promise.all(
    [book1, book2, book3, book4].map((book, index) =>
      payload.create({
        collection: 'books',
        data: book({
          image: bookImages[index].id,
        }),
      }),
    ),
  )

  payload.logger.info('Seeded database successfully!')
}
