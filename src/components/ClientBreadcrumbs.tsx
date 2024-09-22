'use client'

import React from 'react';
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

interface ClientBreadcrumbsProps {
  items: { href?: string; label: string }[];
}

const ClientBreadcrumbs: React.FC<ClientBreadcrumbsProps> = ({ items }) => {
  return (
    <div className="container mx-auto">
      <Breadcrumbs aria-label="Breadcrumb" className="mb-4" size='lg' radius='full' variant='solid'>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href}>
            {item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default ClientBreadcrumbs;