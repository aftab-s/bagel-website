import React from 'react';
import { Sun, Moon, Github } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 bg-cream dark:bg-dark-gray border-b border-neutral-gray/10 dark:border-cream/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={darkMode ? "/Logo/Bagel-v1.0.1-DarkMode.png" : "/Logo/Bagel-v1.0.1-LightMode.png"} 
              alt="Bagel Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors">
              How It Works
            </a>
            <a href="#showcase" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors">
              Showcase
            </a>
            <a href="#team" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors">
              Team
            </a>
            <a href="#open-source" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors">
              Open Source
            </a>
          </div>

          {/* Dark Mode Toggle & GitHub */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-warm-yellow" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-gray" />
              )}
            </button>
            <a
              href="https://github.com/bagel-org/bagel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5 text-neutral-gray dark:text-cream" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
