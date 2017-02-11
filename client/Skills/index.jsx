import React from 'react';
import SkillGroup from './SkillGroup';
import './skills.scss';

const getSkill = (skills, type) => skills.filter((s) => s.type === type)
                                         .sort((a, b) => a.proficiency < b.proficiency);
/* Component */
function Skills({ skills }) {
  const frontEndSkills = getSkill(skills, 'front-end');
  const serverSideSkills = getSkill(skills, 'server-side');
  const databaseSkills = getSkill(skills, 'database');
  const devOpsSkills = getSkill(skills, 'DevOps');
  const otherSkills = getSkill(skills, 'Other');
  const devOpsOtherSkills = devOpsSkills.concat(otherSkills).map((s) => s.name);
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
        OTHER SKILLS: { devOpsOtherSkills.join(', ') }
      </p>
    </div>
  );
}

Skills.propTypes = {
  skills: React.PropTypes.array.isRequired,
};

export default Skills;
