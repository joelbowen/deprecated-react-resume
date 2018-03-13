import React from 'react'
import moment from 'moment'
import SkillGroup from './SkillGroup'
import './skills.scss'

const getSkill = (skills, type) =>
  skills
    .filter(s => s.type === type)
    .sort((a, b) => a.proficiency < b.proficiency)
/* Component */
function Skills({ skills }) {
  const frontEndSkills = getSkill(skills, 'front-end')
  const serverSideSkills = getSkill(skills, 'server-side')
  const databaseSkills = getSkill(skills, 'database')
  const devOpsSkills = getSkill(skills, 'DevOps')
  const otherSkills = getSkill(skills, 'Other')
  const devOpsOtherSkills = devOpsSkills.concat(otherSkills).map(s => s.name)
  const yearsExp = moment().diff('2004-08-01', 'years')
  const frontEndDesc = `${yearsExp}-Years HTML/CSS, ${yearsExp -
    3}-Years JavaScript`
  const serverSideDesc = `${yearsExp - 8}-Years Ubuntu / Linux`
  const databaseDesc = `${yearsExp -
    8}-Years PostgreSQL, MongoDB, REDIS, and ${yearsExp - 4}-Years MySQL`
  return (
    <div className="skills">
      <SkillGroup
        technologies={frontEndSkills}
        title="Front-End"
        description={frontEndDesc}
      />
      <SkillGroup
        technologies={serverSideSkills}
        title="Back-End"
        description={serverSideDesc}
      />
      <SkillGroup
        technologies={databaseSkills}
        title="Databases"
        description={databaseDesc}
      />
      <p className="other-skills">
        OTHER SKILLS: {devOpsOtherSkills.join(', ')}
      </p>
    </div>
  )
}

Skills.propTypes = {
  skills: React.PropTypes.array.isRequired,
}

export default Skills
