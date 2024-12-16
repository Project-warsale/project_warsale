import { PiHeadsetBold } from 'react-icons/pi'
import { TbBus } from 'react-icons/tb'
import { FaNewspaper, FaRegCreditCard } from 'react-icons/fa6'
import { CgFileDocument } from 'react-icons/cg'
import { MdOutlinePrivacyTip } from 'react-icons/md'

export const customerServices = [
  {
    icon: PiHeadsetBold,
    title: 'Contact Us',
    description:
      'We are here for you. On this page you will find how to reach us.',
    href: '/contact',
  },
  {
    icon: TbBus,
    title: 'Delivery and collection',
    description:
      'Here you will find everything about our shipping and colletion options.',
    href: '/delivery-options',
  },
  {
    icon: FaRegCreditCard,
    title: 'Payment options',
    description: 'Here you will find all information about payment options.',
    href: '/payment-options',
  },
  {
    icon: CgFileDocument,
    title: 'About us',
    description:
      'Curious about the background of Allprepare? You can read it on this page.',
    href: '/about-us',
  },
  {
    icon: FaNewspaper,
    title: 'Returns',
    description: 'Still not completely satisfied? Read here about returns.',
    href: '/returns-policy',
  },
  {
    icon: CgFileDocument,
    title: 'Warranty',
    description: 'Here you will find our warranty conditions',
    href: '/warranty',
  },
  {
    icon: CgFileDocument,
    title: 'Terms and Conditions',
    description: 'Here you will find our general terms and conditions.',
    href: '/terms-policy',
  },
  {
    icon: MdOutlinePrivacyTip,
    title: 'Privacy',
    description: 'We respect your data. Read more here.',
    href: 'privacy-policy',
  },
  {
    icon: CgFileDocument,
    title: 'Complaints procedure',
    description: 'We always try to find a solution together.',
    href: '/complaints-procedure',
  },
]
