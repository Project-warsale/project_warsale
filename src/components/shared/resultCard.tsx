import Link from 'next/link'

interface ResultCardProps {
  label: string
  href: string
  description: string
}

const ResultCard = ({ label, href, description }: ResultCardProps) => {
  return (
    <Link
      href={href}
      className='w-full h-[170px] border shadow-md shadow-black/10 hover:shadow-none flex flex-col items-start gap-3 p-4 group transition-all duration-300'
    >
      <h3 className='text-base font-semibold'>{label}</h3>
      <p className='text-[12px]'>{description}</p>
      <span className='text-[12px]'>URL {href}</span>
    </Link>
  )
}

export default ResultCard
