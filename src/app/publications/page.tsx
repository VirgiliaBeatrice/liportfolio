import React from 'react';
import { BibtexParser } from 'bibtex-js-parser';
import PublicationList from '@/components/PublicationList';
import ProfileSidebar from '@/components/ProfileSidebar';
import { Card } from "@nextui-org/react";
import { Publication } from '@/types';
import fs from 'fs/promises';
import path from 'path';
import ClientBreadcrumbs from '@/components/ClientBreadcrumbs';

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
    note: entry.note || '',
  }));
}

const PublicationsPage: React.FC = async () => {
  const publications = await getPublications();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <aside className="w-full sm:w-1/4">
        <ProfileSidebar />
      </aside>
      <main className="w-full sm:w-3/4">
        <ClientBreadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Publications" }
          ]}
        />
        <Card className='p-8' key={publications.length}>
          <PublicationList publications={publications} />
        </Card>
      </main>
    </div>
  );
};

export default PublicationsPage;
