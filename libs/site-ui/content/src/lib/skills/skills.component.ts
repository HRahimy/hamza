import {Component, ViewEncapsulation} from '@angular/core';
import {Skill} from "@hamza/site-ui/shared/models";

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
      description: 'Single-page web application development framework',
      skillType: 'frontend'
    },
    {
      iconAsset: 'devicon-nestjs-plain colored',
      assetType: 'icon',
      title: 'NestJS',
      description: 'A NodeJS-based backend framework',
      skillType: 'backend'
    },
    {
      iconAsset: 'devicon-flutter-plain colored',
      assetType: 'icon',
      title: 'Flutter',
      description: 'A cross-platform mobile-app development framework',
      skillType: 'frontend'
    },
    {
      iconAsset: 'devicon-dotnetcore-plain colored',
      assetType: 'icon',
      title: 'ASP.NET Core',
      description: 'A framework for cross-platform backend & frontend applications',
      skillType: 'backend'
    },
    {
      iconAsset: 'devicon-postgresql-plain colored',
      assetType: 'icon',
      title: 'PostgreSQL',
      description: 'SQL Database',
      skillType: 'systems',
    },
    {
      iconAsset: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png',
      assetType: 'image',
      title: 'Cassandra',
      description: 'Highly scalable distributed No-SQL database',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-firebase-plain colored',
      assetType: 'icon',
      title: 'Firebase',
      description: 'Cloud infrastructure to get your apps up and running fast',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-googlecloud-plain colored',
      assetType: 'icon',
      title: 'Google Cloud Platform',
      description: 'For all your cloud hosting needs',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-amazonwebservices-original colored',
      assetType: 'icon',
      title: 'Amazon Web Services',
      description: 'For all your cloud hosting needs',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-docker-plain colored',
      assetType: 'icon',
      title: 'Docker',
      description: 'Containerizing your applications',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-kubernetes-plain colored',
      assetType: 'icon',
      title: 'Kubernetes',
      description: 'Application Hosting & Deployment Infrastructure',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-gitlab-plain colored',
      assetType: 'icon',
      title: 'GitLab',
      description: 'All-in-one SCM, Project Management, CI/CD, and DevOps needs',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-github-original colored',
      assetType: 'icon',
      title: 'GitHub',
      description: 'SCM and CI/CD',
      skillType: 'systems'
    },
    {
      iconAsset: 'devicon-dart-plain colored',
      assetType: 'icon',
      title: 'Dart',
      description: 'Programming Language',
      skillType: 'language'
    },
    {
      iconAsset: 'devicon-typescript-plain colored',
      assetType: 'icon',
      title: 'TypeScript',
      description: 'Programming Language',
      skillType: 'language'
    },
    {
      iconAsset: 'devicon-csharp-plain colored',
      assetType: 'icon',
      title: 'C#',
      description: 'Programming Language',
      skillType: 'language'
    }
  ];

  systemSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'systems');
  }

  frontendSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'frontend');
  }

  backendSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'backend');
  }
}
