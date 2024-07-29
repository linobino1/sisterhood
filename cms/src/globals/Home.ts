import { pageFields } from '@/fields/pageFields'
import { GlobalConfig } from 'payload'

/**
 * will be used in the SEO plugin
 */
export const Home: GlobalConfig = {
  slug: 'home',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [...pageFields],
}
