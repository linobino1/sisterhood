'use client'

import LexicalContent from '~/lexical/LexicalContent'
import ReactMasonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { cn } from '~/util/cn'
import { Book, Media } from '@/payload-types'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BooksMasonry({ books }: { books: Book[] }) {
  const router = useRouter()
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 700: 3 }} className="mt-4 w-full sm:mt-8">
      <ReactMasonry gutter="clamp(20px, (100vw - 1000px) * 99, 50px)">
        {books?.map((book, index) => {
          const image = book.image as Media
          return (
            <div
              key={index}
              onClick={() => {
                if (book.article) {
                  router.push(`/books/${book.slug}`)
                }
              }}
              className={cn({ 'cursor-pointer': !!book.article })}
            >
              {image.url ? (
                <img
                  src={image.url}
                  alt={image.alt}
                  width={image.width ?? 300}
                  height={image.height ?? 200}
                  className="w-full h-auto object-cover bg-zinc-200"
                />
              ) : null}
              <div className="py-2.5 sm:px-1 bg-white">
                <h2 className="text-xl font-bold">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.author}</p>
                {book.info ? (
                  <LexicalContent
                    json={book.info}
                    className="text-gray-800 my-2"
                    disableMarginBlock
                  />
                ) : null}
                {book.article ? (
                  <Link
                    href={`/books/${book.slug}`}
                    className={cn('text-sm text-blue-500', {
                      'font-bold': false, // isPending,
                    })}
                  >
                    Read more
                  </Link>
                ) : null}
              </div>
            </div>
          )
        })}
      </ReactMasonry>
    </ResponsiveMasonry>
  )
}
