import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Returns Policy',
  openGraph: {
    title: 'Returns Policy',
    description: 'This page is about policy of order returns.',
  },
}

const ReturnPolicy: React.FC = () => {
  return (
    <div className='mx-auto px-3 md:px-5 lg:px-24 xl:px-56 2xl:px-80'>
      <h1 className='text-2xl font-semibold text-[#333] mb-6'>Retourneren</h1>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Binnen 14 dagen gratis retourneren
        </h2>
        <p className='text-sm text-[#666]'>
          Bent u niet tevreden over de bestelde producten? Dat is jammer en dit
          lossen wij graag voor u op. U kunt uw product binnen 14 dagen na
          ontvangst van de producten, zonder opgave van redenen gratis terug
          sturen. Voorwaarde hiervoor is dat de producten in de originele staat
          en verpakking (indien redelijkerwijs mogelijk) aan ons geretourneerd
          worden. Bekijk het product dus gerust zoals u het in winkel zou doen.
          Bij zichtbare gebruikssporen, missende accessoires of een ontbrekende
          verpakking heeft u geen recht meer op het volledige aankoopbedrag. In
          dit geval krijgt u maximaal 75 % van uw aankoopbedrag terug. Om het
          herroepingsrecht uit te oefenen, moet u ons via een ondubbelzinnige
          verklaring (bv. schriftelijk per post of e-mail) op de hoogte stellen
          van uw beslissing de overeenkomst te herroepen. U kunt hiervoor
          gebruikmaken van het beschikbaar gestelde modelformulier voor
          herroeping, maar bent hiertoe niet verplicht. Om de herroepingstermijn
          na te leven volstaat het om uw mededeling betreffende uw uitoefening
          van het herroepingsrecht te verzenden voordat de herroepingstermijn is
          verstreken
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Om het herroepingsrecht uit te oefenen
        </h2>
        <p className='text-sm text-[#666]'>
          Om het herroepingsrecht uit te oefenen, moet u ons via een
          ondubbelzinnige verklaring (bv. schriftelijk per post of e-mail) op de
          hoogte stellen van uw beslissing de overeenkomst te herroepen. U kunt
          hiervoor gebruikmaken van het beschikbaar gestelde modelformulier voor
          herroeping, maar bent hiertoe niet verplicht.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Uitzonderingen</h2>
        <p className='text-sm text-[#666]'>
          Sommige producten vallen onder de uitzonderingen. Voedsel en water
          zijn uitgesloten van het herroepingsrecht. Deze producten kunt u niet
          binnen 14 dagen terug sturen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Gevolgen van de herroeping
        </h2>
        <p className='text-sm text-[#666]'>
          Als u de overeenkomst herroept, ontvangt u alle betalingen die u tot
          op dat moment heeft gedaan, inclusief leveringskosten (met
          uitzondering van eventuele extra kosten ten gevolge van uw keuze voor
          een andere wijze van levering dan de door ons geboden goedkoopste
          standaard levering) onverwijld en in ieder geval niet later dan 7
          dagen nadat wij op de hoogte zijn gesteld van uw beslissing de
          overeenkomst te herroepen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Garantie</h2>
        <p className='text-sm text-[#666]'>
          Reparatie of vervanging binnen garantie is kosteloos. Wij geven in
          ieder geval één jaar garantie op onze producten bij normaal gebruik.
          Heeft u binnen deze tijd problemen met een product dat u bij ons heeft
          gekocht, lossen wij dit zo snel mogelijk op.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Terugbetaling binnen 2 dagen
        </h2>
        <p className='text-sm text-[#666]'>
          Wij betalen u het volledige aankoopbedrag terug binnen 2 dagen nadat u
          heeft aangegeven gebruik te willen maken van uw herroepingsrecht. Wij
          moeten ondertussen wel het product retour hebben gekregen.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Hoe kan ik retourneren?</h2>
        <p className='text-sm text-[#666]'>
          U kunt uw retour kosteloos inleveren bij een DPD afhaalpunt bij u in
          de buurt. Volg de onderstaande stappen om het retourproces te starten:
        </p>
        <ul className='list-disc pl-5 text-sm text-[#666]'>
          <li>
            Neem eerst contact met ons op om aan te geven dat u de producten
            wilt retourneren.
          </li>
          <li>
            Verpak het product in originele verpakking, samen met alle
            toebehoren en pakbon. Schrijf de reden van het retour sturen op de
            pakbon.
          </li>
          <li>Plak het DPD verzendlabel dat wij u mailen op de doos.</li>
          <li>
            Breng het pakket naar een DPD afhaalpunt bij u in de buurt en laat
            het label daar scannen.
          </li>
          <li>
            Wij storten binnen 7 werkdagen het verschuldigde orderbedrag op uw
            bankrekening.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ReturnPolicy
