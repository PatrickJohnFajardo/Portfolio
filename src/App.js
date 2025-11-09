import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, Menu, X, Award, Briefcase, Code, GraduationCap, Hammer } from 'lucide-react';

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'Python', color: 'bg-yellow-500', icon: '🐍' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: '📜' },
    { name: 'React', color: 'bg-blue-400', icon: '⚛️' },
    { name: 'Node.js', color: 'bg-green-600', icon: '🟢' },
    { name: 'TypeScript', color: 'bg-blue-600', icon: 'TS' },
    { name: 'MongoDB', color: 'bg-green-500', icon: '🍃' },
    { name: 'PostgreSQL', color: 'bg-blue-500', icon: '🐘' },
    { name: 'Docker', color: 'bg-blue-400', icon: '🐳' },
    { name: 'AWS', color: 'bg-orange-500', icon: '☁️' },
    { name: 'Git', color: 'bg-orange-600', icon: '📊' },
    { name: 'TailwindCSS', color: 'bg-cyan-500', icon: '🎨' },
    { name: 'Next.js', color: 'bg-gray-900', icon: '▲' },
  ];

  const experiences = [
    {
      company: 'Tech Company',
      role: 'Senior Full Stack Developer',
      period: 'Jan 2023 - Present',
      description: 'Led development of AI-powered applications using React, Node.js, and Python. Implemented microservices architecture and improved system performance by 40%.',
      logo: '💼'
    },
    {
      company: 'Startup Inc',
      role: 'Full Stack Developer',
      period: 'Jun 2021 - Dec 2022',
      description: 'Built scalable web applications with React and Express. Collaborated with cross-functional teams to deliver features on time.',
      logo: '🚀'
    },
    {
      company: 'Digital Agency',
      role: 'Frontend Developer',
      period: 'Jan 2020 - May 2021',
      description: 'Developed responsive user interfaces and optimized web performance. Worked with modern JavaScript frameworks and design systems.',
      logo: '🎨'
    }
  ];

  const projects = [
    {
      title: 'AI Dashboard',
      description: 'Real-time analytics dashboard with AI-powered insights',
      tech: ['React', 'TypeScript', 'Python'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'Node.js', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Manager',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with content sharing features',
      tech: ['React Native', 'GraphQL', 'PostgreSQL'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certificates = [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Professional certification in cloud architecture and AWS services'
    },
    {
      name: 'Full Stack Development',
      issuer: 'FreeCodeCamp',
      date: '2022',
      description: 'Comprehensive certification covering modern web development'
    },
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera',
      date: '2023',
      description: 'Advanced ML concepts and implementation with Python'
    }
  ];

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${cardBg} border-b ${borderClass} z-50 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Patrick John Fajardo
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {['Skills', 'Experience', 'Projects', 'Education', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-500' : ''
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsSideMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-700"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsSideMenuOpen(true)} className="p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Side Menu Overlay */}
        {isSideMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsSideMenuOpen(false)}
          >
            <div 
              className={`fixed right-0 top-0 h-full w-80 ${cardBg} shadow-2xl transform transition-transform duration-300 flex flex-col`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsSideMenuOpen(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-8 flex flex-col">
                <div className="space-y-6">
                  <button
                    onClick={() => {
                      scrollToSection('skills');
                      setIsSideMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredMenuItem('skills')}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                  >
                    <Code size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span>Skills</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('experience');
                      setIsSideMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredMenuItem('experience')}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                  >
                    <Briefcase size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span>Experience</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('projects');
                      setIsSideMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredMenuItem('projects')}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                  >
                    <Hammer size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span>Projects</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('education');
                      setIsSideMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredMenuItem('education')}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                  >
                    <GraduationCap size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span>Education</span>
                  </button>

                  <button
                    onClick={() => {
                      scrollToSection('certificates');
                      setIsSideMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredMenuItem('certificates')}
                    onMouseLeave={() => setHoveredMenuItem(null)}
                    className="flex items-center gap-4 text-lg hover:text-blue-500 transition-colors w-full text-left group"
                  >
                    <Award size={24} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span>Certificates</span>
                  </button>
                </div>

                {/* Large icon display at bottom */}
                <div className="flex-1 flex items-center justify-center mt-8">
                  <div className="relative w-full h-64 flex items-center justify-center">
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === 'skills' ? 'opacity-20' : 'opacity-0'}`}>
                      <Code size={200} />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === 'experience' ? 'opacity-20' : 'opacity-0'}`}>
                      <Briefcase size={200} />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === 'projects' ? 'opacity-20' : 'opacity-0'}`}>
                      <Hammer size={200} />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === 'education' ? 'opacity-20' : 'opacity-0'}`}>
                      <GraduationCap size={200} />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredMenuItem === 'certificates' ? 'opacity-20' : 'opacity-0'}`}>
                      <Award size={200} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${cardBg} border-t ${borderClass}`}>
            {['Skills', 'Experience', 'Projects', 'Education', 'Certificates', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-3 hover:bg-gray-700"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Full Stack Engineer
              </span>
              <span className="block mt-2">and AI Engineer</span>
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              with expertise in AI Agents
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-lg transition-shadow">
                Download CV
              </button>
              <button className={`px-8 py-3 border ${borderClass} rounded-full hover:bg-gray-700 transition-colors`}>
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`${cardBg} border ${borderClass} p-4 rounded-xl hover:scale-105 transition-transform cursor-pointer text-center`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className={`${cardBg} border ${borderClass} p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.logo}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-blue-500">{exp.company}</p>
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                    </div>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Hammer className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`${cardBg} border ${borderClass} rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group`}
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
                  🚀
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className={`${cardBg} border ${borderClass} p-6 rounded-xl`}>
            <div className="flex items-center gap-4">
              <div className="text-5xl">🎓</div>
              <div>
                <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-blue-500">University Name</p>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>2016 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-500" size={32} />
            <h2 className="text-4xl font-bold">Certificates</h2>
          </div>
          <div className="space-y-6">
            {certificates.map((cert, i) => (
              <div key={i} className={`${cardBg} border ${borderClass} p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                    <p className="text-blue-500 mb-2">{cert.issuer}</p>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{cert.description}</p>
                    <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} mt-2 block`}>{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            Let's work together on your next project
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=patrick80361@gmail.com"
            className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}
            target="_blank"
            rel="noopener noreferrer"
            >
              <Mail size={20} />
              Email
            </a>
            <a href="https://github.com/PatrickJohnFajardo" 
            className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}
            target="_blank"
            rel="noopener noreferrer"
            >
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/patrickjohn01" 
            className={`flex items-center gap-2 px-6 py-3 ${cardBg} border ${borderClass} rounded-full hover:shadow-lg transition-shadow`}
            target="_blank"
            rel="noopener noreferrer">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${borderClass}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Portfolio. Built with React and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}