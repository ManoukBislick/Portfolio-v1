import portfolioImage from '../assets/images/portfolio-v1.png'
import figmaPortfolioImage from '../assets/images/figma-portfolio-v1.png'
import kantoorImage from '../assets/images/Kantoor_Manouk copy.jpeg'
import RijnmondImage from '../assets/images/RijnmondDokters.png'
import RijnmondLogoImage from '../assets/images/RijnmondDokters-logo.png'
import HagaLogoImage from '../assets/images/HagaDirect-logo.png'

export type ProjectSection = {
  title: string
  content: string
}

export type Project = {
  slug: string
  title: string
  description: string
  images: string[]
  languages?: string[]
  sections?: ProjectSection[]
  link?: string
  linkTitle?: string
}

export const projects: Project[] = [
  {
    slug: 'portfolio-v1',
    title: 'Portfolio Version 1',
    link: 'https://github.com/',
    linkTitle: 'View project',
    description:
      'My first ever portfolio. Designed with Figma and developed with React and TailwindCSS',
    images: [portfolioImage, figmaPortfolioImage],
    languages: ['React', 'TailwindCSS',],
    sections: [
      {
        title: 'Question',
        content:
          'I wanted to create a portfolio that truly reflects who I am as a person and developer, while keeping the experience as clear and simple as possible.',
      },
      {
        title: 'Result',
        content:
          'I designed the concept in Figma, then built it using React and TailwindCSS with an atomic structure. I focused on reusable components used across the whole website.',
      },
    ],
  },
  {
    slug: 'rijnmond-dokters',
    title: 'Rijnmond Dokters',
    link: 'https://www.rijnmonddokters.nl/',
    linkTitle: 'Visit website',
    description:
      'Rijnmond Dokters is a collaborative organisation of general practitioners that aims to strengthen and improve primary healthcare in the Rotterdam region.',
    images: [RijnmondLogoImage, RijnmondImage],
    languages: ['React', 'Next.js', 'TailwindCSS', 'Storyblok', 'Vercel'],
    sections: [
      {
        title: 'Question',
        content:
          'The client needed a clean and easy-to-use search results page with filtering options to help users quickly find relevant content.',
      },
      {
        title: 'Result',
        content:
          'Based on the Figma design, I implemented and styled the search results experience. This included the result cards, the dynamic result count, and the filtering system to improve usability and structure.',
      },
    ],
  },
  {
    slug: 'hagadirect',
    title: 'HagaDirect',
    link: 'https://www.hagadirect.nl/',
    linkTitle: 'Visit website',
    description:
      'HagaDirect is a part of HagaZiekenhuis that provides fast, planned medical care with short waiting times for non-urgent treatments.',
    images: [HagaLogoImage, kantoorImage],
    languages: ['React', 'Next.js', 'TailwindCSS', 'Storyblok'],
    sections: [
      {
        title: 'Question',
        content:
          'The client wanted an accessible website that allows users to quickly and easily make an appointment or find more information about HagaDirect.',
      },
      {
        title: 'Result',
        content:
          'At 0to9, I worked mainly on the contact page. I built and styled the “HagaDirect locations” cards and also styled the “Public transport” section within the “Accessibility” component.',
      },
    ],
  },
]
