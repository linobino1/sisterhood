import { slugField } from '@/fields/slug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slugField('title'),
    {
      name: 'author',
      label: 'Author',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'info',
      type: 'richText',
      admin: {
        description: 'A short text about the book for the books list',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) =>
          defaultFeatures.filter((feature) => feature.key !== 'link'),
      }),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'article',
      type: 'richText',
      admin: {
        description: 'The full article about the book',
      },
    },
  ],
}
