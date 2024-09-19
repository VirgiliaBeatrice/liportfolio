'use client'

import React from 'react';
import { Card, CardBody, Divider } from "@nextui-org/react";
import ProfileSidebar from '../../components/ProfileSidebar';
import StarRating from '../../components/StarRating';

const AboutPage = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <aside className="w-full sm:w-1/4">
        <ProfileSidebar />
      </aside>
      <main className="w-full sm:w-3/4">
        <Card className='p-8'>
          <CardBody>
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <Divider className="my-4" />
              <div className="mb-4">
                <h3 className="text-xl font-medium">Research Assistant / Teaching Assistant</h3>
                <p className="text-gray-600">Hasegawa Lab, Tokyo Institute of Technology</p>
                <p className="text-gray-500">April 2016 - Present</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Developed UI/UX for teleoperation systems</li>
                  <li>Contributed to research projects in robotics and HCI</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium">Embedded System Engineer</h3>
                <p className="text-gray-600">Beijing Puxi General Instrument Co., Ltd.</p>
                <p className="text-gray-500">September 2012 - September 2015</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Contributed to UV photometer development project</li>
                  <li>Worked on embedded systems development</li>
                  <li>Worked on production jigs and tools</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education Experience</h2>
              <Divider className="my-4" />
              <div className="mb-4">
                <h3 className="text-xl font-medium">Completed Ph.D program without a Ph.D. degree in Engineering</h3>
                <p className="text-gray-600">Tokyo Institute of Technology</p>
                <p className="text-gray-500">April 2018 - March 2024</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium">Master's in Engineering</h3>
                <p className="text-gray-600">Tokyo Institute of Technology</p>
                <p className="text-gray-500">September 2016 - March 2018</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium">Bachelor's in Engineering</h3>
                <p className="text-gray-600">Taiyuan University of Technology</p>
                <p className="text-gray-500">September 2008 - June 2012</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skill Lists</h2>
              <Divider className="my-4" />
              <h3 className="text-xl font-medium mb-2">Programming Languages</h3>
              <ul className="ml-4">
                <li className="flex items-center justify-between my-2">
                  <span>C#</span>
                  <StarRating rating={5} />
                </li>
                <li className="flex items-center justify-between my-2">
                  <span>Python</span>
                  <StarRating rating={4} />
                </li>
                <li className="flex items-center justify-between my-2">
                  <span>C/C++</span>
                  <StarRating rating={4} />
                </li>
                <li className="flex items-center justify-between my-2">
                  <span>JavaScript/TypeScript</span>
                  <StarRating rating={4} />
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4">Web Development</h3>
              <ul className="ml-4">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
              <h3 className="text-xl font-medium mt-4">Embedded Systems</h3>
              <ul className="ml-4">
                <li>Arduino</li>
                <li>Raspberry Pi</li>
              </ul>
              <h3 className="text-xl font-medium mt-4">Robotics</h3>
              <ul className="ml-4">
                <li>ROS (Robot Operating System)</li>
              </ul>
              <h3 className="text-xl font-medium mt-4">Version Control</h3>
              <ul className="ml-4">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
              <h3 className="text-xl font-medium mt-4">Database</h3>
              <ul className="ml-4">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </section>
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default AboutPage;