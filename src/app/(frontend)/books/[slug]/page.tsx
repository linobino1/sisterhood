import { cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import isEmpty from '~/lexical/util/isEmpty'
import { notFound } from 'next/navigation'
import LexicalContent from '~/lexical/LexicalContent'

const fetchBook = cache(async (slug: string) => {
  const payload = await getPayloadHMR({ config })
  const res = await payload.find({
    collection: 'books',
    depth: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const book = res.docs?.[0]

  if (!book || isEmpty(book.article)) {
    throw notFound()
  }

  return book
})

export default async function Books({ params: { slug = '' } }) {
  const book = await fetchBook(slug)
  return <LexicalContent json={book.article} />
}
