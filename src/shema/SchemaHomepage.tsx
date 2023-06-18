import React, { FC } from 'react'
import { FAQPage } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

 const SchemaHomepage: FC = () => {
  return (
    <JsonLd<FAQPage>
      item={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        "mainEntity": [{
          "@type": "Question",
          "name": "Who Am I?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I'm a bilingual frontend developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers. I have a passion for clean, performant and a11y code. A healthy culture and a team that works well together is very important to me."
          }
        }, {
          "@type": "Question",
          "name": "What are my Proficiencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": '<p><b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>Styled Component</b>, <b>Vanilla Javascript</b>, <b>Typescript</b>, <b>React</b>, <b>Next.js</b>, <b>Gatsby</b>, <b>React Redux</b>, <b>Gsap (Greenstock)</b>, <b>GraphQl</b>, <b>Liquid</b>, Monday.com, Asana, Trello, Jira, Confluence, Atlassian, Authentication, <b>Contentful</b>, <b>Netlify</b>, <b>Vercel</b>, <b>Authentication - Supabase</b>, <b>Database - Supabase</b>, <b>Github</b>, <b>GitLab</b></p>'
          }
        }, {
          "@type": "Question",
          "name": "How to contact me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "<p><b>Email:</b> <a href=\'mailto:hey@philiprurka.com'>hey@philiprurka.com</a></p><p><b>Phone Number:</b> <a href='tel:+14384588649'>+1 (438) 458-8649</a></p><p><b>LinkedIn:</b> <a href='https://linkedin.com/in/philiprurka'>linkedin.com/in/philiprurka</a></p>"
          }
        }]
      }}
    />
  );
}

export default SchemaHomepage





// address: 'Montreal Quebec, Canada',
// knowsAbout: [
//   'HTML',
//   'CSS',
//   'SCSS',
//   'Styled Component',
//   'Vanilla Javascript',
//   'Typescript',
//   'React',
//   'Next.js',
//   'Gatsby',
//   'React Redux',
//   'Gsap (Greenstock)',
//   'GraphQl',
//   'Liquid',
//   'Monday.com',
//   'Asana',
//   'Trello',
//   'Jira',
//   'Confluence',
//   'Atlassian',
//   'Authentication',
//   'Contentful',
//   'Netlify',
//   'Vercel',
//   'Supabase',
//   'Github',
//   'GitLab'
// ],
// birthDate: '1988-02-28',
// birthPlace: {
//   "@type": "Place",
//   address: 'Fredericton New-Brunswick, Canada'
// },
// email: 'hey@philiprurka.com',
// familyName: 'Rurka',
// givenName: 'Philip',
// jobTitle: 'Frontend Developer',
// knowsLanguage: [{
//   "@type": "Language",
//   name: "English",
//   alternateName: "en"
// }, {
//   "@type": "Language",
//   name: "French",
//   alternateName: "fr"
// }],
// nationality: {
//   '@type': 'Country',
//   name: 'Canada'
// },
// telephone: '+14384588649',
// description: 'Philip Rurka\'s Resume: I\'m a bilingual frontend developer who is working on his full stack citizenship. I love attending tech meetups and working alongside other highly motivated developers.',
// image: 'https://philiprurka.com/assets/working-on-laptop.jpg',
// url: 'https://philiprurka.com'