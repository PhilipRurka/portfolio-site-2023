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
            "text": `
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Styled Component</li>
                <li>Vanilla Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>React Redux</li>
                <li>Gsap (Greenstock)</li>
                <li>GraphQl</li>
                <li>Liquid</li>
                <li>Monday.com</li>
                <li>Asana</li>
                <li>Trello</li>
                <li>Jira</li>
                <li>Confluence</li>
                <li>Atlassian</li>
                <li>Authentication</li>
                <li>Contentful</li>
                <li>Netlify</li>
                <li>Vercel</li>
                <li>Authentication - Supabase</li>
                <li>Database - Supabase</li>
                <li>Github</li>
                <li>GitLab</li>
              </ul>
            `
          }
        }, {
          "@type": "Question",
          "name": "How to contact me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `
              <ul>
                <li>
                  <p>
                    <b>Email:</b> <a href='mailto:hey@philiprurka.com'>hey@philiprurka.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>Phone Number:</b> <a href='tel:+14384588649'>+1 (438) 458-8649</a>
                  </p>
                </li>
                <li>
                  <p>
                    <b>LinkedIn:</b> <a href='https://linkedin.com/in/philiprurka'>linkedin.com/in/philiprurka</a>
                  </p>
                </li>
              </ul>
            `
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