import FeatureCard from './FeatureCard';

const features = [
  { title: 'Intelligent Summarization', description: 'Captures and summarizes key information.', icon: 'Zap' },
  { title: 'Smart Search Functionality', description: 'Retrieve any saved link or topic based on keywords.', icon: 'Search' },
  { title: 'Categorization & Organization', description: 'Group and tag links by categories.', icon: 'FolderTree' },
  { title: 'Secure Data Storage', description: 'Your data is stored safely and securely.', icon: 'Lock' },
  { title: 'Cross-Device Access', description: 'Access saved content from any device.', icon: 'Laptop' }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mente WebMind Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Here are some of the powerful tools we offer to enhance your productivity:</p>
        </div>
        
        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
