import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 text-center py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-7xl font-extrabold">Capture, Organize, and Retrieve Your URLs with Ease</h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto">Turn every valuable piece of information you come across into a memory you can search and retrieve instantly.</p>
        <div className="mt-10">
            <Link to="/signup" className="mt-10 px-6 py-3 text-primary bg-white border rounded-md">
            Get Started Free
            </Link>
        </div>
        
      </div>
    </section>
  );
}
