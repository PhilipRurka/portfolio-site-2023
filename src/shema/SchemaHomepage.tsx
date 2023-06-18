import React, { FC } from 'react'
import { Person } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

 const SchemaHomepage: FC = () => {
  return (
    <JsonLd<Person>
      item={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        address: 'Montreal Quebec, Canada',
        knowsAbout: [
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
          'Gsap (Greenstock)',
          'GraphQl',
          'Liquid',
          'Monday.com',
          'Asana',
          'Trello',
          'Jira',
          'Confluence',
          'Atlassian',
          'Authentication',
          'Contentful',
          'Netlify',
          'Vercel',
          'Supabase',
          'Github',
          'GitLab'
        ],
        birthDate: '1988-02-28',
        birthPlace: {
          "@type": "Place",
          address: 'Fredericton New-Brunswick, Canada'
        },
        email: 'hey@philiprurka.com',
        familyName: 'Rurka',
        givenName: 'Philip',
        jobTitle: 'Frontend Developer',
        knowsLanguage: [{
          "@type": "Language",
          name: "English",
          alternateName: "en"
        }, {
          "@type": "Language",
          name: "French",
          alternateName: "fr"
        }],
        nationality: {
          '@type': 'Country',
          name: 'Canada'
        },
        telephone: '+14384588649',
        description: 'Philip Rurka\'s Resume',
        image: 'https://philiprurka.com/assets/working-on-laptop.jpg',
        url: 'https://philiprurka.com'
      }}
    />
  );
}

export default SchemaHomepage