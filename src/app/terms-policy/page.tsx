const TermsAndConditions: React.FC = () => {
  return (
    <div className='w-full p-50 bg-gray-50'>
      <h1 className='text-2xl font-bold text-gray-800'>
        Algemene Voorwaarden Allprepare.com
      </h1>

      <h2 className='mt-6 text-lg font-semibold text-gray-700'>
        Inhoudsopgave:
      </h2>
      <ol className='list-decimal pl-6 mt-4 text-gray-600'>
        <li>Artikel 1 - Definities</li>
        <li>Artikel 2 - Identiteit van de ondernemer</li>
        <li>Artikel 3 - Toepasselijkheid</li>
        <li>Artikel 4 - Het aanbod</li>
        <li>Artikel 5 - De overeenkomst</li>
        <li>Artikel 6 - Herroepingsrecht</li>
        <li>Artikel 7 - Kosten in geval van herroeping</li>
        <li>Artikel 8 - Uitsluiting herroepingsrecht</li>
        <li>Artikel 9 - De prijs</li>
        <li>Artikel 10 - Conformiteit en garantie</li>
        <li>Artikel 11 - Levering en uitvoering</li>
        <li>Artikel 12 - Duurtransacties: duur, opzegging en verlenging</li>
        <li>Artikel 13 - Betaling</li>
        <li>Artikel 14 - Klachtenregeling</li>
        <li>Artikel 15 - Geschillen</li>
        <li>Artikel 16 - Aanvullende of afwijkende bepalingen</li>
      </ol>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 1 - Definities
      </h3>
      <p className='mt-2 text-gray-600'>
        In deze voorwaarden wordt verstaan onder:
      </p>
      <ul className='list-disc pl-6 mt-4 text-gray-600'>
        <li>
          <span className='font-semibold'>Bedenktijd:</span> de termijn
          waarbinnen de consument gebruik kan maken van zijn herroepingsrecht;
        </li>
        <li>
          <span className='font-semibold'>Consument:</span> de natuurlijke
          persoon die niet handelt in de uitoefening van beroep of bedrijf en
          een overeenkomst op afstand aangaat met de ondernemer;
        </li>
        <li>
          <span className='font-semibold'>Dag:</span> kalenderdag;
        </li>
        <li>
          <span className='font-semibold'>Duurtransactie:</span> een
          overeenkomst op afstand met betrekking tot een reeks van producten
          en/of diensten, waarvan de leverings- en/of afnameverplichting in de
          tijd is gespreid;
        </li>
        <li>
          <span className='font-semibold'>Duurzame gegevensdrager:</span> elk
          middel dat de consument of ondernemer in staat stelt om informatie op
          te slaan op een manier die toekomstige raadpleging en ongewijzigde
          reproductie mogelijk maakt;
        </li>
        <li>
          <span className='font-semibold'>Herroepingsrecht:</span> de
          mogelijkheid voor de consument om binnen de bedenktijd af te zien van
          de overeenkomst op afstand;
        </li>
        <li>
          <span className='font-semibold'>Modelformulier:</span> het formulier
          dat de consument kan invullen bij gebruik van zijn herroepingsrecht.
        </li>
      </ul>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 2 - Identiteit van de ondernemer
      </h3>
      <address className='mt-4 text-gray-600'>
        <p>Allprepare B.V.</p>
        <p>Laan Corpus Den Hoorn 108</p>
        <p>9728 JR Groningen</p>
        <p>Telefoonnummer: 085 163 024</p>
        <p>
          E-mailadres:{' '}
          <a
            href='mailto:info@allprepare.com'
            className='text-blue-500 hover:underline'
          >
            info@allprepare.com
          </a>
        </p>
        <p>KvK-nummer: 87537346</p>
        <p>Btw-identificatienummer: NL864323001B01</p>
      </address>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 3 - Toepasselijkheid
      </h3>
      <p className='mt-4 text-gray-600'>
        Deze algemene voorwaarden zijn van toepassing op elk aanbod van de
        ondernemer en op elke overeenkomst tussen ondernemer en consument.
      </p>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 4 - Het aanbod
      </h3>
      <p className='mt-4 text-gray-600'>
        Indien een aanbod een beperkte geldigheidsduur heeft of onder
        voorwaarden geschiedt, wordt dit nadrukkelijk in het aanbod vermeld...
      </p>

      {/* Add other articles similarly with appropriate Tailwind CSS styles */}

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 5 - De overeenkomst
      </h3>
      <p className='mt-4 text-gray-600'>
        De overeenkomst komt, onder voorbehoud van het bepaalde in lid 4, tot
        stand op het moment van aanvaarding door de consument van het aanbod en
        het voldoen aan de daarbij gestelde voorwaarden.
      </p>

      <h3 className='mt-8 text-lg font-semibold text-gray-700'>
        Artikel 6 - Herroepingsrecht
      </h3>
      <p className='mt-4 text-gray-600'>
        Bij de aankoop van producten heeft de consument de mogelijkheid de
        overeenkomst zonder opgave van redenen te ontbinden gedurende 14
        dagen...
      </p>
    </div>
  )
}

export default TermsAndConditions
