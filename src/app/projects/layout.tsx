import '../globals.css';
import React from 'react';
import { Providers } from '../providers';
import ProfileSidebar from '@/components/ProfileSidebar';
import TopNavBar from '@/components/TopNavBar';
import Footer from '@/components/Footer';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
  // return (
    // <html lang="en">
    //   <body className="flex flex-col min-h-screen justify-between">
    //     <Providers>
    //       <TopNavBar />
    //       <aside className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
    //         <ProfileSidebar />
    //       </aside>
    //       <main className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4">
    //         {children}  
    //       </main>
    //       <Footer />
    //     </Providers>
    //   </body>
    // </html>
  // );
}