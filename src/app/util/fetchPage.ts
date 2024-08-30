import { cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { DataFromGlobalSlug, GlobalSlug } from 'payload'

export const fetchPage = cache(
  async <T extends GlobalSlug>(slug: T): Promise<DataFromGlobalSlug<T>> => {
    const payload = await getPayloadHMR({ config })
    return await payload.findGlobal({ slug, depth: 1 })
  },
)
