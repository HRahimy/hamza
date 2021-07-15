import {SkillType} from "./skill.type";

export interface Skill {
  iconAsset: string;
  assetType: 'icon' | 'image',
  title: string;
  description?: string;
  skillType: SkillType;
  skillDetailMarkdownPath?: string;
}

export const skills: Skill[] = [
  {
    iconAsset: 'devicon-angularjs-plain colored',
    assetType: 'icon',
    title: 'Angular',
    description: 'Single-page web application development framework',
    skillType: 'frontend',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-nestjs-plain colored',
    assetType: 'icon',
    title: 'NestJS',
    description: 'A NodeJS-based backend framework',
    skillType: 'backend',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-flutter-plain colored',
    assetType: 'icon',
    title: 'Flutter',
    description: 'A cross-platform mobile-app development framework',
    skillType: 'frontend',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-dotnetcore-plain colored',
    assetType: 'icon',
    title: 'ASP.NET Core',
    description: 'For building cross-platform backend & frontend applications',
    skillType: 'backend',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-postgresql-plain colored',
    assetType: 'icon',
    title: 'PostgreSQL',
    description: 'SQL Database',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png',
    assetType: 'image',
    title: 'Cassandra',
    description: 'Highly scalable distributed No-SQL database',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-firebase-plain colored',
    assetType: 'icon',
    title: 'Firebase',
    description: 'Cloud infrastructure to get your apps up and running fast',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-googlecloud-plain colored',
    assetType: 'icon',
    title: 'Google Cloud Platform',
    description: 'For all your cloud hosting needs',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-amazonwebservices-original colored',
    assetType: 'icon',
    title: 'Amazon Web Services',
    description: 'For all your cloud hosting needs',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-docker-plain colored',
    assetType: 'icon',
    title: 'Docker',
    description: 'Containerizing your applications',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-kubernetes-plain colored',
    assetType: 'icon',
    title: 'Kubernetes',
    description: 'Application Hosting & Deployment Infrastructure',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-gitlab-plain colored',
    assetType: 'icon',
    title: 'GitLab',
    description: 'All-in-one SCM, Project Management, and CI/CD',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-github-original colored',
    assetType: 'icon',
    title: 'GitHub',
    description: 'SCM and CI/CD',
    skillType: 'systems',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-dart-plain colored',
    assetType: 'icon',
    title: 'Dart',
    description: 'Programming Language',
    skillType: 'language',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-typescript-plain colored',
    assetType: 'icon',
    title: 'TypeScript',
    description: 'Programming Language',
    skillType: 'language',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  },
  {
    iconAsset: 'devicon-csharp-plain colored',
    assetType: 'icon',
    title: 'C#',
    description: 'Programming Language',
    skillType: 'language',
    skillDetailMarkdownPath: "assets/markdown/angular-skill.md",
  }
];
