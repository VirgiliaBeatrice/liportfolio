// src/components/PublicationList.tsx
'use client'

import React, { useMemo } from 'react';
import { Card, CardBody, CardHeader, Link, Divider } from "@nextui-org/react";
import { Publication } from '@/types';
import { usePublicationCategories } from './hooks/PublicationsCategories';
import PublicationItem from './PublicationItem';

interface PublicationListProps {
    publications: Publication[];
}

const PublicationList: React.FC<PublicationListProps> = ({ publications }) => {
    const categories = usePublicationCategories(publications);

    const renderPublications = useMemo(() => {
        return Object.entries(categories as Record<string, Publication[]>).map(([type, pubs]) => (
            <Card key={type} className="mb-8">
                <CardHeader>
                    <h2 className="text-2xl font-bold">{type}</h2>
                </CardHeader>
                <CardBody>
                    <Divider className="my-4" />
                    {pubs.map((pub) => (
                        <React.Fragment key={pub.id}>
                            <PublicationItem publication={pub} />
                            <Divider className="my-4" />
                        </React.Fragment>
                    ))}
                </CardBody>
            </Card>
        ));
    }, [categories]);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Publications</h1>
            <p className="mb-8">
                You can also find my articles on my <Link href="#" color="primary">Google Scholar profile</Link>.
            </p>
            {renderPublications}
        </div>
    );
};

export default PublicationList;
