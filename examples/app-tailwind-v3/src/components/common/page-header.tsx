import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => (
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-3xl font-bold text-primary-main">{title}</h1>
      {description && <p className="text-neutral-text-secondary mt-2">{description}</p>}
    </div>
    <Link to="/" className="px-4 py-2 bg-neutral-bg-surface border border-neutral-border rounded-md hover:bg-neutral-border transition-colors text-neutral-text">
      Back to Home
    </Link>
  </div>
);
