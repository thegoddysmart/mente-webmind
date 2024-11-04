import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/assets/mente-logo.png';

export default function Footer() {
  return (
    <div>
        <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
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
  );
}
