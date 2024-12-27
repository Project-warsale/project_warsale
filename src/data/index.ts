import { PiHeadsetBold } from 'react-icons/pi'
import { TbBus } from 'react-icons/tb'
import { FaNewspaper } from 'react-icons/fa6'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlinePrivacyTip } from 'react-icons/md'

export const service = [
  { href: '/terms-policy', label: 'Algemene Voorwaarden' },
  { href: '/privacy-policy', label: 'Privacybeleid' },
  { href: '/delivery-options', label: 'Verzendbeleid' },
  { href: '/returns-policy', label: 'Retourbeleid' },
  { href: '/contact', label: 'Contact' },
]

export const customerServices = [
  {
    icon: PiHeadsetBold,
    title: 'Contact',
    description:
      'Wij zijn er voor u. Op deze pagina vindt u hoe u ons kunt bereiken.',
    href: '/contact',
  },
  {
    icon: TbBus,
    title: 'Verzendbeleid',
    description: 'Hier vindt u alles over onze verzend- en afhaalopties.',
    href: '/delivery-options',
  },
  {
    icon: FaNewspaper,
    title: 'Retourbeleid',
    description:
      'Nog steeds niet helemaal tevreden? Lees hier over retourneren.',
    href: '/returns-policy',
  },

  {
    icon: CgFileDocument,
    title: 'Algemene Voorwaarden',
    description: 'Hier vindt u onze algemene voorwaarden.',
    href: '/terms-policy',
  },
  {
    icon: MdOutlinePrivacyTip,
    title: 'Privacybeleid',
    description: 'Wij respecteren uw gegevens. Lees hier meer.',
    href: '/privacy-policy',
  },
]

export const pages = [
  {
    title: 'Contact',
    description: 'Op deze pagina kunt u ons een e-mail sturen.',
    href: '/contact',
  },
  {
    title: 'Klantenservice',
    description:
      'Neem contact op met de klantenservice voor vragen, hulp en ondersteuning.',
    href: '/customer-services',
  },
  {
    title: 'Verzendbeleid',
    description:
      'Ontdek de verschillende bezorgopties die beschikbaar zijn voor uw bestellingen.',
    href: '/delivery-options',
  },
  {
    title: 'Privacybeleid',
    description:
      'Ontdek hoe wij uw persoonlijke gegevens verwerken en beschermen.',
    href: '/privacy-policy',
  },
  {
    title: 'Producten',
    description: 'Bekijk onze productcollectie en vind wat u nodig hebt.',
    href: '/products',
  },
  {
    title: 'Retourbeleid',
    description:
      'Bekijk ons ​​beleid voor het retourneren van artikelen en het verkrijgen van restituties.',
    href: '/returns-policy',
  },
  {
    title: 'Algemene Voorwaarden',
    description:
      'Lees de algemene voorwaarden die van toepassing zijn op onze diensten.',
    href: '/terms-policy',
  },
]
