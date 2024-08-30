import { pageFields } from '@/fields/pageFields'
import { GlobalConfig } from 'payload'

/**
 * will be used in the SEO plugin
 */
export const Legal: GlobalConfig = {
  slug: 'legal',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [...pageFields],
}
