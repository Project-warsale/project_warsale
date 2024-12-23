import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms Policy',
  openGraph: {
    title: 'Terms Policy',
    description: 'Terms policy of the site.',
  },
}

const TermsAndConditions: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80 mt-10'>
      <h1 className='text-2xl font-bold text-gray-800'>
        Algemene Voorwaarden Safekit.nl
      </h1>

      <h2 className='mt-6 text-lg font-semibold text-gray-700'>
        Inhoudsopgave:
      </h2>
      <ol className='list-decimal pl-6 mt-4 text-gray-600'>
        <li>Definities</li>
        <li>Herroepingsrecht</li>
        <li>Klachtenregeling</li>
        <li>Duurtransacties: duur, opzegging en verlenging</li>
        <li>De overeenkomst</li>
        <li>Identiteit van de ondernemer</li>
        <li>Toepasselijkheid</li>
        <li>De prijs</li>
        <li>Betaling</li>
        <li>Kosten in geval van herroeping</li>
        <li>Geschillen</li>
        <li>Levering en uitvoering</li>
        <li>Conformiteit en garantie</li>a
        <li>Aanvullende of afwijkende bepalingen</li>
        <li>Gesealde Producten – Uitzondering Herroepingsrecht</li>
      </ol>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 1 – Definities
      </h3>
      <p className='mt-2 text-gray-600'>
        In deze voorwaarden verstaan we onder:
      </p>
      <ul className='list-disc pl-6 mt-4 text-gray-600'>
        <li>
          <span className='font-semibold'>Bedenktijd:</span> de periode waarin
          de consument kan beslissen om de overeenkomst niet te behouden;
        </li>
        <li>
          <span className='font-semibold'>Consument:</span> een natuurlijke
          persoon die niet handelt voor doeleinden gerelateerd aan zijn
          handels-, bedrijfs-, ambachts-, of beroepsactiviteit;
        </li>
        <li>
          <span className='font-semibold'>Dag:</span> kalenderdag;
        </li>
        <li>
          <span className='font-semibold'>Duurtransactie:</span> een
          overeenkomst die strekt tot de regelmatige levering van goederen,
          diensten, of digitale inhoud gedurende een bepaalde periode;
        </li>
        <li>
          <span className='font-semibold'>Duurzame gegevensdrager:</span> elk
          middel dat de consument of ondernemer in staat stelt informatie op te
          slaan op een wijze die toekomstige raadpleging of gebruik mogelijk
          maakt;
        </li>
        <li>
          <span className='font-semibold'>Herroepingsrecht:</span> de
          mogelijkheid van de consument om binnen de bedenktijd af te zien van
          de overeenkomst;
        </li>
      </ul>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 2 – Herroepingsrecht
      </h3>
      <p className='mt-4 text-gray-600'>
        Bij producten: De consument kan een productovereenkomst zonder opgave
        van redenen ontbinden gedurende 14 dagen. Deze termijn begint op de dag
        na ontvangst van het product door de consument of een vooraf aangewezen
        derde die niet de vervoerder is.
      </p>
      <p className='mt-4 text-gray-600'>
        Tijdens de bedenktijd zal de consument het product en de verpakking
        zorgvuldig behandelen. Hij zal het product slechts uitpakken of
        gebruiken in de mate die nodig is om de aard, de kenmerken en de werking
        van het product vast te stellen.
      </p>
      <p className='mt-4 text-gray-600'>
        Indien de consument gebruikmaakt van zijn herroepingsrecht, zal hij het
        product met alle geleverde toebehoren en, indien redelijkerwijs
        mogelijk, in originele staat en verpakking retourneren, conform de door
        Safekit.nl verstrekte redelijke en duidelijke instructies.
      </p>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 3 – Klachtenregeling
      </h3>
      <p className='mt-4 text-gray-600'>
        Safekit.nl heeft een goed toegankelijke klachtenprocedure die op de
        website wordt gepubliceerd. Klachten over de uitvoering van de
        overeenkomst moeten binnen een redelijke tijd, volledig en duidelijk
        omschreven worden ingediend bij Safekit.nl, nadat de consument de
        gebreken heeft ontdekt.
      </p>
      <p className='mt-4 text-gray-600'>
        Bij Safekit.nl ingediende klachten worden binnen een termijn van 14
        dagen vanaf de datum van ontvangst beantwoord. Als een klacht een
        voorzienbaar langere verwerkingstijd vereist, reageert Safekit.nl binnen
        14 dagen met een ontvangstbevestiging en een indicatie wanneer de
        consument een meer uitvoerige reactie kan verwachten.
      </p>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 4 – Duurtransacties: duur, opzegging en verlenging
      </h3>
      <p className='mt-4 text-gray-600'>
        Een duurtransactie die voor onbepaalde tijd is aangegaan, kan altijd
        worden opgezegd met inachtneming van de overeengekomen opzeggingsregels
        en een opzegtermijn van niet meer dan één maand.
      </p>
      <p className='mt-4 text-gray-600'>
        Een duurtransactie die voor bepaalde tijd is aangegaan, eindigt
        automatisch en kan niet stilzwijgend worden verlengd.
      </p>

      {/* Add additional articles with similar structure here */}
    </div>
  )
}

export default TermsAndConditions
