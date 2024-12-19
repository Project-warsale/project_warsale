import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delivery options',
  openGraph: {
    title: 'Delivery options',
    description: 'Delivery options we offer.',
  },
}

const DeliveryCollection: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <h1 className='text-3xl font-bold mb-6'>Bezorgen en Afhalen</h1>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Gratis bezorging vanaf € 75
        </h2>
        <p className='text-lg leading-relaxed'>
          Bestellingen vanaf € 75 leveren wij <strong>GRATIS</strong> af bij u
          thuis of op uw werk met PostNL of GLS. Bij kleinere bestellingen kost
          het verzenden € 9,95. Bent u niet thuis? Dan wordt het pakketje op
          maandag t/m zaterdag afgeleverd bij uw buren. Wilt u dit niet? Neem
          contact op met de klantenservice om een afspraak te maken om uw pakket
          op te halen bij onze fulfilment partner in Soest.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Levertijd</h2>
        <p className='text-lg leading-relaxed'>
          Voor 21:00 uur besteld? Dan heeft u het de volgende werkdag in huis,
          tenzij anders aangegeven op de productpagina. Voor bestellingen in het
          weekend of met een langere levertijd geldt: zie de informatie op onze
          website.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Anoniem en discreet thuis bezorgd
        </h2>
        <p className='text-lg leading-relaxed'>
          Wij bieden discrete verpakkingen aan. Wilt u anonieme levering? Neem
          contact op met de klantenservice om dit in orde te maken.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Binnen 4 uur uw bestelling ophalen
        </h2>
        <p className='text-lg leading-relaxed'>
          Kies bij het afrekenen voor{' '}
          <strong>Ophalen op afspraak bij magazijn</strong>. Ophalen kost €
          7,95. Neem contact op met onze klantenservice voor een afspraak. Het
          magazijn is geopend van maandag t/m vrijdag van 10:00 tot 17:00 uur.
        </p>
        <p className='text-lg leading-relaxed'>
          Adres: Industrieweg 37C, 3762EH, Soest.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Verzending</h2>
        <p className='text-lg leading-relaxed'>
          Zodra uw bestelling is verzonden, ontvangt u een e-mail met een track
          & trace-code om uw pakket te volgen.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>Deellevering</h2>
        <p className='text-lg leading-relaxed'>
          Soms versturen wij een deellevering, zodat u beschikbare producten
          sneller ontvangt. Details worden vermeld in de verzendmail.
        </p>
      </section>
    </div>
  )
}

export default DeliveryCollection
