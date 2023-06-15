import React, { FC } from "react"
import Skills from "./Skills"

type SkillsData = Array<{
  skillType: string
  skills: string[]
}>

export const skillsData: SkillsData = [{
  skillType: 'Linguistics',
  skills: [
    'HTML',
    'CSS',
    'SCSS',
    'Styled Component',
    'Vanila Javascript',
    'Typescript',
    'React',
    'Next.js',
    'Gatsby',
    'React Redux',
    'Gsap (Greenstock)',
    'GraphQl',
    'Liquid'
    
  ]
}, {
  skillType: 'Frontend Proficiencies',
  skills: [
    'a11y (Accessibility)',
    'SEO',
    'Deploy code to production',
    'Setting up multiple environments',
    'Eslint',
    'API',
    'Implementing UI libraries',
    'Shopify',
    'Email building',
    'Custom Gmail signature'
  ]
}, {
  skillType: 'Project Management Platforms',
  skills: [
    'Monday',
    'Asana',
    'Trello - Atlassian',
    'Jira - Atlassian',
    'Confluence - Atlassian'
  ]
}, {
  skillType: 'Other 3rd Party Platforms',
  skills: [
    'Contentful',
    'Netlify',
    'Vercel',
    'Authentication - Supabase',
    'Database - Supabase',
    'Github',
    'GitLab'
  ]
}, {
  skillType: 'Experience in',
  skills: [
    'Team Lead',
    'Project Manager',
    'Consucting efficient meetings',
    'Consucting product demos',
    'Writting documentation',
    'Design feedback & review',
    'Mentor Junior Developers'
  ]
}]

const SkillsContainer: FC = () => {
  return (
    <Skills />
  )
}

export default SkillsContainer