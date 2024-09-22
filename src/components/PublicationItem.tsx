import React, { useState } from 'react';
import { Publication } from '@/types';
import { Link, Button } from "@nextui-org/react";

interface PublicationItemProps {
  publication: Publication;
  number: number;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication, number }) => {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">
        {number}. {publication.note && publication.note.includes("first author") ? `★ ${publication.title}` : publication.title}
      </h3>
      <p className="italic mb-2">
        Published in <em>{publication.journal || publication.booktitle}</em>, {publication.year}
      </p>
      {publication.abstract && (
        <div className="mb-4">
          <Button
            size="sm"
            onClick={() => setShowAbstract(!showAbstract)}
          >
            {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
          </Button>
          {showAbstract && (
            <p className="mt-2 text-gray-500">{publication.abstract}</p>
          )}
        </div>
      )}
      <p className="mb-2"><strong>Recommended citation: </strong></p>
      <p className="mb-2">
        {`${publication.author}, "${publication.title}," ${publication.journal || publication.booktitle}, ${publication.volume ? `vol. ${publication.volume}, ` : ''}${publication.number ? `no. ${publication.number}, ` : ''}${publication.pages ? `pp. ${publication.pages}, ` : ''}${publication.year}.`}
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
