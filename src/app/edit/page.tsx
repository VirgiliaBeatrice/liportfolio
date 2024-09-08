import React from 'react';
import EditorPage from './EditorPage';

export default function Page({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="edit-layout">
      <h1>Edit Publications</h1>
      <EditorPage />
      {children}
    </div>
  );
}
