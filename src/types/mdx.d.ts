export interface MdxMetaData {
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  type: string;
  date: string;
  role: string;
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
}