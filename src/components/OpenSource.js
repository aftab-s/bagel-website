import React from 'react';
import { Github, Star, GitFork, Heart, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Pattern - Subtle wheat stalks */}
      <div className="absolute inset-0 opacity-1 dark:opacity-2">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wheatPattern" x="0" y="0" width="80" height="120" patternUnits="userSpaceOnUse">
              {/* Wheat stalk 1 */}
              <path d="M20 20 Q22 35 20 50 Q18 65 20 80 Q22 95 20 110" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15"/>
              <ellipse cx="20" cy="25" rx="1.5" ry="3" fill="currentColor" opacity="0.1"/>
              <ellipse cx="20" cy="35" rx="1.5" ry="3" fill="currentColor" opacity="0.1"/>
              <ellipse cx="20" cy="45" rx="1.5" ry="3" fill="currentColor" opacity="0.1"/>
              <ellipse cx="20" cy="55" rx="1.5" ry="3" fill="currentColor" opacity="0.1"/>
              <ellipse cx="20" cy="65" rx="1.5" ry="3" fill="currentColor" opacity="0.1"/>
              
              {/* Wheat stalk 2 */}
              <path d="M60 40 Q58 55 60 70 Q62 85 60 100 Q58 115 60 130" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.12"/>
              <ellipse cx="60" cy="45" rx="1.5" ry="3" fill="currentColor" opacity="0.08"/>
              <ellipse cx="60" cy="55" rx="1.5" ry="3" fill="currentColor" opacity="0.08"/>
              <ellipse cx="60" cy="65" rx="1.5" ry="3" fill="currentColor" opacity="0.08"/>
              <ellipse cx="60" cy="75" rx="1.5" ry="3" fill="currentColor" opacity="0.08"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wheatPattern)" />
        </svg>
      </div>

      {/* Floating bread crumbs */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-warm-yellow rounded-full opacity-5 animate-bounce-subtle"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-golden-brown rounded-full opacity-4 animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-warm-yellow rounded-full opacity-6 animate-bounce-subtle" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-golden-brown rounded-full opacity-3 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-red-400" />
            <span className="text-warm-yellow font-medium">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            Built by the Community, 
            <br />
            <span className="text-warm-yellow">For the Community</span>
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            Like the finest artisanal bread, Bagel is crafted with love and shared freely. 
            Join our growing community of developers who believe infrastructure should be accessible to everyone.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Community Stats & Features */}
          <div className="space-y-8 animate-slide-up">
            
            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-gray/10 dark:border-cream/10">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-warm-yellow" />
                </div>
                <div className="text-2xl font-bold text-neutral-gray dark:text-cream">2.3k</div>
                <div className="text-sm text-neutral-gray/70 dark:text-cream/70">GitHub Stars</div>
              </div>

              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-gray/10 dark:border-cream/10">
                <div className="flex items-center justify-center mb-3">
                  <GitFork className="h-8 w-8 text-golden-brown" />
                </div>
                <div className="text-2xl font-bold text-neutral-gray dark:text-cream">400+</div>
                <div className="text-sm text-neutral-gray/70 dark:text-cream/70">Forks</div>
              </div>
            </div>

            {/* Community Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-gray dark:text-cream">
                Why Open Source?
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Transparency",
                    description: "Every line of code is open for inspection and improvement"
                  },
                  {
                    title: "Collaboration", 
                    description: "Built with contributions from developers worldwide"
                  },
                  {
                    title: "Innovation",
                    description: "Community-driven features that solve real problems"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-warm-yellow rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-medium text-neutral-gray dark:text-cream mb-1">
                        {item.title}
                      </h4>
                      <p className="text-neutral-gray/70 dark:text-cream/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contribution CTA */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-warm-yellow/10 to-golden-brown/10 dark:from-warm-yellow/5 dark:to-golden-brown/5 rounded-3xl p-8 border border-warm-yellow/20">
              
              {/* GitHub Logo */}
              <div className="text-center mb-8">
                <div className="inline-flex p-6 rounded-full bg-neutral-gray dark:bg-cream/10">
                  <Github className="h-12 w-12 text-cream dark:text-warm-yellow" />
                </div>
              </div>

              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-neutral-gray dark:text-cream">
                  Ready to Contribute?
                </h3>
                
                <p className="text-neutral-gray/70 dark:text-cream/70">
                  Whether you're fixing bugs, adding features, or improving documentation, 
                  every contribution makes Bagel better for everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/bagel-org/bagel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 justify-center"
                  >
                    <Github className="h-5 w-5" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <a
                    href="https://github.com/bagel-org/bagel/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-2 border-warm-yellow text-warm-yellow px-6 py-3 rounded-2xl font-medium hover:bg-warm-yellow hover:text-neutral-gray transition-all duration-300 justify-center"
                  >
                    Contribute Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center animate-fade-in">
          <blockquote className="text-xl md:text-2xl italic text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            "Like sharing a recipe that's been in the family for generations, 
            we believe great infrastructure tools should be available to everyone."
          </blockquote>
          <div className="mt-4 text-warm-yellow font-medium">— The Bagel Team</div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
