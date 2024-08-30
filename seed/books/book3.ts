import { Book } from '@/payload-types'
import { Seed } from 'seed/types'

export const book3 = ({ image }: { image: string }): Seed<Book> => ({
  title: 'I Am the Messenger 2',
  author: 'Markus Zusak',
  image,
  date: new Date('2024-03-14').toISOString(),
  info: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'This one is my favorite book. I have read it multiple times and I still love it. I love the characters and the story. I love the writing style. I love the message. I love everything about this book.',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 0,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
})
