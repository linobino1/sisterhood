import { GlobalConfig } from 'payload'

/**
 * will be used in the SEO plugin
 */
export const Site: GlobalConfig = {
  slug: 'site',
  admin: {
    group: 'Configuration',
  },
  access: {
    read: () => true,
  },
  fields: [],
}
