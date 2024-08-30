import { Book } from '@/payload-types'
import { Seed } from 'seed/types'

export const book1 = ({ image }: { image: string }): Seed<Book> => ({
  title: 'The Book Thief',
  author: 'Markus Zusak',
  image,
  date: new Date('2023-03-14').toISOString(),
})
