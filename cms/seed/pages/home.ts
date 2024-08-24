import type { Home } from '@payload-types'
import type { Seed } from '../types'

export const home = ({ image }: { image: string }): Seed<Home> => ({
  content: {
    root: {
      type: 'root',
      version: 1,
      indent: 0,
      direction: 'ltr',
      format: 'start',
      children: [
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'text',
              text: '”The Sisterhood of Traveling Feminist Literature” is a project focused on sharing the literature we have come to love and appreciate as women by passing on books from one hand to another.',
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'inlineBlock',

              fields: {
                blockType: 'artwork',
              },
              version: 1,
            },
            {
              type: 'text',
              text: 'The project takes the form of an ',
            },
            {
              type: 'text',
              text: 'Ex Libris',
              format: 2,
            },
            {
              type: 'text',
              text: ', that you are meant to sign your name on. traditionally, an ex libris is a personal stamp pasted on the front endpaper of a book. it indicating the ownership and literally means "from the library of...". by both adhering to and countering this tradition, sisterhood\'s ex libris, along with the continuous markings of different women through whose hands the book has passed, is meant to create a connection—a sisterhood, if you will.',
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'text',
              text: "The temporary ownership that comes with the signature allows you to do whatever you want with the book: draw, write, scribble in the margins, question, love or hate it. books are meant to be interacted with - to live their own lives and to archive the lives of the people who have owned them, even if only temporarily. after reading, don't keep the book: Share it with someone you think will enjoy it the most.",
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'text',
              text: "If the book you got is not to your taste, don't force yourself to read it - just pass it on. if you don't feel comfortable signing it as yours, be a silent part of the sisterhood. the only goal is that the book never returns to its original owner..",
            },
          ],
        },
      ],
    },
  },
})
