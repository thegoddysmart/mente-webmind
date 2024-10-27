import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/mente-logo.png';
import Logos from '@/assets/mente-ff.png';
import { Search, FolderTree, Lock, Laptop, Clock, Shield, Zap, Github, Twitter, Linkedin, Menu } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img src={Logo} className="h-8 w-auto text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-800">Mente WebMind</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#home" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#features" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Features
              </Link>
              <Link href="#about" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
              <Link href="#why-choose-us" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Why Choose Us
              </Link>
              <Link href="#pricing" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="#contact" className="border-transparent text-gray-500 hover:border-primary hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact Us
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link to="/signin" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Log In
              </Link>
            </div>
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Link href="#home" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  Home
                </Link>
                <Link href="#features" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  Features
                </Link>
                <Link href="#about" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  About
                </Link>
                <Link href="#why-choose-us" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  Why Choose Us
                </Link>
                <Link href="#pricing" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  Pricing
                </Link>
                <Link href="#contact" className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Capture, Organize, and Retrieve Your URLs with Ease
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Turn every valuable piece of information you come across into a memory you can search and retrieve instantly.
          </p>
          <div className="mt-10">
            <Link href="#" 
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What is Mente WebMind?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Mente WebMind is a personal knowledge management tool that empowers users to save, organize, and retrieve information from across the web. Rather than simply bookmarking pages, Mente WebMind scrapes and summarizes each page, storing a concise overview that allows users to search and find exactly what they need, whenever they need it.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mente WebMind Features
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Here are some of the powerful tools we offer to enhance your productivity:
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <img src={Logos} className="h-6 w-auto" aria-hidden="true"/>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Intelligent Summarization</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Captures and summarizes key information from saved web pages, helping you retain only the essentials.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Search Functionality</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Retrieve any saved link or topic based on keywords and phrases, just like searching a personal library.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <FolderTree className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Categorization & Organization</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Group and tag links by categories, making it easy to keep related content together.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Lock className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Secure Data Storage</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Your data is stored safely and securely with industry-leading encryption.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <Laptop className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Cross-Device Access</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Access your saved content from any device, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
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

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Start Building Your Second Brain Today!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="#" 
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50">
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Link href="/" className="flex items-center">
                <img src={Logo} className="h-8 w-auto text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-800">Mente WebMind</span>
              </Link>
              <p className="text-gray-500 text-base">
                Capture, organize, and retrieve your knowledge with ease.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="#about" className="text-base text-gray-500 hover:text-gray-900">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#features" className="text-base text-gray-500 hover:text-gray-900">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-base text-gray-500 hover:text-gray-900">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2024 Mente WebMind. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}



// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const navigate = useNavigate();

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => navigate('/dashboard')}>
//           Go to Dashboard
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
