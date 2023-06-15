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
  jobTitle: 'React Frontend Developer Freelancer',
  companyName: 'Spafax',
  timeLine: 'January 2022 - Current',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Remote',
  companyDescription: 'The project I am working on for Spafax is https://enroute.aircanada.com. It is a blog platform that is built in such a way that allows my client and their team of editors to create and adjust custom pages without using up any developer time.',
  responsibilities: [
    'In direct communication with my clients via Slack, Monday.com & video calls',
    'In charge of ensuring great SEO',
    'Always evaluating ROI feedback on optimizations they may or may not have considered',
    'Offer quick response to emergencies',
    'Capable of quickly reverting the site\'s version via the use of Netlify',
    'Enable editors to have autonomy over page creation with the use of templates and modules (lego blocks) on Contentful',
    'Each pages have an English and French version',
    'Pages are generated statically with the use of Gatsby'
  ]
}, {
  jobTitle: 'React Frontend Developer',
  companyName: 'RenoRun',
  timeLine: 'Mid February 2022 - Mid July 2022',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Remote',
  companyDescription: 'Using the Renorun platform, a user can order and have delivered building materials within hours of their purchase.',
  responsibilities: [
    'Built React features using React Redux global state management',
    'Handled payment related tasks',
    'Used Agile Methodolity project management approach',
    'Frequently performed Code Reviews',
    'Participated in many lunch and learns & retro spects',
    'Reviewed and gave feed back on designs',
    'Wrote and managed project scopes',
    'Create tasks based on project scopes I would write'
  ]
}, {
  jobTitle: 'React Frontend Developer',
  companyName: 'Pact',
  timeLine: 'January 2020 - December 2021',
  companyLocation: 'Montreal, Quebec',
  officeType: "Onsite & Remote",
  companyDescription: 'Pact is a consultent agency that would hande everything from Frontend, Backend, DevOps, Design, SEO, Accessibility Complience, Copy, ... anything website related, we did it.',
  responsibilities: [
    'Create and implement the projects CMS (Contentful mostly)',
    'Offer support to the Shopify developers',
    'Jump from project to project to implement Accessibility best practices',
    'Build projets from start to finish',
    'Inherit projects, improve and maintain them',
    'In direct communication with my clients',
    'Offer quick response to emergencies',
    'Always evaluating ROI feedback on optimizations they may or may not have considered'
  ],
}, {
  jobTitle: 'Frontend Developer Freelancer',
  companyName: 'RenoRun',
  timeLine: 'February 2019 - April 2019',
  companyLocation: 'Montreal, Quebec',
  officeType: 'Onsite',
  companyDescription: 'Using the Renorun platform, a user can order and have delivered building materials within hours of their purchase.',
  responsibilities: [
    'Help their team of Dart and Angular* (I can\'t remember the version they used) developers with some Bootstrap marketplace template',
    'Offered support in Angulay*',
    'Attend and lead meetings'
  ],
}, {
  jobTitle: 'Angular Frontend Developer & Team Lead',
  companyName: 'SimpTek',
  timeLine: 'December 2016 - February 2019',
  companyLocation: 'Fredericton, New-Brunswick',
  officeType: 'Onsite',
  companyDescription: 'SimpTek was a startup company that focused on big data energy analytics. They would install hardware in users home which would then display useful information in regards to their power usage on a Dashboard they had access too.',
  responsibilities: [
    'Create new or adjust previous processes',
    'Delegate tasks to the Front-End team',
    'Held Frontend interviews',
    'Held performance reviews',
    'Ensure no one within the tech team was blocked and if they were, work toward unblocking them',
    'Represented the tech team in meetings',
    'Research on new technologies to better the efficiency and effectiveness of the Tech Team',
    'Wrote many documentations such as project scope, feature definitions, processes, terminalogy/definitions related goods',
    'Lead sprints and their retrospects',
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