// src/types/index.ts
export interface Publication {
  id: string;
  type: string;
  title: string;
  author?: string;
  editor?: string;
  booktitle?: string;
  publisher?: string;
  school?: string;
  address?: string;
  year?: string | number;
  month?: string;
  pages?: string;
  journal?: string;
  volume?: string;
  number?: string | number;
  series?: string;
  doi?: string;
  issn?: string;
  url?: string;
  urldate?: string;
  language?: string;
  copyright?: string;
  note?: string;
  keyword?: string;
  abstract?: string;
}

export interface MdxMetaData {
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  type: string;
  period: string;
  role: string[];
  status: 'completed' | 'in-progress' | 'planned';
}