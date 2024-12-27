'use client'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import SearchResults from './results'

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  return (
    <div className='w-full bg-[#FBFAF8] rounded-full h-[45px] flex items-center pr-5 relative'>
      <input
        id='search'
        type='text'
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        className='w-full h-full bg-transparent outline-none px-6 text-[15px] text-[#6A655E] font-semibold placeholder:text-[#6A655E]'
        placeholder='Waar bent u naar op zoek?'
      />
      <label htmlFor='search' className='cursor-pointer'>
        <IoSearch className='text-xl text-[#6A655E]' />
      </label>
      <SearchResults
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  )
}

export default Search
