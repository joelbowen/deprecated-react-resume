import React from 'react';
import SkillGroup from './SkillGroup';
import './skills.scss';

/* Component */
function Skills({ skills }) {
  const frontEndSkills = skills.filter((s) => s.type === 'front-end');
  const serverSideSkills = skills.filter((s) => s.type === 'server-side');
  const databaseSkills = skills.filter((s) => s.type === 'database');
  const otherSkills = skills
    .filter((s) => s.type === 'DevOps' || s.type === 'Other')
    .map((s) => s.name);
  return (
    <div className="skills">
      <SkillGroup
        technologies={frontEndSkills}
        title="Front-End"
        description="12-Years HTML/CSS, 9-Years JavaScript, 4-Years AngularJS"
      />
      <SkillGroup
        technologies={serverSideSkills}
        title="Server-Side"
        description="4-Years Server-side Javascript on Ubuntu / Linux with Node.js & Express"
      />
      <SkillGroup
        technologies={databaseSkills}
        title="Databases"
        description="4-Years PostgreSQL, MongoDB, REDIS, and 8-Years MySQL"
      />
      <p className="other-skills">
        OTHER SKILLS: { otherSkills.join(', ') }
      </p>
    </div>
  );
}

Skills.propTypes = {
  skills: React.PropTypes.array.isRequired,
};

export default Skills;
