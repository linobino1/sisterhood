import { Site } from '@payload-types'
import { Seed } from 'seed/types'

export const site = ({ image }: { image: string }): Seed<Site> => ({
  meta: {
    title: 'Sisterhood of Traveling Feminist Literature',
    description:
      '”The Sisterhood of Traveling Feminist Literature” is a project focused on sharing the literature we have come to love and appreciate as women by passing on books from one hand to another.',
    image,
  },
})
