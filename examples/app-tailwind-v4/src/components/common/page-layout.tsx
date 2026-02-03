import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-neutral-bg p-8">
    <div className="max-w-4xl mx-auto space-y-8">
      {children}
    </div>
  </div>
);
