'use client'

import { useState, useEffect } from 'react';
import { Publication } from '@/types';
import PublicationForm from './PublicationForm';
import PublicationList from '../PublicationList';
import publicationsData from '../../data/publications.json';


export const fetchPublications = async () => {
  const response = await fetch('/api/publications');
  const data = await response.json();
  return data;
};

export const savePublication = async (publication: Publication) => {
  const response = await fetch('/api/publications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(publication),
  });
  const data = await response.json();
  return data;
};

export const deletePublication = async (id: string) => {
  await fetch(`/api/publications/${id}`, { method: 'DELETE' });
};




export default function PublicationEditor() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    // Fetch publications from API
    setPublications(publicationsData);
    // fetchPublications().then(setPublications);
  }, []);

  const handleSave = async (publication: Publication) => {
    // Save publication to API
    const updatedPublication = await savePublication(publication);
    setPublications(prev => 
      prev.map(p => p.id === updatedPublication.id ? updatedPublication : p)
    );
  };

  const handleDelete = async (id: string) => {
    // Delete publication from API
    await deletePublication(id);
    setPublications(prev => prev.filter(p => p.id !== Number(id)));
  };

  return (
    <div>
      <h1>Manage Publications</h1>
      <PublicationForm onSave={handleSave} />
      <PublicationList 
        publications={publications}
        onEdit={handleSave}
        onDelete={handleDelete}
      />
    </div>
  );
}