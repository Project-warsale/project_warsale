import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Warranty Policy',
  openGraph: {
    title: 'Warranty Policy',
    description: 'On this page you will find about our warranty policy.',
  },
}

const WarrantyPolicy: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <h2 className='text-2xl font-semibold text-[#333] mb-6'>Garantie</h2>

      <p className='text-base text-[#666] mb-4'>
        Voor alle artikelen die je bij ons koopt, geldt de wettelijke garantie.
        Wettelijke garantie wil zeggen dat een product datgene is of moet doen
        wat de consument er in alle redelijkheid van mag verwachten. Voor
        sommige producten geldt ook een fabrieksgarantie. Deze garantie doet
        niets af aan de wettelijke garantie.
      </p>

      <p className='text-base text-[#666] mb-4'>
        Reparatie of vervanging binnen garantie is kosteloos. Wij volgen de
        garantievoorwaarden van de fabrikanten van het product. Wij geven in
        ieder geval één jaar garantie op onze producten bij normaal gebruik.
        Door de verkoper extra aangeboden garantie doet geen afbreuk aan de
        wettelijke garantie.
      </p>

      <p className='text-base text-[#666]'>
        Heeft u binnen deze tijd problemen met een product dat u bij ons heeft
        gekocht, lossen wij dit zo snel mogelijk op. U mag tenminste binnen twee
        weken een oplossing verwachten.
      </p>

      <a
        title='klantenservice'
        href='/klantenservice'
        className='text-blue-600 mt-6 block'
      >
        &gt;&gt; Terug naar de Klantenservice
      </a>
    </div>
  )
}

export default WarrantyPolicy
