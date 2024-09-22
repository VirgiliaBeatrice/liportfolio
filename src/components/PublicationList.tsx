// src/components/PublicationList.tsx
'use client'

import React, { useMemo } from 'react';
import { Card, CardBody, CardHeader, Link, Divider } from "@nextui-org/react";
import { Publication } from '@/types';
import { usePublicationCategories } from '../app/hooks/PublicationsCategories';
import PublicationItem from './PublicationItem';
import ProfileSidebar from './ProfileSidebar';

interface PublicationListProps {
  publications: Publication[];
}

const formatPublicationType = (type: string): string => {
  switch (type) {
    case 'article':
      return 'Journal Articles';
    case 'inproceedings':
      return 'Conference Papers';
    case 'book':
      return 'Books';
    default:
      return type;
  }
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
  const categories = usePublicationCategories(publications);

  const renderPublications = useMemo(() => {
    return Object.entries(categories as Record<string, Publication[]>).map(([type, pubs]) => {
      const sortedPubs = pubs.sort((a, b) => {
        const yearA = parseInt(a.year as string);
        const yearB = parseInt(b.year as string);
        return yearB - yearA; // Sort in descending order (most recent first)
      });

      return (
        <div key={type}>
          <CardHeader className="my-0">
            <h2 className="text-2xl font-bold">{formatPublicationType(type)}</h2>
          </CardHeader>
          <CardBody>
            <Divider className="my-4" />
            {sortedPubs.map((pub) => (
              <React.Fragment key={pub.id}>
                <PublicationItem publication={pub} number={sortedPubs.indexOf(pub) + 1} />
                <Divider className="my-4" />
              </React.Fragment>
            ))}
          </CardBody>
        </div>
        );
    });
  }, [categories]);

  return renderPublications;
};

export default PublicationList;
