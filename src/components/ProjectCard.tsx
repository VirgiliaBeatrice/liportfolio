import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  type: string;
  date: string;
  role: string;
  features: string[];
  githubLink?: string;
  demoLink?: string;
  status: 'completed' | 'in-progress' | 'maintained' | 'on-hold' | 'cancelled' | 'archived' | 'other';
  image: string;
  collaborators?: string[];
  challenges?: string[];
  achievements?: string[];
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  type,
  date,
  role,
  features,
  githubLink,
  demoLink,
  status,
  image,
  collaborators,
  challenges,
  achievements,
  tags,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={300} height={200} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
          <span className="font-semibold">Technologies:</span> {technologies.join(', ')}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Type:</span> {type}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Date:</span> {date}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Role:</span> {role}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Key Features:</span>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        {githubLink && (
          <Link href={githubLink} className="text-blue-500 hover:underline block mb-2">
            GitHub Repository
          </Link>
        )}
        {demoLink && (
          <Link href={demoLink} className="text-blue-500 hover:underline block mb-2">
            Live Demo
          </Link>
        )}
        <div className="mb-4">
          <span className="font-semibold">Status:</span> {status}
        </div>
        {collaborators && collaborators.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Collaborators:</span> {collaborators.join(', ')}
          </div>
        )}
        {challenges && challenges.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Challenges:</span>
            <ul className="list-disc list-inside">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <span className="font-semibold">Achievements:</span>
            <ul className="list-disc list-inside">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-4">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;