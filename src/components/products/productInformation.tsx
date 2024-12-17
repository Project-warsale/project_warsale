'use client'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { Specifications } from '@prisma/client'

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className='w-full flex flex-col items-center mt-5 gap-5'>
      <h3 className='text-xl font-semibold'>Product Description</h3>
      <p className='text-zinc-700'>{description}</p>
    </div>
  )
}

const ProductSpecifications = ({
  specifications,
  brand,
}: {
  specifications: Specifications
  brand: string
}) => {
  console.log(specifications)
  const { size, weight, color, model } = specifications
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full flex flex-col items-start gap-3'>
        {brand && (
          <div className='w-1/2 flex items-center gap-10 border-b pb-2 border-black/50'>
            <span>Brand: </span>
            <span>{brand}</span>
          </div>
        )}
        {model && (
          <div className='w-1/2 flex items-center gap-10 border-b pb-2 border-black/50'>
            <span>Model: </span>
            <span>{model}</span>
          </div>
        )}
        {size && (
          <div className='w-1/2 flex items-center gap-10 border-b pb-2 border-black/50'>
            <span>Size: </span>
            <span>{size}</span>
          </div>
        )}
        {color && (
          <div className='w-1/2 flex items-center gap-10 border-b pb-2 border-black/50'>
            <span>Color: </span>
            <div
              className='w-[26px] h-[26px] rounded-[5px]'
              style={{
                background: color,
              }}
            />
          </div>
        )}
        {weight && (
          <div className='w-1/2 flex items-center gap-10 border-b pb-2 border-black/50'>
            <span>Weight: </span>
            <span>{weight}</span>
          </div>
        )}
      </div>
    </div>
  )
}

const ProductInformation = ({
  description,
  specifications,
  brand,
}: {
  description: string
  specifications: Specifications
  brand: string
}) => {
  const [selectedInfo, setSelectedInfo] = useState<
    'information' | 'specifications'
  >('information')
  return (
    <div className='w-full flex flex-col items-start gap-5'>
      <div className='w-full flex items-center'>
        <button
          onClick={() => setSelectedInfo('information')}
          className={cn(
            'w-full border-b pb-3 text-center transition-all duration-100 ease-linear',
            selectedInfo === 'information' && 'border-theme text-theme'
          )}
        >
          Product information
        </button>
        <button
          onClick={() => setSelectedInfo('specifications')}
          className={cn(
            'w-full border-b pb-3 text-center transition-all duration-100 ease-linear',
            selectedInfo === 'specifications' && 'border-theme text-theme'
          )}
        >
          Specifications
        </button>
      </div>
      {selectedInfo === 'information' ? (
        <ProductDescription description={description} />
      ) : (
        <ProductSpecifications specifications={specifications} brand={brand} />
      )}
    </div>
  )
}

export default ProductInformation
