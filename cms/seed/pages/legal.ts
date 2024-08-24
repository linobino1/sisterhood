import type { Legal } from '@payload-types'
import type { Seed } from '../types'

export const legal = (): Seed<Legal> => ({
  content: {
    root: {
      children: [
        {
          children: [
            {
              text: 'This website is maintained by:',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          type: 'heading',
          version: 1,
          tag: 'h2',
        },

        {
          children: [
            {
              text: 'Agnė Jurgelėnaitė',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              text: 'Kemetiškių gatvė 12',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              text: 'Molėtų rajonas',
              type: 'text',
              version: 1,
            },

            {
              type: 'linebreak',
              version: 1,
            },

            {
              text: 'Lithuania',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          type: 'paragraph',
          version: 1,
        },

        {
          children: [
            {
              children: [
                {
                  text: 'contact@sisterhoodoftravelingfeministliterature.com',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              type: 'link',
              version: 3,

              fields: {
                url: 'mailto:contact@sisterhoodoftravelingfeministliterature.com',
                newTab: true,
                linkType: 'custom',
              },
              id: '66c9de63a6284a446f2fa34f',
            },
          ],
          direction: 'ltr',
          format: '',
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: 'start',
      indent: 0,
      type: 'root',
      version: 1,
    },
  },
})
