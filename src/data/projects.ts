import caseImage from '../assets/images/cherry-blossom-pink-flowers-blue-sky-clear-sky-spring-tree-3840x2160-4288.jpg'
import kantoorImage from '../assets/images/Kantoor_Manouk copy.jpeg'
import keeperImage from '../assets/images/Hobby_Manouk copy.jpeg'

export type ProjectSection = {
  title: string
  content: string
}

export type Project = {
  slug: string
  title: string
  description: string
  images: string[]
  sections?: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'portfolio-platform',
    title: 'Portfolio Platform',
    description:
      'A portfolio concept focused on clear storytelling, responsive layouts, and a front-end experience that feels polished but still personal.',
    images: [kantoorImage, caseImage],
    sections: [
      {
        title: 'Overview',
        content:
          'This project explores how design and development can work together to present personal work in a way that feels structured, expressive, and easy to navigate.',
      },
      {
        title: 'Approach',
        content:
          'I built the layout around reusable React components so new sections, media, and project stories can be added without rebuilding the entire page.',
      },
    ],
  },
  {
    slug: 'creative-campaign',
    title: 'Creative Campaign',
    description:
      'A campaign-style concept where layout, copy, and visuals are designed to feel bold, readable, and dynamic across different sections.',
    images: [caseImage, keeperImage],
    sections: [
      {
        title: 'Visual Direction',
        content:
          'The design uses contrast, oversized spacing, and a focused color palette to create a strong identity while staying easy to scan.',
      },
      {
        title: 'Result',
        content:
          'The final structure supports hero content, supporting visuals, and deeper storytelling without losing rhythm or clarity.',
      },
    ],
  },
  {
    slug: 'frontend-experiments',
    title: 'Front-end Experiments',
    description:
      'A set of interface experiments exploring motion, responsiveness, and component systems that stay flexible and maintainable.',
    images: [keeperImage, kantoorImage],
    sections: [
      {
        title: 'Focus',
        content:
          'These experiments test interaction patterns, composition, and reusable components to understand what feels strongest before production work begins.',
      },
      {
        title: 'Takeaway',
        content:
          'The experiments help shape cleaner implementation decisions later, because layout and behavior have already been explored in a smaller setting.',
      },
    ],
  },
]
