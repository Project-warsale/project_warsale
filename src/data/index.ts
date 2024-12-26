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
    title: 'Contact Us',
    description:
      'We are here for you. On this page you will find how to reach us.',
    href: '/contact',
  },
  {
    icon: TbBus,
    title: 'Verzendbeleid',
    description:
      'Here you will find everything about our shipping and colletion options.',
    href: '/delivery-options',
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
    title: 'Retourbeleid',
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
    title: 'Algemene Voorwaarden',
    description: 'Here you will find our general terms and conditions.',
    href: '/terms-policy',
  },
  {
    icon: MdOutlinePrivacyTip,
    title: 'Privacybeleid',
    description: 'We respect your data. Read more here.',
    href: '/privacy-policy',
  },
  {
    icon: CgFileDocument,
    title: 'Complaints procedure',
    description: 'We always try to find a solution together.',
    href: '/complaints-procedure',
  },
]

export const pages = [
  {
    title: 'Contact Us',
    description: 'On this page, you will be able to send us an email.',
    href: '/contact',
  },
  {
    title: 'Customer Services',
    description:
      'Access customer service for inquiries, assistance, and support.',
    href: '/customer-services',
  },
  {
    title: 'Verzendbeleid',
    description:
      'Explore the various delivery options available for your orders.',
    href: '/delivery-options',
  },
  {
    title: 'Privacybeleid',
    description:
      'Understand how we handle and protect your personal information.',
    href: '/privacy-policy',
  },
  {
    title: 'Products',
    description: 'Browse our collection of products and find what you need.',
    href: '/products',
  },
  {
    title: 'Retourbeleid',
    description: 'Review our policy for returning items and obtaining refunds.',
    href: '/returns-policy',
  },
  {
    title: 'Algemene Voorwaarden',
    description: 'Read the terms and conditions that apply to our services.',
    href: '/terms-policy',
  },
]
