const Resume = require('../../client/assets/resume.json');

const linkedData = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: Resume.basics.name,
  jobTitle: Resume.basics.title,
  telephone: Resume.basics.phone,
  email: Resume.basics.email,
  image: Resume.basics.photo,
};

linkedData.worksFor = Resume.work.map((e) => ({ name: e.company }));
linkedData.alumniOf = Resume.education.map((e) => ({ name: e.institution }));

module.exports = linkedData;
