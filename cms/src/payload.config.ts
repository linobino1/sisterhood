import { mongooseAdapter } from '@payloadcms/db-mongodb'
import {
  BlocksFeature,
  FixedToolbarFeature,
  lexicalEditor,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Site } from './globals/Site'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { s3Storage } from '@payloadcms/storage-s3'
import { Home } from './globals/Home'
import { About } from './globals/About'
import { Contact } from './globals/Contact'
import { Legal } from './globals/Legal'
import { Books } from './collections/Books'
import { Artwork } from './blocks/Artwork'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  onInit: async (payload) => {
    payload.logger.info(`CORS enabled for: ${payload.config.cors}`)
    payload.logger.info(`CSRF enabled for: ${payload.config.csrf}`)
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  secret: process.env.PAYLOAD_SECRET ?? '',
  admin: {
    user: Users.slug,
  },
  cors: [process.env.FRONTEND_URL ?? ''],
  csrf: [process.env.FRONTEND_URL ?? ''],
  collections: [Books, Media, Users],
  globals: [Home, About, Contact, Legal, Site],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      UploadFeature({
        collections: {
          media: {
            fields: [
              {
                name: 'width',
                type: 'radio',
                defaultValue: 'normal',
                options: [
                  {
                    label: 'Normal',
                    value: 'normal',
                  },
                  {
                    label: 'Fullscreen',
                    value: 'fullscreen',
                  },
                ],
              },
              {
                name: 'caption',
                type: 'richText',
                required: false,
                editor: lexicalEditor({
                  features({ defaultFeatures }) {
                    return [...defaultFeatures]
                  },
                }),
              },
            ],
          },
        },
      }),
      BlocksFeature({
        blocks: [Artwork],
      }),
      FixedToolbarFeature(),
    ],
  }),
  typescript: {
    outputFile: path.resolve(dirname, './payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  upload: {
    defCharset: 'utf8',
    defParamCharset: 'utf8',
  },
  plugins: [
    s3Storage({
      enabled: !!process.env.S3_ENABLED,
      collections: {
        media: {
          prefix: 'media/',
        },
      },
      bucket: process.env.S3_BUCKET ?? '',
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY ?? '',
          secretAccessKey: process.env.S3_SECRET_KEY ?? '',
        },
        region: process.env.S3_REGION,
      },
    }),
    seoPlugin({
      globals: [Site.slug],
      uploadsCollection: Media.slug,
    }),
  ],
})
