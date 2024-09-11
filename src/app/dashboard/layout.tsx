import React from 'react';
import SideBar from '../../components/sidebar/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64 min-h-screen bg-gray-100">
        <SideBar
          name="Your Name" 
          biography="Short biography for the left-hand sidebar" 
          links={[
            { url: "/dashboard", label: "Dashboard" },
            { url: "/edit", label: "Edit Publications" },
            { url: "/profile", label: "Edit Profile" },
            { url: "/settings", label: "Settings" },
          ]} 
        />
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
