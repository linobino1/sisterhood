import { pageFields } from '@/fields/pageFields'
import { GlobalConfig } from 'payload'

/**
 * will be used in the SEO plugin
 */
export const Contact: GlobalConfig = {
  slug: 'contact',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [...pageFields],
}
