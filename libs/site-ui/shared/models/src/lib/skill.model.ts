export interface Skill {
  iconAsset: string;
  assetType: 'icon' | 'image',
  title: string;
  description?: string;
  skillType: 'backend' | 'frontend' | 'systems' | 'language';
}
