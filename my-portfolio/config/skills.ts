// config/skills.ts

export interface Skill {
    name: string
    level: number
    color: string
    icon: string
  }
  
  export const skillsData: Skill[] = [
    { name: "Java", level: 85, color: "#007396", icon: "FaJava" },
    { name: "Spring Boot", level: 80, color: "#6DB33F", icon: "SiSpringboot" },
    { name: "Angular", level: 78, color: "#DD0031", icon: "SiAngular" },
    { name: "Flutter", level: 75, color: "#02569B", icon: "SiFlutter" },
    { name: "Dart", level: 72, color: "#0175C2", icon: "SiDart" },
    { name: "JavaScript", level: 82, color: "#F7DF1E", icon: "SiJavascript" },
    { name: "Next.js", level: 55, color: "#000000", icon: "SiNextdotjs" },
    { name: "React", level: 60, color: "#61DAFB", icon: "SiReact" },
    { name: "TypeScript", level: 50, color: "#3178C6", icon: "SiTypescript" },
    { name: "Node.js", level: 45, color: "#339933", icon: "SiNodedotjs" },
    { name: "PostgreSQL", level: 65, color: "#4169E1", icon: "SiPostgresql" },
    { name: "MongoDB", level: 60, color: "#47A248", icon: "SiMongodb" },
    { name: "Git", level: 75, color: "#F05032", icon: "SiGit" },
    { name: "C#", level: 65, color: "#239120", icon: "SiSharp" }
  ]