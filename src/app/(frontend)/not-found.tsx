import React from 'react'
import Gutter from '~/components/Gutter'
import Heading from '~/components/Heading'

export default function NotFound() {
  return (
    <Gutter className="flex flex-1 flex-col">
      <Heading className="flex flex-1 flex-col justify-center items-center pb-[33%] text-center">
        HTTP 404 - Not Found
      </Heading>
    </Gutter>
  )
}
