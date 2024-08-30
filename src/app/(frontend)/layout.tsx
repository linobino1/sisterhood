import './global.css'
import '@unocss/reset/tailwind-compat.css'
import './uno.css'
import config from '@payload-config'
import Gutter from '~/components/Gutter'
import { Navigation } from '~/components/Navigation'
import MobileMenu from '~/components/MobileMenu'
import SideArtwork from '~/components/SideArtwork'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { cache } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const fetchSite = cache(async () => {
  const payload = await getPayloadHMR({ config })
  return payload.findGlobal({ slug: 'site', depth: 1 })
})

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const site = await fetchSite()

  return {
    title: site?.meta?.title,
    description: site?.meta?.description,
    openGraph: {
      title: site?.meta?.title ?? '',
      description: site?.meta?.description ?? '',
      images: [
        {
          url: (site?.meta?.image as any)?.url,
        },
      ],
    },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-base font-josefin bg-bg text-text xl:pt-8">
        <div className="min-h-screen flex flex-col">
          <Gutter as="header" size="lg" className="mt-[33px] flex gap-4 justify-between">
            <Link href="/">
              <h1 className="font-josefin text-4xl sm:text-6xl max-w-[11em] uppercase font-normal">
                Sisterhood of Traveling Feminist Literature
              </h1>
            </Link>
            <MobileMenu />
            <Navigation className="max-sm:hidden text-2xl text-end" />
          </Gutter>
          <main className="mt-6 sm:mt-12 flex-1 flex flex-col">
            <SideArtwork>{children}</SideArtwork>
          </main>
        </div>
      </body>
    </html>
  )
}
