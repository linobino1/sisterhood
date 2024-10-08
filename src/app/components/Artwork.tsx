'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '~/util/cn'

export interface ArtworkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  clipText?: boolean
}

const img1 = '/artwork_crop_1.png'
const img2 = '/artwork_crop_2.png'
const images = [img1, img2]

const Artwork = ({ clipText = true, className, ...props }: ArtworkProps) => {
  const pathname = usePathname()
  const [prevPathname, setPrevPathname] = useState(pathname)
  const [index, setIndex] = useState(0)

  // toggle img on navigation
  useEffect(() => {
    if (pathname !== prevPathname) {
      setIndex((prev) => (prev + 1) % images.length)
      setPrevPathname(pathname)
    }
  }, [pathname])

  return (
    <img
      {...props}
      src={images[index]}
      alt="Artwork"
      className={cn(
        'w-[33vh] max-sm:max-w-[50vw] lg:w-[400px] xl:w-[450px] 2xl:w-[500px]',
        { 'float-right': clipText, 'fixed right-0 -z-10': !clipText },
        className,
      )}
      style={{
        clipPath: clipText ? `url('${images[index]}')` : 'none',
        shapeOutside: `url('${images[index]}')`,
        shapeMargin: '5px',
      }}
    />
  )
}
export default Artwork
