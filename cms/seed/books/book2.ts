import { Book } from '@/payload-types'
import { Seed } from 'seed/types'

export const book2 = ({ image }: { image: string }): Seed<Book> => ({
  title: 'I Am the Messenger',
  author: 'Markus Zusak',
  image,
  date: new Date('2024-05-24').toISOString(),
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
              text: 'I got this book when I was 14 and I still have it. It is one of my favorite books. I gave it to my sister to read and she loved it too. I have read it multiple times and I still love it. I love the characters and the story. I love the writing style. I love the message. I love everything about this book.',
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
  article: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'A Gift of Words: ',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'The Secret Garden',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h1',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'The Story Behind the Gift',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'The Secret Garden',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: " by Frances Hodgson Burnett was more than just a book when it was handed to Emily. It was a token of affection, carefully chosen by her close friend, Sarah, who understood Emily's love for classic literature and the comfort she found in stories that revolved around growth, healing, and rediscovery.",
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'paragraph',
          version: 1,
          textFormat: 2,
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Why ',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'The Secret Garden',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: '?',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Sarah and Emily had known each other for years, sharing countless conversations about life, dreams, and the stories that had shaped them. When Sarah stumbled upon a beautifully bound edition of ',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'The Secret Garden',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: ' in a quaint bookstore, she knew it was the perfect gift for Emily.',
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

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'The novel, with its themes of rejuvenation and the power of nature, resonated with both women. It told the story of Mary Lennox, a girl who discovers a neglected garden and, through nurturing it back to life, experiences her own emotional healing. Sarah hoped that this tale would not only be a pleasurable read for Emily but also serve as a reminder of the strength and resilience that both women had shown in their lives.',
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

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'The Presentation',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "On Emily's birthday, Sarah presented the book wrapped in delicate, floral-patterned paper. Attached was a note that read:",
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

        {
          children: [
            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: '”Dear Emily,',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'May this story bring you as much peace and inspiration as it has brought me. Just like the garden within these pages, may your life continue to bloom beautifully.',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'With love,',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'Sarah”',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'quote',
          version: 1,
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: "Emily's Reaction",
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Emily was deeply touched by the thoughtfulness of the gift. ',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 2,
              mode: 'normal',
              style: '',
              text: 'The Secret Garden',
              type: 'text',
              version: 1,
            },

            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: ' had always been a favorite of hers, but this particular edition, coupled with Sarah’s heartfelt note, made it even more special. As she read through the pages, she felt a connection not just with the characters, but also with Sarah, who had given her a piece of her own heart through this timeless story.',
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

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'A Lasting Memory',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: 'start',
          indent: 0,
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'The book now sits on Emily’s bedside table, a cherished reminder of the bond she shares with Sarah. It’s more than just a story—it’s a symbol of friendship, understanding, and the simple joys that come from giving and receiving gifts that speak to the soul.',
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
