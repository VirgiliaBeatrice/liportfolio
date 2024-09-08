// src/types/index.ts
export interface Publication {
    id: number;
    title: string;
    author: string;
    year: number;
    journal?: string;
    volume?: string;
    number?: string;
    pages?: string;
    month?: string;
    doi?: string;
    abstract?: string;
    keywords?: string[];
    url?: string;
    publisher?: string;
    address?: string;
    booktitle?: string;
    editor?: string;
    series?: string;
    edition?: string;
    organization?: string;
    note?: string;
    type?: string; // 'article', 'book', 'conference', etc.
  }
  