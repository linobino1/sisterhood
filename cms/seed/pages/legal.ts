import type { Legal } from '@payload-types'
import type { Seed } from '../types'

export const legal = (): Seed<Legal> => ({
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
              text: 'This website has been made by:',
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'text',
              text: 'Agnė Jurgelėnaitė',
            },
            {
              type: 'linebreak',
            },
            {
              type: 'text',
              text: 'Kemetiškių gatvė 12',
            },
            {
              type: 'linebreak',
            },
            {
              type: 'text',
              text: 'Molėtų rajonas',
            },
            {
              type: 'linebreak',
            },
            {
              type: 'text',
              text: 'Lithuania',
            },
          ],
        },
        {
          type: 'paragraph',
          version: 1,
          children: [
            {
              type: 'link',
              fields: {
                url: 'mailto:contact@sisterhoodoftravelingfeministliterature.com',
                newTab: true,
                linkType: 'custom',
              },
              children: [
                {
                  type: 'text',
                  text: 'contact@sisterhoodoftravelingfeministliterature.com',
                },
              ],
            },
          ],
        },
      ],
    },
  },
})
