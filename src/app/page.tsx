'use client'

import React from 'react';
import { Card, CardBody, Link } from "@nextui-org/react";
import PublicationList from './PublicationList';
import { fetchPublications } from './edit/EditorPage';
import { Publication } from '@/types';

const Page = () => {
	const [publications, setPublications] = React.useState<Publication[]>([]);

	React.useEffect(() => {
		fetchPublications().then(setPublications);
	}, []);

	return (
		<div className="flex flex-col sm:flex-row gap-4">
			<aside className="w-full sm:w-1/4">
				<Card>
					<CardBody>
						<h2 className="text-2xl font-bold mb-4">Your Name</h2>
						<p className="mb-4">Short biography for the left-hand sidebar</p>
						<h3 className="text-lg font-semibold mb-2">Follow</h3>
						<ul className="space-y-2">
							<li><Link href="#">Earth</Link></li>
							<li><Link href="#">Red Brick University</Link></li>
							<li><Link href="#">Email</Link></li>
							<li><Link href="#">Google Scholar</Link></li>
							<li><Link href="#">ORCID</Link></li>
							<li><Link href="#">PubMed</Link></li>
							<li><Link href="#">Github</Link></li>
							<li><Link href="#">Bluesky</Link></li>
						</ul>
					</CardBody>
				</Card>
			</aside>
			<main className="w-full sm:w-3/4">
				<PublicationList publications={publications} />
			</main>
		</div>
	);
};

export default Page;
