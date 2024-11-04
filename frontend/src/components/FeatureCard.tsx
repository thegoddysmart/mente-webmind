import { Zap, Search, FolderTree, Lock, Laptop } from 'lucide-react';

const icons = { Zap, Search, FolderTree, Lock, Laptop };

interface FeatureCardProps {
  title: string
  description: string;
  icon: keyof typeof icons;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = icons[icon];
  
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
        <IconComponent className="h-6 w-6" aria-hidden="true" />
      </div>
      <div>
        <h3 className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
}
