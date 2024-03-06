'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControl: FC<PaginationControlProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const limit = 10

  return (
    <div className='flex justify-around mt-3'>
      <button
        className='btn rounded-md'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&limit=${limit}`)
        }}>
        prev page
      </button>

      <button
        className='btn rounded-md'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&limit=${limit}`)
        }}>
        next page
      </button>
    </div>
  )
}

export default PaginationControl