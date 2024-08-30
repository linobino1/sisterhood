import { cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Gutter from '~/components/Gutter'
import BooksMasonry from './page.client'

const fetchBooks = cache(async () => {
  const payload = await getPayloadHMR({ config })
  return await payload.find({
    collection: 'books',
    depth: 1,
    sort: '-date',
  })
})

export default async function Books() {
  const books = await fetchBooks()
  return (
    <Gutter size="lg">
      <h1 className="text-xl">Books already travelling</h1>
      <BooksMasonry books={books.docs} />
    </Gutter>
  )
}
