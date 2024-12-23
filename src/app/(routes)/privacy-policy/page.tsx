import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retourbeleid en terugbetalingen',
  openGraph: {
    title: 'Retourbeleid en terugbetalingen',
    description: 'Informatie over ons retourbeleid en terugbetalingen.',
  },
}

const ReturnPolicy: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      <h1 className='text-2xl font-semibold text-[#333] mb-6'>
        Retourbeleid en terugbetalingen Safekit.nl
      </h1>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Productretour</h2>
        <p className='text-sm text-[#666]'>
          U heeft de mogelijkheid om uw aankopen bij Safekit.nl binnen 14 dagen
          na ontvangst te registreren voor retourzending. Na deze registratie
          heeft u nog eens 14 dagen om de producten daadwerkelijk te
          retourneren.
          <br />
          <br />
          <strong>Let op:</strong> Etenswaren en dranken vallen niet onder het
          retourrecht en kunnen niet worden geretourneerd, in overeenstemming
          met de wettelijke uitzonderingen voor hygiëne en voedselveiligheid.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Retourprocedure</h2>
        <div className='text-sm text-[#666]'>
          Indien u een artikel wenst terug te sturen, verzoeken wij u binnen 14
          dagen na ontvangst contact op te nemen via{' '}
          <a href='mailto:support@safekit.nl' className='text-blue-600'>
            support@safekit.nl
          </a>
          . Vermeld in uw e-mail:
        </div>
        <ul className='list-disc pl-5 text-sm text-[#666]'>
          <li>Uw volledige adres</li>
          <li>Het bestelnummer</li>
          <li>De items die u wilt retourneren</li>
        </ul>
        <div className='text-sm text-[#666]'>
          Na uw melding ontvangt u instructies voor de retourzending. U heeft
          vervolgens 14 dagen om de producten te retourneren.
          <br />
          <br />
          <strong>Kosten retourzending:</strong> De retourkosten zijn voor eigen
          rekening.
          <br />
          <strong>Verantwoordelijkheid:</strong> U blijft verantwoordelijk voor
          de producten totdat deze bij ons zijn afgeleverd. Wij raden aan een
          verzendcode te bewaren als bewijs van verzending.
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Vermindering van waarde</h2>
        <p className='text-sm text-[#666]'>
          Indien een geretourneerd product of de verpakking beschadigd is door
          gebruik dat verder gaat dan noodzakelijk om het artikel te testen,
          behouden wij ons het recht voor om waardevermindering in rekening te
          brengen.
          <br />
          <br />
          <strong>Tip:</strong> Behandel het product zorgvuldig en gebruik
          beschermend verpakkingsmateriaal bij het terugsturen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Garantie</h2>
        <p className='text-sm text-[#666]'>
          De meeste producten vallen onder de wettelijke garantie. Dit betekent
          dat u recht heeft op een deugdelijk product dat voldoet aan redelijke
          verwachtingen.
          <br />
          <br />
          <strong>Elektronische producten:</strong> hebben een garantieperiode
          van 1 jaar, mits het product normaal is gebruikt.
          <br />
          <br />
          <strong>Let op:</strong> Niet alle producten hebben een
          garantieperiode. Raadpleeg hiervoor de specifieke productinformatie.
          <br />
          Heeft u een defect product ontvangen? Neem dan binnen 5 werkdagen
          contact met ons op via{' '}
          <a href='mailto:support@safekit.nl' className='text-blue-600'>
            support@safekit.nl
          </a>
          , zodat wij samen naar een oplossing kunnen zoeken.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Geen retour voor digitale producten
        </h2>
        <p className='text-sm text-[#666]'>
          E-books en andere digitale producten die via Safekit.nl zijn
          aangeschaft, kunnen niet worden geretourneerd. Alle aankopen van
          digitale producten zijn definitief.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Stappen voor retourzending
        </h2>
        <p className='text-sm text-[#666]'>
          <strong>Volg deze stappen:</strong>
        </p>
        <ul className='list-disc pl-5 text-sm text-[#666]'>
          <li>
            Neem binnen 14 dagen na ontvangst contact met ons op via{' '}
            <a href='mailto:support@safekit.nl' className='text-blue-600'>
              support@safekit.nl
            </a>
            .
          </li>
          <li>
            Verpak de producten zorgvuldig in de originele verpakking of een
            gelijkwaardige beschermende verpakking.
          </li>
          <li>Stuur het pakket naar het retouradres dat wij u verstrekken.</li>
        </ul>
        <p className='text-sm text-[#666]'>
          Na ontvangst van de retourzending storten wij het aankoopbedrag,
          exclusief de kosten voor de retourzending, binnen 10 werkdagen terug
          op uw rekening.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Terugbetaling</h2>
        <div className='text-sm text-[#666]'>
          <strong>Uitbetaling voor retourzendingen:</strong> Wij verwerken uw
          terugbetaling binnen 10 werkdagen na ontvangst van de retourzending.
          Houd er rekening mee dat:
          <br />
          <br />
          <ul className='list-disc pl-5'>
            <li>Verzendkosten voor retourzendingen niet worden vergoed.</li>
            <li>
              U verantwoordelijk blijft voor de staat van het geretourneerde
              product tijdens het transport.
            </li>
          </ul>
          <br />
          <strong>Gedeeltelijke terugbetaling:</strong> Als geretourneerde
          producten beschadigd zijn door gebruik of onzorgvuldig verpakken,
          wordt de waardevermindering in mindering gebracht op het terug te
          betalen bedrag.
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Belangrijk: Uitzonderingen op het retourbeleid
        </h2>
        <div className='text-sm text-[#666]'>
          De volgende producten kunnen niet worden geretourneerd:
        </div>
        <ul className='list-disc pl-5 text-sm text-[#666]'>
          <li>Etenswaren en dranken (vanwege hygiëne en voedselveiligheid).</li>
          <li>
            Digitale producten zoals e-books en downloads (vanwege de aard van
            het product).
          </li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Retouradres</h2>
        <div className='text-sm text-[#666]'>
          Het retouradres wordt aan u verstrekt nadat u uw retour heeft
          aangemeld via{' '}
          <a href='mailto:support@safekit.nl' className='text-blue-600'>
            support@safekit.nl
          </a>
          . Zorg ervoor dat u het adres correct gebruikt om vertragingen of
          problemen met de retourzending te voorkomen.
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Gesealde noodpakketten – uitzondering retourrecht
        </h2>
        <div className='text-sm text-[#666]'>
          Onze noodpakketten worden geleverd in een gesealde verpakking, zoals
          een voedselveilige emmer. Deze emmers zijn speciaal ontworpen om
          voedsel op te slaan en voldoen aan hoge hygiëne- en veiligheidsnormen.
          Om deze normen te waarborgen, kunnen noodpakketten waarvan de seal is
          verbroken, niet worden geretourneerd.
          <br />
          <br />
          Volgens artikel 6:230p lid f sub 3 van het Burgerlijk Wetboek is het
          herroepingsrecht uitgesloten voor producten die om redenen van
          gezondheidsbescherming of hygiëne niet geschikt zijn om te worden
          geretourneerd indien de verzegeling na levering is verbroken.
          <br />
          <br />
          Zodra de seal van een noodpakket is geopend, kunnen wij niet meer
          garanderen dat het product geschikt blijft voor hergebruik of veilige
          voedselopslag. Hierdoor vervalt het recht op retourneren wanneer de
          verpakking is geopend.
          <br />
          <br />
          Wij adviseren klanten om de seal alleen te verbreken als u zeker weet
          dat u het product wilt gebruiken. Mocht u vragen hebben over een
          product, neem dan gerust contact met ons op vóór opening.
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Contact</h2>
        <div className='text-sm text-[#666]'>
          Voor vragen over ons retourbeleid of uw retourzending kunt u contact
          opnemen via:
          <br />
          <br />
          E-mail:{' '}
          <a href='mailto:support@safekit.nl' className='text-blue-600'>
            support@safekit.nl
          </a>
          <br />
          Website:{' '}
          <a href='https://safekit.nl' className='text-blue-600'>
            https://safekit.nl
          </a>
        </div>
      </section>
    </div>
  )
}

export default ReturnPolicy
