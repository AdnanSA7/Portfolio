export interface Skill {
  name: string
  level: number
  category: 'core' | 'frontend' | 'mobile' | 'database' | 'tools'
}

export interface SkillGroup {
  label: string
  description: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Core',
    description: 'The languages and frameworks I build on every day',
    skills: [
      { name: 'Java', level: 85, category: 'core' },
      { name: 'Spring Boot', level: 80, category: 'core' },
      { name: 'JavaScript', level: 82, category: 'core' },
    ],
  },
  {
    label: 'Frontend',
    description: 'Building responsive, accessible interfaces',
    skills: [
      { name: 'Angular', level: 78, category: 'frontend' },
      { name: 'React', level: 60, category: 'frontend' },
      { name: 'Next.js', level: 55, category: 'frontend' },
      { name: 'TypeScript', level: 50, category: 'frontend' },
    ],
  },
  {
    label: 'Mobile',
    description: 'Cross-platform applications',
    skills: [
      { name: 'Flutter', level: 75, category: 'mobile' },
      { name: 'Dart', level: 72, category: 'mobile' },
    ],
  },
  {
    label: 'Data & Storage',
    description: 'Designing and querying databases',
    skills: [
      { name: 'PostgreSQL', level: 65, category: 'database' },
      { name: 'MySQL', level: 68, category: 'database' },
      { name: 'MongoDB', level: 60, category: 'database' },
    ],
  },
  {
    label: 'Backend & Tools',
    description: 'APIs, infrastructure, and workflows',
    skills: [
      { name: 'Node.js', level: 45, category: 'tools' },
      { name: 'C#', level: 65, category: 'tools' },
      { name: 'Git', level: 75, category: 'tools' },
    ],
  },
]

export const skillsData: Skill[] = skillGroups.flatMap((group) => group.skills)
