import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verzendbeleid Safekit.nl',
  openGraph: {
    title: 'Verzendbeleid Safekit.nl',
    description: 'Bekijk ons verzendbeleid en leveringsinformatie.',
  },
}

const DeliveryPolicy: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      <h1 className='text-3xl font-bold mb-6'>Verzendbeleid van Safekit.nl</h1>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Leveringstijden</h2>
        <p className='text-lg leading-relaxed'>
          Door de huidige extreem hoge vraag kunnen levertijden oplopen tot 2
          weken of langer. Wij doen ons uiterste best om alle bestellingen zo
          snel mogelijk te verwerken en te verzenden, maar vragen uw begrip voor
          eventuele vertragingen. Bestellingen worden verwerkt op volgorde van
          binnenkomst. In sommige gevallen kan het voorkomen dat een bestelling
          dezelfde werkdag nog wordt verzonden.
        </p>
        <p className='text-lg leading-relaxed'>
          Levertijden zijn indicatief; Safekit.nl accepteert geen
          aansprakelijkheid voor vertragingen buiten onze controle.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Annuleringen</h2>
        <p className='text-lg leading-relaxed'>
          <strong>Binnen 1 werkdag:</strong> Bestellingen kunnen alleen binnen 1
          werkdag na plaatsing worden geannuleerd, mits deze nog niet zijn
          verzonden.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Na verzending:</strong> Zodra een bestelling is verzonden, is
          annulering niet meer mogelijk. Houd er rekening mee dat bestellingen
          soms op dezelfde dag al kunnen worden verzonden.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Annuleren na 1 werkdag:</strong> Annuleringen buiten deze
          termijn zijn alleen mogelijk indien de bestelling nog niet is
          verzonden. Aanvragen kunnen worden ingediend via support@safekit.nl.
          Terugbetalingen worden verwerkt binnen 14 dagen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Bestellen op eigen risico
        </h2>
        <p className='text-lg leading-relaxed'>
          Door een bestelling te plaatsen, accepteert u dat langere levertijden
          mogelijk zijn. Wij bieden geen compensatie voor vertragingen
          veroorzaakt door hoge vraag of andere onvoorziene omstandigheden
          (zoals overmacht, stakingen, of pandemieën). Controleer vóór het
          plaatsen van een bestelling of de verwachte levertijd voor u
          acceptabel is.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Internationale verzending
        </h2>
        <p className='text-lg leading-relaxed'>
          Niet al onze producten worden vanuit Nederland verzonden. Sommige
          producten worden direct vanuit andere landen naar de klant verzonden.
          Dit kan invloed hebben op de levertijd, afhankelijk van de locatie van
          het verzendcentrum.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Douanekosten:</strong> Eventuele invoerrechten, btw of andere
          kosten zijn voor rekening van de klant.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Correcte gegevens:</strong> De klant is verantwoordelijk voor
          het verstrekken van correcte adresgegevens. Vertragingen door foutieve
          gegevens zijn niet de verantwoordelijkheid van Safekit.nl.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Annuleren bij internationale verzending:</strong> Annuleren is
          niet mogelijk zodra het product is verzonden vanuit een internationaal
          verzendcentrum.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Gratis Verzending</h2>
        <p className='text-lg leading-relaxed'>
          Voor alle bestellingen op Safekit.nl bieden wij gratis verzending
          binnen Nederland.
        </p>
        <p className='text-lg leading-relaxed'>
          Gratis verzending is zonder Track & Trace.
        </p>
        <p className='text-lg leading-relaxed'>
          Gratis verzending is standaard en niet verzekerd. Het risico op
          verlies of schade na verzending ligt bij de klant. De levertijd kan
          langer zijn vergeleken met de prioriteitsverzendoptie.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>
          Betaalde Verzending (Prioriteitsverzending)
        </h2>
        <p className='text-lg leading-relaxed'>
          Wij bieden een optionele betaalde verzendmethode van €9,95 (prijs kan
          variëren).
        </p>
        <p className='text-lg leading-relaxed'>
          Bij prioriteitsverzending wordt uw bestelling sneller verwerkt en
          verzonden dan bij de gratis verzendoptie.
        </p>
        <p className='text-lg leading-relaxed'>
          <strong>Verzekering:</strong> Indien uw pakket zoekraakt tijdens de
          verzending, betalen wij het volledige aankoopbedrag terug.
        </p>
        <p className='text-lg leading-relaxed'>
          Let op: Prioriteitsverzending biedt snellere verwerking, maar dit
          betekent niet altijd dat de vervoerder sneller levert.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Bestellingen Onder €20</h2>
        <p className='text-lg leading-relaxed'>
          Bestellingen onder de €20,- kunnen door ons worden geannuleerd indien
          noodzakelijk. Klanten worden hierover geïnformeerd en ontvangen een
          terugbetaling binnen 14 dagen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Belangrijke Opmerking</h2>
        <p className='text-lg leading-relaxed'>
          Wij doen ons best om de verwachte levertermijnen te halen, maar houd
          er rekening mee dat deze indicatief zijn. Onvoorziene omstandigheden
          kunnen leiden tot verdere vertragingen. Safekit.nl is niet
          aansprakelijk voor eventuele gevolgschade door vertraagde leveringen.
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-4'>Contact</h2>
        <p className='text-lg leading-relaxed'>
          Voor vragen over uw bestelling of ons verzendbeleid kunt u contact
          opnemen met onze klantenservice:
        </p>
        <p className='text-lg leading-relaxed'>
          E-mail:{' '}
          <a href='mailto:support@safekit.nl' className='text-blue-600'>
            support@safekit.nl
          </a>
        </p>
        <p className='text-lg leading-relaxed'>
          Website:{' '}
          <a
            href='https://safekit.nl'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600'
          >
            https://safekit.nl
          </a>
        </p>
      </section>
    </div>
  )
}

export default DeliveryPolicy
