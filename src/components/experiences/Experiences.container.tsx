import React, { FC } from "react"
import Experiences from "./Experiences"

export type ExperiencesListType = Array<{
  jobTitle: string
  companyName: string
  timeLine: string
  companyLocation: string
  officeType: 'Onsite' | 'Remote' | 'Onsite & Remote'
  companyDescription: string
  responsibilities: string[]
}>

const experiences: ExperiencesListType = [{
  jobTitle: 'React Frontend Developer',
  companyName: 'Livescale',
  timeLine: 'July 2023 - January 2024',
  companyLocation: 'Montreal, Quebec',
  officeType: "Onsite & Remote",
  companyDescription: 'Livescale is a live shopping platform that integrates real-time video with e-commerce to provide interactive and engaging shopping experiences. It offers businesses tools to host live video events, manage audience interactions, and facilitate instant purchases.',
  responsibilities: [
    'Worked on multiple applications/projects using Typescript with NextJS version 13',
    'Managed my own projects',
    'Presented Demo\'s to other internal departments',
    'Offer quick response to emergencies',
    'Created a Shopify app and Shopify embed app',
    'Created a script for our clients to use that allowed them to embed a live room experience on their website.',
    'Worked with Mux Player and Mux Uploader',
    'Worked with Tailwind and Storybook',
    'Created documentations',
    'Collaborate with our Designer to optimize customer experience'
  ]
}, {
  jobTitle: 'React Frontend Developer Freelancer',
  companyName: 'Spafax',
  timeLine: 'January 2022 - Current',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Remote',
  companyDescription: 'The project I am working on for Spafax is https://enroute.aircanada.com. It is a blog platform that is built in such a way that allows my client and their team of editors to create and adjust custom pages without having to use up any additional developer time.',
  responsibilities: [
    'In direct communication with my clients via Slack, Monday.com & video calls',
    'In charge of ensuring great SEO',
    'Always evaluating ROI feedback on optimizations they may or may not have requested',
    'Offer quick response to emergencies',
    'Capable of quickly reverting the site\'s version via the use of Netlify',
    'Enable editors to have autonomy over page creation with the use of templates and modules (lego blocks) on Contentful',
    'All pages have an English and French version',
    'Pages are generated statically with the use of Gatsby'
  ]
}, {
  jobTitle: 'React Frontend Developer',
  companyName: 'RenoRun',
  timeLine: 'February 2022 - July 2022',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Remote',
  companyDescription: 'Using the Renorun platform, a user can order and have building materials delivered within hours of their purchase.',
  responsibilities: [
    'Built React features using React Redux global state management',
    'Handled payment related tasks',
    'Used Agile Methodology project management approach',
    'Frequently performed Code Reviews',
    'Participated in many lunch and learns & retro specs',
    'Reviewed and gave feedback on designs',
    'Wrote and managed project scopes',
    'Create tasks based on project scopes I would write'
  ]
}, {
  jobTitle: 'React Frontend Developer',
  companyName: 'Pact',
  timeLine: 'January 2020 - December 2021',
  companyLocation: 'Montreal, Quebec',
  officeType: "Onsite & Remote",
  companyDescription: 'Pact is a consultant agency that handles everything from Frontend, Backend, DevOps, Design, SEO, Accessibility Compliance, Copy, ... anything website related, we did it.',
  responsibilities: [
    'Create and implement the projects CMS (Contentful mostly)',
    'Offer support to the Shopify developers',
    'Jump from project to project to implement Accessibility best practices',
    'Build projects from start to finish',
    'Inherit projects, improve and maintain them',
    'In direct communication with my clients',
    'Offer quick response to emergencies',
    'Always evaluating ROI feedback on optimizations they may or may not have requested'
  ],
}, {
  jobTitle: 'Frontend Developer Freelancer',
  companyName: 'RenoRun',
  timeLine: 'February 2019 - April 2019',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Onsite',
  companyDescription: 'Using the Renorun platform, a user can order and have building materials delivered within hours of their purchase.',
  responsibilities: [
    'Help their team of Dart and Angular* (I can\'t remember the version they used) developers with some Bootstrap marketplace template',
    'Offered support in Angular*',
    'Attend and lead meetings'
  ],
}, {
  jobTitle: 'Angular Frontend Developer & Team Lead',
  companyName: 'SimpTek',
  timeLine: 'December 2016 - February 2019',
  companyLocation: 'Fredericton, New-Brunswick',
  officeType: 'Onsite',
  companyDescription: 'SimpTek was a startup company that focused on big data energy analytics. They would install hardware in user\'s home which would then display useful information in regard to their power usage on a Dashboard they had access too.',
  responsibilities: [
    'Create new or adjust previous processes',
    'Delegate tasks to the Front-End team',
    'Held Frontend interviews',
    'Held performance reviews',
    'Ensure no one within the tech team was blocked and if they were, work toward unblocking them',
    'Represented the tech team in meetings',
    'Research on new technologies to better the efficiency and effectiveness of the Tech Team',
    'Wrote many documentations such as project scope, feature definitions, processes, terminology/definitions related goods',
    'Lead sprints and their retro specs',
    'Conducted demo’s of the current product & upcoming features',
    'Created, tested and managed custom emails',
    'Worked on both version 1 and 2 of their dashboard',
    'Worked on both version 1 and 2 of their marketing site',
  ]
}]

const ExperiencesContainer: FC = () => {

  return (
    <Experiences list={experiences} />
  )
}

export default ExperiencesContainer