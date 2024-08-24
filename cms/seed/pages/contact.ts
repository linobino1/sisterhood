import type { Contact } from '@payload-types'
import type { Seed } from '../types'

export const contact = (): Seed<Contact> => ({
  content: {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Contact',
              type: 'text',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
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
              text: 'drop me a line at ',
              type: 'text',
              version: 1,
            },

            {
              type: 'autolink',

              children: [
                {
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'contact@sisterhoodoftravelingfeministliterature.com',
                  type: 'text',
                  version: 1,
                },
              ],
              direction: 'ltr',

              fields: {
                linkType: 'custom',
                url: 'mailto:contact@sisterhoodoftravelingfeministliterature.com',
              },
              format: '',
              indent: 0,
              version: 2,
            },
          ],
          direction: 'ltr',
          format: '',
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
