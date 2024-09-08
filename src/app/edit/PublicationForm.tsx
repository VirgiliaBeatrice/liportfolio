import React, { useState } from 'react';
import { Publication } from '@/types';

interface PublicationFormProps {
  publication?: Publication;
  onSave: (publication: Publication) => void;
}

export default function PublicationForm({ publication, onSave }: PublicationFormProps) {
  const [form, setForm] = useState<Partial<Publication>>(publication || {});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form as Publication);
    setForm({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title || ''}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="authors"
        value={form.authors || ''}
        onChange={handleChange}
        placeholder="Authors"
        required
      />
      <input
        name="year"
        type="number"
        value={form.year || ''}
        onChange={handleChange}
        placeholder="Year"
        required
      />
      <select
        name="type"
        value={form.type || ''}
        onChange={handleChange}
        required
      >
        <option value="">Select Type</option>
        <option value="journal">Journal</option>
        <option value="conference">Conference</option>
        <option value="book">Book</option>
      </select>
      <textarea
        name="abstract"
        value={form.abstract || ''}
        onChange={handleChange}
        placeholder="Abstract"
      />
      <button type="submit">Save</button>
    </form>
  );
}