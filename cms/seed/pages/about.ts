import type { About } from '@payload-types'
import type { Seed } from '../types'

export const about = (): Seed<About> => ({
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
              text: 'In 2024 I started to notice that my books had a life of their own. I would give a book to a friend and suddenly, unbeknownst to me, it would travel and land in someone else’s hands. Oftentimes, in the hands of people I wouldn’t even know.',
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'text',
              text: 'Feminist literature would travel the fastest. As if all of my girlfriends wanted (or needed) to share their pain and anger with other women, and transform these feelings into shared sisterhood – that’s how a small project called “The Sisterhood of Traveling Feminist Literature” came about.',
            },
          ],
        },
      ],
    },
  },
})
