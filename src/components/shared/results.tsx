/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react'
import { pages as pagesData } from '@/data/index'
import ResultCard from './resultCard'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const SearchResults = ({
  searchValue,
  setSearchValue,
}: {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}) => {
  const pathname = usePathname()
  const [pages, setPages] = useState<typeof pagesData>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (!searchValue) {
      setIsModalOpen(false)
      return setPages(pagesData)
    } else {
      setIsModalOpen(true)
    }

    const filteredPages = [...pagesData].filter((page) => {
      return page.title
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim())
    })

    setPages(filteredPages)
  }, [searchValue])

  useEffect(() => {
    setIsModalOpen(false)
    setSearchValue('')
  }, [pathname])

  return (
    <div
      className={cn(
        'absolute right-0 w-full mt-4 rounded-[5px] border h-[300px] transition-all duration-300 top-10 bg-white shadow-xl shadow-black/30 z-[700] p-5 overflow-y-auto',
        isModalOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-5 pointer-events-none'
      )}
    >
      {pages.length > 0 ? (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-1 2xl:grid-cols-2'>
          {pages.map((page) => (
            <ResultCard
              key={page.href}
              label={page.title}
              description={page.description}
              href={page.href}
            />
          ))}
        </div>
      ) : (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-zinc-600'>Er kon niets gevonden worden.</p>
        </div>
      )}
    </div>
  )
}

export default SearchResults
