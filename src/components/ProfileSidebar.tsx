import React from 'react';
import { Card, CardBody, Link, Avatar } from "@nextui-org/react";
import { Envelope, Github } from 'react-bootstrap-icons';

const ProfileSidebar: React.FC = () => {
  return (
    <Card className='p-4 mb-4 mx-4'>
      <CardBody>
        <Avatar
          isBordered={true}
          src="/images/profile.png"
          alt="Haoyan Li"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4 text-center">Haoyan.Li</h2>
        <p className="mb-4 text-center">
          Doctoral Student at Hasegawa Lab,<br />
          Tokyo Institute of Technology
        </p>
        <p className="mb-4 mx-4 text-balance text-left text-gray-500 text-sm">
          Haoyan Li is an engineer and researcher with expertise in embedded systems, robotics, and HCI, having worked on UV photometer development and UI/UX design for teleoperation systems. He contributed to research and development projects and continuously explores cutting-edge technologies.
        </p>
        <h3 className="text-lg font-semibold mb-2">Follow</h3>
        <ul className="space-y-2 mx-4">
          <li>
            <Link href="mailto:haoyan.li@gmail.com" className="flex items-center">
                <Envelope className='mr-2' />
              Email
            </Link>
          </li>
          <li>
            <Link href="https://github.com/virgiliabeatrice" className="flex items-center">
                <Github className='mr-2' />
              Github
            </Link>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default ProfileSidebar;