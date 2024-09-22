import React from 'react';
import { BibtexParser } from 'bibtex-js-parser';
import PublicationList from '@/components/PublicationList';
import ProfileSidebar from '@/components/ProfileSidebar';
import { Publication } from '@/types';
import fs from 'fs/promises';
import path from 'path';

async function getPublications(): Promise<Publication[]> {
  const filePath = path.join(process.cwd(), 'public', 'contents', 'publications.bib');
  const bibContent = await fs.readFile(filePath, 'utf-8');
  const bibEntries = BibtexParser.parseToJSON(bibContent);

  return bibEntries.map((entry) => ({
    id: entry.id,
    title: entry.title || '',
    author: entry.author || '',
    year: entry.year || '',
    journal: entry.journal || '',
    booktitle: entry.booktitle || '',
    volume: entry.volume || '',
    number: entry.number || '',
    abstract: entry.abstract || '',
    type: entry.type || 'article',
  }));
}

const PublicationsPage: React.FC = async () => {
  const publications = await getPublications();

  return (
    <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <ProfileSidebar />
      </div>
      <div className="flex-2 p-4">
        <PublicationList publications={publications} />
      </div>
    </div>
  );
};

export default PublicationsPage;
