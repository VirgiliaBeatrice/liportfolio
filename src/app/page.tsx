'use client'

import React from 'react';
import { Card, CardBody, Link } from "@nextui-org/react";
import PublicationList from '../components/PublicationList';
import { Publication } from '@/types';
import ProfileSidebar from '@/components/ProfileSidebar';

const Page = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-4">
			<main>
				<ProfileSidebar />
			</main>
		</div>
	);
};

export default Page;
