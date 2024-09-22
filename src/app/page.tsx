'use client'

import React from 'react';
import { Card, CardBody, Link } from "@nextui-org/react";
import PublicationList from '../components/PublicationList';
import { fetchPublications } from './edit/EditorPage';
import { Publication } from '@/types';
import ProfileSidebar from '@/components/ProfileSidebar';

const Page = () => {
	const [publications, setPublications] = React.useState<Publication[]>([]);

	React.useEffect(() => {
		fetchPublications().then(setPublications);
	}, []);

	return (
		<div className="flex flex-col sm:flex-row gap-4">
			<aside className="w-full sm:w-1/4">
				<ProfileSidebar />
			</aside>
			<main className="w-full sm:w-3/4">
				<Card className='p-4'>
					<CardBody>
						<PublicationList publications={publications} />
					</CardBody>
				</Card>
			</main>
		</div>
	);
};

export default Page;
