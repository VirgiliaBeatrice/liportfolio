'use client'

import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import matter from 'gray-matter';
import ProfileSidebar from '@/components/ProfileSidebar';

import SampleContent from '../../content/sampleContent.mdx';

const ProjectsPage: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full">
        <Card className='p-8'>
          <CardBody>
            <article className='prose prose-xl'>
              <SampleContent />
            </article>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsPage;
