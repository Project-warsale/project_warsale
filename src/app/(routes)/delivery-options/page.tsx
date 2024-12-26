const ShippingPolicy = () => {
  return (
    <div className='text-gray-800  px-5 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      {/* Header */}
      <h1 className='text-4xl font-extrabold mb-6'>
        Verzendbeleid van Safekit.nl
      </h1>

      {/* Delivery Times Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Leveringstijden</h2>
        <p className='mb-4'>
          Door de huidige extreem hoge vraag kunnen levertijden oplopen tot 2
          weken of langer. Wij doen ons uiterste best om alle bestellingen zo
          snel mogelijk te verwerken en te verzenden, maar vragen uw begrip voor
          eventuele vertragingen. Bestellingen worden verwerkt op volgorde van
          binnenkomst. In sommige gevallen kan het voorkomen dat een bestelling
          dezelfde werkdag nog wordt verzonden.
        </p>
        <p>
          Levertijden zijn indicatief; Safekit.nl accepteert geen
          aansprakelijkheid voor vertragingen buiten onze controle.
        </p>
      </section>

      {/* Cancellations Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Annuleringen</h2>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            <strong>Binnen 1 werkdag:</strong> Bestellingen kunnen alleen binnen
            1 werkdag na plaatsing worden geannuleerd, mits deze nog niet zijn
            verzonden.
          </li>
          <li className='mb-2'>
            <strong>Na verzending:</strong> Zodra een bestelling is verzonden,
            is annulering niet meer mogelijk. Houd er rekening mee dat
            bestellingen soms op dezelfde dag al kunnen worden verzonden.
          </li>
          <li>
            <strong>Annuleren na 1 werkdag:</strong> Annuleringen buiten deze
            termijn zijn alleen mogelijk indien de bestelling nog niet is
            verzonden. Aanvragen kunnen worden ingediend via{' '}
            <a
              href='mailto:support@safekit.nl'
              className='text-blue-500 hover:underline'
            >
              support@safekit.nl
            </a>
            . Terugbetalingen worden verwerkt binnen 14 dagen.
          </li>
        </ul>
      </section>

      {/* Orders at Risk Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Bestellen op eigen risico
        </h2>
        <p>
          Door een bestelling te plaatsen, accepteert u dat langere levertijden
          mogelijk zijn. Wij bieden geen compensatie voor vertragingen
          veroorzaakt door hoge vraag of andere onvoorziene omstandigheden
          (zoals overmacht, stakingen, of pandemieën). Controleer vóór het
          plaatsen van een bestelling of de verwachte levertijd voor u
          acceptabel is.
        </p>
      </section>

      {/* International Shipping Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Internationale verzending
        </h2>
        <p className='mb-4'>
          Niet al onze producten worden vanuit Nederland verzonden. Sommige
          producten worden direct vanuit andere landen naar de klant verzonden.
          Dit kan invloed hebben op de levertijd, afhankelijk van de locatie van
          het verzendcentrum.
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            <strong>Douanekosten:</strong> Eventuele invoerrechten, btw of
            andere kosten zijn voor rekening van de klant.
          </li>
          <li className='mb-2'>
            <strong>Correcte gegevens:</strong> De klant is verantwoordelijk
            voor het verstrekken van correcte adresgegevens. Vertragingen door
            foutieve gegevens zijn niet de verantwoordelijkheid van Safekit.nl.
          </li>
          <li>
            <strong>Annuleren bij internationale verzending:</strong> Annuleren
            is niet mogelijk zodra het product is verzonden vanuit een
            internationaal verzendcentrum.
          </li>
        </ul>
      </section>

      {/* Free Shipping Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Gratis Verzending</h2>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>Gratis verzending is zonder Track & Trace.</li>
          <li className='mb-2'>
            Gratis verzending is standaard en niet verzekerd. Het risico op
            verlies of schade na verzending ligt bij de klant. De levertijd kan
            langer zijn vergeleken met de prioriteitsverzendoptie.
          </li>
        </ul>
      </section>

      {/* Paid Shipping Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Betaalde Verzending (Prioriteitsverzending)
        </h2>
        <p className='mb-4'>
          Wij bieden een optionele betaalde verzendmethode van €9,95 (prijs kan
          variëren).
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            Bij prioriteitsverzending wordt uw bestelling sneller verwerkt en
            verzonden dan bij de gratis verzendoptie.
          </li>
          <li className='mb-2'>
            <strong>Verzekering:</strong> Indien uw pakket zoekraakt tijdens de
            verzending, betalen wij het volledige aankoopbedrag terug.
          </li>
          <li>
            Let op: Prioriteitsverzending biedt snellere verwerking, maar dit
            betekent niet altijd dat de vervoerder sneller levert.
          </li>
        </ul>
      </section>

      {/* Small Orders Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Bestellingen Onder €20</h2>
        <p>
          Bestellingen onder de €20,- kunnen door ons worden geannuleerd indien
          noodzakelijk. Klanten worden hierover geïnformeerd en ontvangen een
          terugbetaling binnen 14 dagen.
        </p>
      </section>

      {/* Important Note Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Belangrijke Opmerking</h2>
        <p>
          Wij doen ons best om de verwachte levertermijnen te halen, maar houd
          er rekening mee dat deze indicatief zijn. Onvoorziene omstandigheden
          kunnen leiden tot verdere vertragingen. Safekit.nl is niet
          aansprakelijk voor eventuele gevolgschade door vertraagde leveringen.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className='text-2xl font-extrabold mb-4'>Contact</h2>
        <p className='mb-2'>
          Voor vragen over uw bestelling of ons verzendbeleid kunt u contact
          opnemen met onze klantenservice:
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            <strong>E-mail:</strong>{' '}
            <a
              href='mailto:support@safekit.nl'
              className='text-blue-500 hover:underline'
            >
              support@safekit.nl
            </a>
          </li>
          <li>
            <strong>Website:</strong>{' '}
            <a
              href='https://safekit.nl'
              className='text-blue-500 hover:underline'
            >
              https://safekit.nl
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ShippingPolicy
