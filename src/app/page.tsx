import { getProducts } from '@/actions/products/actions'
import ProductCard from '@/components/products/productCard'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Home = async () => {
  const products = await getProducts()

  return (
    <div className='min-h-screen w-full flex flex-col items-center mt-12 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <div className='flex flex-col items-center gap-2'>
        <h2 className='text-3xl font-bold'>Safekit</h2>
        <p className='text-lg text-[#969696]'>Onze populaire producten</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full px-5 mt-5 gap-6'>
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
            discontedPrice={product.discountedPrice}
          />
        ))}
      </div>
      <Link
        href='/products'
        className='text-black mt-5 flex items-center gap-2 group'
      >
        <span>Bekijk alles</span>
        <FiArrowRight className='group-hover:translate-x-1.5 transition-all duration-100 ease-in-out' />{' '}
      </Link>
      <div className='w-full flex flex-col gap-7 mt-20 px-5'>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>
            Allprepare - online winkel voor voorbereidings- en nood
            benodigdheden
          </h2>
          <p className='text-zinc-600'>
            Allprepare is een online winkel die zich richt op de verkoop van
            producten die kunnen helpen bij noodsituaties en onvoorziene
            omstandigheden. Door u voor te bereiden met onze producten en
            hulpmiddelen, wordt u in tijden van rampen, calamiteiten of
            calamiteiten minder afhankelijk van derden. Bekijk ons ​​grote
            assortiment noodartikelen. In Nederland verzekeren wij vrijwel
            alles. Waar echter nauwelijks aan wordt gedacht zijn situaties
            waarin onze bestaande basisvoorzieningen tekortschieten. Wij gaan
            ervan uit dat de supermarkten altijd hun schappen vol hebben, dat er
            stromend water uit de kraan komt, dat de wegen altijd begaanbaar
            zijn en dat de overheid zorg draagt ​​voor iedereen die het moeilijk
            heeft. Er kunnen zich echter situaties voordoen waarin deze
            voorzieningen voor kortere of langere tijd niet beschikbaar zijn.
            Wij zijn er voor mensen die in dergelijke scenario’s meer zekerheid
            willen voor zichzelf en hun familie en vrienden. Door te preppen
            creëer je deze zekerheid. Maak je geest gerust! Wij verkopen onder
            andere diverse maten noodrantsoenen met houdbare voeding met een
            houdbaarheid tot wel 25 jaar. Een perfecte voedsel verzekering. Ook
            is het verstandig om een ​​noodpakket in huis te halen. Ook verkopen
            wij waterfilters zodat u altijd over schoon drinkwater beschikt.
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Water filter</h2>
          <p className='text-zinc-600'>
            Allprepare heeft een ruim assortiment waterfilters, verkrijgbaar in
            verschillende vormen en maten om aan uw specifieke behoeften te
            voldoen. Ontdek het ideale filter dat bij jouw voorkeuren past.
            Ontdek hier ons ruime assortiment waterfilters
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Noodrantsoenen</h2>
          <p className='text-zinc-600'>
            Bij Allprepare vindt u alles wat u nodig heeft op het gebied van
            noodrantsoenen! Ons assortiment, met onder andere topmerken als
            MRE-9, Ready Wise en Katadyn, biedt voor ieder wat wils. Of u nu op
            zoek bent naar een dagvoorraad of een jaarvoorraad, wij hebben wat u
            zoekt. En met een houdbaarheid tot 25 jaar kun je altijd vertrouwen
            op onze pakketten.
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Voeding</h2>
          <p className='text-zinc-600'>
            Het vinden van de juiste voedingsproducten kan een complexe taak
            zijn, gezien de diversiteit in specificaties zoals wattuur
            capaciteit (Wh). Bij deze keuze spelen uw persoonlijke voorkeuren
            een cruciale rol. Ontdek onze stroomvoorziening oplossingen,
            waaronder: - Mobiele zonnepanelen - Zonnegenerator - Zonnelampen -
            Generator
          </p>
        </div>
        <div className='w-full flex flex-col items-start gap-2'>
          <h2 className='text-2xl font-bold'>Nood Uitrusting</h2>
          <p className='text-zinc-600'>
            Allprepare biedt een ruime keuze aan nooduitrusting voor
            overlevingssituaties. Voor al uw essentiële overlevings
            benodigdheden bent u bij Allprepare aan het juiste adres. Ontdek
            hieronder alles wat je nodig hebt om te overleven Noodpakket -
            Noodradio
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
