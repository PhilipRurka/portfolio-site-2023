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
    'Vanilla Javascript',
    'Typescript',
    'React',
    'Next.js',
    'Gatsby',
    'React Redux',
    'Redux Toolkit',
    'Gsap (Greenstock)',
    'GraphQl',
    'Liquid',
    'Tailwind',
  ]
}, {
  skillType: 'Frontend Proficiencies',
  skills: [
    'a11y (Accessibility)',
    'SEO',
    'Google Search Console',
    'Schema.org/Rich Markup',
    'Setting up multiple environments',
    'Eslint',
    'API',
    'Implementing UI libraries',
    'Shopify',
    'Email building',
    'Custom gmail signature',
    'Formatting print page',
    'Populating Google Sheets with data',
    'Deploy code to production',
    'Vercel SWR',
    'Zod',
    'Next.js Server Components',
    'Miro',
    'Iframe embeds'
  ]
}, {
  skillType: 'Project Management Platforms',
  skills: [
    'Monday',
    'Asana',
    'Trello - Atlassian',
    'Jira - Atlassian',
    'Confluence - Atlassian',
    'Linear'
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
  skillType: 'Experience In',
  skills: [
    'Team Lead',
    'Project manager',
    'Conducting efficient meetings',
    'Conducting product demos',
    'Writing documentation',
    'Design feedback & review',
    'Mentor junior developers'
  ]
}]

const SkillsContainer: FC = () => {
  return (
    <Skills />
  )
}

export default SkillsContainer