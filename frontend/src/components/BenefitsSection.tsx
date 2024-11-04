import { Clock, Shield, FolderTree, Zap } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Mente WebMind?
            </p>
        </div>
        <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Save Time</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  No more endless searching through bookmarks. With Mente WebMind's smart search and summarization, you'll find the information you need faster.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FolderTree className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Stay Organized</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  An all-in-one platform to store and categorize your web research.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Shield className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Privacy & Security</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  We value your privacy and use robust security protocols to keep your data protected.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Productivity Boost</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Mente WebMind is your personal assistant for knowledge, keeping you efficient and focused on what matters.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
