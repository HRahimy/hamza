import {Component, ViewEncapsulation} from '@angular/core';

export interface Skill {
  iconAsset: string;
  assetType: 'icon' | 'image',
  title: string;
  description: string;
}

@Component({
  selector: 'hamza-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      iconAsset: 'devicon-angularjs-plain colored',
      assetType: 'icon',
      title: 'Angular',
      description: 'Single-page web application development framework'
    },
    {
      iconAsset: 'devicon-nestjs-plain colored',
      assetType: 'icon',
      title: 'NestJS',
      description: 'A NodeJS-based backend framework'
    },
    {
      iconAsset: 'devicon-flutter-plain colored',
      assetType: 'icon',
      title: 'Flutter',
      description: 'A cross-platform mobile-app development framework'
    },
    {
      iconAsset: 'devicon-postgresql-plain colored',
      assetType: 'icon',
      title: 'PostgreSQL',
      description: 'SQL Database'
    },
    {
      iconAsset: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png',
      assetType: 'image',
      title: 'Cassandra',
      description: 'Highly scalable distributed No-SQL database'
    },
    {
      iconAsset: 'devicon-firebase-plain colored',
      assetType: 'icon',
      title: 'Firebase',
      description: 'Cloud infrastructure to get your apps up and running fast'
    },
    {
      iconAsset: 'devicon-googlecloud-plain colored',
      assetType: 'icon',
      title: 'Google Cloud Platform',
      description: 'For all your cloud hosting needs'
    },
    {
      iconAsset: 'devicon-amazonwebservices-original colored',
      assetType: 'icon',
      title: 'Amazon Web Services',
      description: 'For all your cloud hosting needs'
    },
    {
      iconAsset: 'devicon-docker-plain colored',
      assetType: 'icon',
      title: 'Docker',
      description: 'Containerizing your applications'
    },
    {
      iconAsset: 'devicon-kubernetes-plain colored',
      assetType: 'icon',
      title: 'Kubernetes',
      description: 'Application Hosting & Deployment Infrastructure'
    },
    {
      iconAsset: 'devicon-gitlab-plain colored',
      assetType: 'icon',
      title: 'GitLab',
      description: 'One-stop-shop for all your SCM, Project Management, CI/CD, and DevOps needs'
    },
    {
      iconAsset: 'devicon-github-original colored',
      assetType: 'icon',
      title: 'GitHub',
      description: 'SCM and CI/CD'
    },
    {
      iconAsset: 'devicon-dart-plain colored',
      assetType: 'icon',
      title: 'Dart',
      description: 'Programming Language'
    },
    {
      iconAsset: 'devicon-typescript-plain colored',
      assetType: 'icon',
      title: 'TypeScript',
      description: 'Programming Language'
    },
    {
      iconAsset: 'devicon-csharp-plain colored',
      assetType: 'icon',
      title: 'C#',
      description: 'Programming Language'
    },
    {
      iconAsset: 'devicon-c-plain colored',
      assetType: 'icon',
      title: 'C',
      description: 'Programming Language'
    },
    {
      iconAsset: 'devicon-cplusplus-plain colored',
      assetType: 'icon',
      title: 'C++',
      description: 'Programming Language'
    },
  ];
}
