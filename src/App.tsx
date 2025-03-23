import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Menu, X, ExternalLink } from 'lucide-react';
import profileImage from './assets/profile.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">Garvit Varshney</a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLink>
            <NavLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavLink>
            <NavLink active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLink>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              <FileText size={18} className="mr-2" />
              Resume
            </a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink onClick={() => scrollToSection('home')}>Home</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('projects')}>Projects</MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-600">Garvit Varshney</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:garvitVarshney0906@gmail.com" icon={<Mail size={20} />} />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200">
              <img 
                src="photo.jpg" 
                alt="Garvit Varshney" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>About Me</SectionTitle>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">My Background</h3>
              <p className="text-gray-700 mb-4">
                I'm a passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. 
                I specialize in building responsive web applications using modern frameworks like React.
              </p>
              <p className="text-gray-700 mb-4">
                With 5 years of experience in the industry, I've worked on a variety of projects ranging from 
                small business websites to complex web applications. I'm dedicated to creating clean, efficient, 
                and user-friendly interfaces.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <SkillCard title="Frontend Development" items={["HTML5", "CSS3", "JavaScript", "TypeScript", "React"]} />
                <SkillCard title="UI Frameworks" items={["Tailwind CSS", "Material UI", "Bootstrap"]} />
                <SkillCard title="Tools" items={["Git", "Webpack", "Vite", "Figma"]} />
                <SkillCard title="Other" items={["Responsive Design", "SEO", "Performance Optimization"]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle>My Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="Apni Library" 
              description="A fully responsive e-commerce platform built with React and Node.js."
              image="apnilib.jpg"
              tags={["React", "Node.js", "MongoDB"]}
              demoLink="https://e-book-platform.vercel.app/"
              codeLink="https://github.com/garvit0906/eBook-platform.git"
            />
            <ProjectCard 
              title="Portfolio Website" 
              description="A personal portfolio website showcasing my projects and skills."
              image="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              tags={["React", "Tailwind CSS", "TypeScript"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
            <ProjectCard 
              title="Weather App" 
              description="A weather application that displays current weather and forecasts."
              image="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              tags={["JavaScript", "API", "CSS"]}
              demoLink="https://example.com"
              codeLink="https://github.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg text-gray-700 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Garvit Varshney</p>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} dark />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} dark />
              <SocialLink href="mailto:john@example.com" icon={<Mail size={20} />} dark />
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Garvit Varshney. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Component for desktop navigation links
const NavLink = ({ children, active, onClick }: { children: React.ReactNode, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`text-base font-medium hover:text-indigo-600 transition-colors ${active ? 'text-indigo-600' : 'text-gray-700'}`}
  >
    {children}
  </button>
);

// Component for mobile navigation links
const MobileNavLink = ({ children, onClick }: { children: React.ReactNode, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="text-base font-medium text-gray-700 hover:text-indigo-600 transition-colors py-2"
  >
    {children}
  </button>
);

// Component for social media links
const SocialLink = ({ href, icon, dark }: { href: string, icon: React.ReactNode, dark?: boolean }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`p-2 rounded-full ${dark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
  >
    {icon}
  </a>
);

// Component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-center mb-12 relative">
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-600"></span>
  </h2>
);

// Component for skill cards
const SkillCard = ({ title, items }: { title: string, items: string[] }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h4 className="text-lg font-semibold mb-2 text-indigo-600">{title}</h4>
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

// Component for project cards
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags, 
  demoLink, 
  codeLink 
}: { 
  title: string, 
  description: string, 
  image: string, 
  tags: string[], 
  demoLink: string, 
  codeLink: string 
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-3">
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
        >
          <ExternalLink size={16} className="mr-1" /> Live Demo
        </a>
        <a 
          href={codeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
        >
          <Github size={16} className="mr-1" /> View Code
        </a>
      </div>
    </div>
  </div>
);

export default App;