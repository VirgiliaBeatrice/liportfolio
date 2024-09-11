'use client'
import React from 'react';
import { Card, CardBody, CardHeader, Divider, Link, Button, Input, Textarea } from "@nextui-org/react";
import { fetchPublications } from '../edit/EditorPage';
import { Publication } from '@/types';

const PublicationsPage = () => {
  const [publications, setPublications] = React.useState<Publication[]>([]);
  const [newPublication, setNewPublication] = React.useState<Partial<Publication>>({});

  React.useEffect(() => {
    fetchPublications().then(setPublications);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPublication(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPublication = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement add publication logic
    console.log('New publication:', newPublication);
  };

  const handleEditPublication = (id: string) => {
    // TODO: Implement edit publication logic
    console.log('Edit publication:', id);
  };

  const handleDeletePublication = (id: string) => {
    // TODO: Implement delete publication logic
    console.log('Delete publication:', id);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Publications</h1>
      
      <Card className="mb-6">
        <CardHeader className="font-bold text-xl">Add New Publication</CardHeader>
        <Divider />
        <CardBody>
          <form onSubmit={handleAddPublication} className="space-y-4">
            <Input
              label="Title"
              name="title"
              value={newPublication.title || ''}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Author"
              name="author"
              value={newPublication.author || ''}
              onChange={handleInputChange}
              required
            />
            <Textarea
              label="Abstract"
              name="abstract"
              value={newPublication.abstract || ''}
              onChange={handleInputChange}
            />
            <Input
              label="Year"
              name="year"
              type="number"
              value={newPublication.year?.toString() || ''}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" color="primary">Add Publication</Button>
          </form>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="font-bold text-xl">All Publications</CardHeader>
        <Divider />
        <CardBody>
          {publications.map((pub) => (
            <div key={pub.id} className="mb-4">
              <h3 className="text-lg font-semibold">{pub.title}</h3>
              <p className="text-sm text-gray-600">{pub.author}, {pub.year}</p>
              <div className="mt-2">
                <Button 
                  size="sm" 
                  color="primary" 
                  className="mr-2"
                  onClick={() => handleEditPublication(pub.id.toString())}
                >
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  color="danger"
                  onClick={() => handleDeletePublication(pub.id.toString())}
                >
                  Delete
                </Button>
              </div>
              <Divider className="my-4" />
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default PublicationsPage;
