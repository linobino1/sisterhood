import { Book } from '@/payload-types'
import { Seed } from 'seed/types'

export const book4 = ({ image }: { image: string }): Seed<Book> => ({
  title: 'Everything Is Illuminated',
  author: 'Jonathan Safran Foer',
  image,
  date: new Date('2024-08-15').toISOString(),
})
