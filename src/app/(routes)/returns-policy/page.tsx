const ReturnPolicy = () => {
  return (
    <div className='text-gray-800  px-5 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      {/* Header */}
      <h1 className='text-4xl font-extrabold mb-6'>
        Retourbeleid en terugbetalingen Safekit.nl
      </h1>

      {/* Product Returns Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Productretour</h2>
        <p className='mb-4'>
          U heeft de mogelijkheid om uw aankopen bij Safekit.nl binnen 14 dagen
          na ontvangst te registreren voor retourzending. Na deze registratie
          heeft u nog eens 14 dagen om de producten daadwerkelijk te
          retourneren.
        </p>
        <p className='mb-4'>
          <strong>Let op:</strong> Etenswaren en dranken vallen niet onder het
          retourrecht en kunnen niet worden geretourneerd, in overeenstemming
          met de wettelijke uitzonderingen voor hygiëne en voedselveiligheid.
        </p>
      </section>

      {/* Return Procedure Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Retourprocedure</h2>
        <p className='mb-4'>
          Indien u een artikel wenst terug te sturen, verzoeken wij u binnen 14
          dagen na ontvangst contact op te nemen via{' '}
          <a
            href='mailto:support@safekit.nl'
            className='text-blue-500 hover:underline'
          >
            support@safekit.nl
          </a>
          . Vermeld in uw e-mail:
        </p>
        <ul className='list-disc ml-6 mb-4'>
          <li>Uw volledige adres</li>
          <li>Het bestelnummer</li>
          <li>De items die u wilt retourneren</li>
        </ul>
        <p className='mb-4'>
          Na uw melding ontvangt u instructies voor de retourzending. U heeft
          vervolgens 14 dagen om de producten te retourneren.
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            <strong>Kosten retourzending:</strong> De retourkosten zijn voor
            eigen rekening.
          </li>
          <li>
            <strong>Verantwoordelijkheid:</strong> U blijft verantwoordelijk
            voor de producten totdat deze bij ons zijn afgeleverd. Wij raden aan
            een verzendcode te bewaren als bewijs van verzending.
          </li>
        </ul>
      </section>

      {/* Value Reduction Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Vermindering van waarde
        </h2>
        <p className='mb-4'>
          Indien een geretourneerd product of de verpakking beschadigd is door
          gebruik dat verder gaat dan noodzakelijk om het artikel te testen,
          behouden wij ons het recht voor om waardevermindering in rekening te
          brengen.
        </p>
        <p>
          <strong>Tip:</strong> Behandel het product zorgvuldig en gebruik
          beschermend verpakkingsmateriaal bij het terugsturen.
        </p>
      </section>

      {/* Warranty Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Garantie</h2>
        <p className='mb-4'>
          De meeste producten vallen onder de wettelijke garantie. Dit betekent
          dat u recht heeft op een deugdelijk product dat voldoet aan redelijke
          verwachtingen.
        </p>
        <ul className='list-disc ml-6'>
          <li className='mb-2'>
            Elektronische producten hebben een garantieperiode van 1 jaar, mits
            het product normaal is gebruikt.
          </li>
          <li>
            <strong>Let op:</strong> Niet alle producten hebben een
            garantieperiode. Raadpleeg hiervoor de specifieke productinformatie.
          </li>
        </ul>
        <p className='mt-4'>
          Heeft u een defect product ontvangen? Neem dan binnen 5 werkdagen
          contact met ons op via{' '}
          <a
            href='mailto:support@safekit.nl'
            className='text-blue-500 hover:underline'
          >
            support@safekit.nl
          </a>
          , zodat wij samen naar een oplossing kunnen zoeken.
        </p>
      </section>

      {/* Digital Products Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Geen retour voor digitale producten
        </h2>
        <p>
          E-books en andere digitale producten die via Safekit.nl zijn
          aangeschaft, kunnen niet worden geretourneerd. Alle aankopen van
          digitale producten zijn definitief.
        </p>
      </section>

      {/* Return Steps Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Stappen voor retourzending
        </h2>
        <ol className='list-decimal ml-6'>
          <li>
            Neem binnen 14 dagen na ontvangst contact met ons op via{' '}
            <a
              href='mailto:support@safekit.nl'
              className='text-blue-500 hover:underline'
            >
              support@safekit.nl
            </a>
            .
          </li>
          <li>
            Verpak de producten zorgvuldig in de originele verpakking of een
            gelijkwaardige beschermende verpakking.
          </li>
          <li>Stuur het pakket naar het retouradres dat wij u verstrekken.</li>
          <li>
            Na ontvangst van de retourzending storten wij het aankoopbedrag,
            exclusief de kosten voor de retourzending, binnen 10 werkdagen terug
            op uw rekening.
          </li>
        </ol>
      </section>

      {/* Refund Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>Terugbetaling</h2>
        <p className='mb-4'>
          Wij verwerken uw terugbetaling binnen 10 werkdagen na ontvangst van de
          retourzending. Houd er rekening mee dat:
        </p>
        <ul className='list-disc ml-6'>
          <li>Verzendkosten voor retourzendingen niet worden vergoed.</li>
          <li>
            U verantwoordelijk blijft voor de staat van het geretourneerde
            product tijdens het transport.
          </li>
        </ul>
      </section>

      {/* Exceptions Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Belangrijk: Uitzonderingen op het retourbeleid
        </h2>
        <ul className='list-disc ml-6'>
          <li>Etenswaren en dranken (vanwege hygiëne en voedselveiligheid).</li>
          <li>
            Digitale producten zoals e-books en downloads (vanwege de aard van
            het product).
          </li>
        </ul>
      </section>

      {/* Sealed Packages Section */}
      <section className='mb-8'>
        <h2 className='text-2xl font-extrabold mb-4'>
          Gesealde noodpakketten – uitzondering retourrecht
        </h2>
        <p className='mb-4'>
          Onze noodpakketten worden geleverd in een gesealde verpakking, zoals
          een voedselveilige emmer. Deze emmers zijn speciaal ontworpen om
          voedsel op te slaan en voldoen aan hoge hygiëne- en veiligheidsnormen.
          Om deze normen te waarborgen, kunnen noodpakketten waarvan de seal is
          verbroken, niet worden geretourneerd.
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className='text-2xl font-extrabold mb-4'>Contact</h2>
        <p>
          Voor vragen over ons retourbeleid of uw retourzending kunt u contact
          opnemen via:
        </p>
        <ul className='list-disc ml-6'>
          <li>
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

export default ReturnPolicy
