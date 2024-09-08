import React from 'react';
import { Publication } from '@/types';
import { Link, Button } from "@nextui-org/react";

interface PublicationItemProps {
  publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
      <p className="italic mb-2">
        Published in <em>{publication.journal || publication.booktitle}</em>, {publication.year}
      </p>
      <p className="mb-2">{publication.abstract}</p>
      <p className="mb-2">
        <strong>Recommended citation: </strong>
        {`${publication.author}. (${publication.year}). "${publication.title}." ${publication.journal || publication.booktitle}. ${publication.volume}(${publication.number}).`}
      </p>
      <div>
        <Button as={Link} href="#" color="primary" size="sm" className="mr-2">
          Download Paper
        </Button>
        {publication.type === 'conference' && (
          <Button as={Link} href="#" color="secondary" size="sm">
            Download Slides
          </Button>
        )}
      </div>
    </div>
  );
};

export default PublicationItem;
