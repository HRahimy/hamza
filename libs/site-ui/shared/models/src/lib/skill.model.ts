import {SkillType} from "./skill.type";
import {SkillDetailModel} from "./skill-detail.model";

export interface Skill {
  iconAsset: string;
  assetType: 'icon' | 'image',
  title: string;
  description?: string;
  skillType: SkillType;
  skillDetail: SkillDetailModel;
}

export const skills: Skill[] = [
  {
    iconAsset: 'devicon-angularjs-plain colored',
    assetType: 'icon',
    title: 'Angular',
    description: 'Single-page web application development framework',
    skillType: 'frontend',
    skillDetail: {
      title: "Angular",
      description: "Single-page web application development framework. This website is actually developed using Angular. See here to learn more",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-nestjs-plain colored',
    assetType: 'icon',
    title: 'NestJS',
    description: 'A NodeJS-based backend framework',
    skillType: 'backend',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-flutter-plain colored',
    assetType: 'icon',
    title: 'Flutter',
    description: 'A cross-platform mobile-app development framework',
    skillType: 'frontend',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-dotnetcore-plain colored',
    assetType: 'icon',
    title: 'ASP.NET Core',
    description: 'For building cross-platform backend & frontend applications',
    skillType: 'backend',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-postgresql-plain colored',
    assetType: 'icon',
    title: 'PostgreSQL',
    description: 'SQL Database',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png',
    assetType: 'image',
    title: 'Cassandra',
    description: 'Highly scalable distributed No-SQL database',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-firebase-plain colored',
    assetType: 'icon',
    title: 'Firebase',
    description: 'Cloud infrastructure to get your apps up and running fast',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-googlecloud-plain colored',
    assetType: 'icon',
    title: 'Google Cloud Platform',
    description: 'For all your cloud hosting needs',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-amazonwebservices-original colored',
    assetType: 'icon',
    title: 'Amazon Web Services',
    description: 'For all your cloud hosting needs',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-docker-plain colored',
    assetType: 'icon',
    title: 'Docker',
    description: 'Containerizing your applications',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-kubernetes-plain colored',
    assetType: 'icon',
    title: 'Kubernetes',
    description: 'Application Hosting & Deployment Infrastructure',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-gitlab-plain colored',
    assetType: 'icon',
    title: 'GitLab',
    description: 'All-in-one SCM, Project Management, and CI/CD',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-github-original colored',
    assetType: 'icon',
    title: 'GitHub',
    description: 'SCM and CI/CD',
    skillType: 'systems',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-dart-plain colored',
    assetType: 'icon',
    title: 'Dart',
    description: 'Programming Language',
    skillType: 'language',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-typescript-plain colored',
    assetType: 'icon',
    title: 'TypeScript',
    description: 'Programming Language',
    skillType: 'language',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  },
  {
    iconAsset: 'devicon-csharp-plain colored',
    assetType: 'icon',
    title: 'C#',
    description: 'Programming Language',
    skillType: 'language',
    skillDetail: {
      description: "test",
      title: "test",
      repos: [],
      type: "frontend",
    },
  }
];
