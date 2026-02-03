import React from 'react';

interface ExampleSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const ExampleSection = ({ title, description, children }: ExampleSectionProps) => (
  <div className="space-y-4">
    <div className="border-b border-neutral-border pb-2">
      <h2 className="text-xl font-bold text-neutral-text">{title}</h2>
      {description && <p className="text-neutral-text-secondary mt-1">{description}</p>}
    </div>
    <div className="bg-neutral-bg-surface p-6 rounded-lg shadow-sm border border-neutral-border">
      {children}
    </div>
  </div>
);
