// 'use client'
import fs from 'fs';
import path from 'path';
import React from 'react';
import { Card, CardBody } from "@nextui-org/react";
import ProfileSidebar from '@/components/ProfileSidebar';
import ClientBreadcrumbs from '@/components/ClientBreadcrumbs';
import ProjectCard from '@/components/ProjectCard';
import matter from 'gray-matter';
import { MdxMetaData } from '@/types/mdx';
import MD1 from '@/content/1.mdx';
import MD2 from '@/content/2.mdx';
import MD3 from '@/content/3.mdx';


const contents = [{title: 1, content: MD1}, {title: 2, content: MD2}, {title: 3, content: MD3}];

const contentDir = path.join(process.cwd(), 'src/data');
const contentFiles = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));

const data = contentFiles.map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return data;
});


const ProjectsPage: React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4'>
      <aside className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
        <ProfileSidebar />
      </aside>
      <main className='w-full sm:w-1/2 md:w-1/2 lg:w-3/4'>
        <ClientBreadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }]} />
        {
          contents.map((content: any) => (
            <Card key={content.title} className='p-8 mb-4' aria-label={content.title}>
              <CardBody className='p-2' >
                <article className='prose prose-base max-w-none'>
                  {content.content({})}
                </article>
              </CardBody>
            </Card>
          ))
        }
        {/* {
          data.map((d) => (
            <div key={d.title}>
              <Card className='p-8 mb-4'>
                <CardBody>
                  <article className='prose prose-base sm:prose lg:prose-base xl:prose-base'>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <p><strong>Tags:</strong> {d.tags.join(', ')}</p>
                  <p><strong>Technologies:</strong> {d.technologies.join(', ')}</p>
                  <p><strong>Type:</strong> {d.type}</p>
                  <p><strong>Period:</strong> {d.period}</p>
                  <p><strong>Role:</strong> {d.role.join(', ')}</p>
                  <p><strong>Status:</strong> {d.status}</p>
                  </article>
                </CardBody>
              </Card>
            </div>
          ))
        } */}
      </main>
    </div>
  );
};

export default ProjectsPage;
