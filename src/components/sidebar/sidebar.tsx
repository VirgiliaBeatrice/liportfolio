import React from 'react';
import { Card, CardBody, Link } from "@nextui-org/react";

interface SideBarProps {
  name: string;
  biography: string;
  links: { label: string; url: string }[];
}

const SideBar: React.FC<SideBarProps> = ({ name, biography, links }) => {
  return (
    <aside className="w-full sm:w-1/4">
      <Card>
        <CardBody>
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          <p className="mb-4">{biography}</p>
          <h3 className="text-lg font-semibold mb-2">Follow</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </aside>
  );
};

export default SideBar;
