import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import dalhousie_logo from './images/dalhousie-logo.png';
import spry_logo from './images/Spry-logo.jpeg';
import gem_logo from './images/gem-logo.png';
import max_photo from './images/max.png';
import React, { useState, useEffect, useRef } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website featuring cool animations, dynamic sections, and smooth transitions built with React.",
      tags: ["React", "Tailwind CSS", "JavaScript", "HTML Canvas"],
      link: "#"
    },
    {
      title: "QuickCash",
      description: "Android application that allows users to find and post short-term gigs, as well as recruit workers.",
      tags: ["Android Studio", "Java", "Firebase", "REST APIs"],
      link: "#"
    },
    {
      title: "SpaceShooter",
      description: "3D FPS shooting game with auto-spawned AI-Enemies, features puzzle system and platforming.",
      tags: ["Unity", "C#", "NavMesh", "Physics"],
      link: "https://maxlee0325.itch.io/space-shooter"
    },
    {
      title: "Looper",
      description: "An iOS application that helps musicians practice by recording multiple tracks and layering them together.",
      tags: ["SWIFT", "AVFoundation", "Core Audio"],
      link: "https://github.com/MaxLee0325/Looper"
    },
    {
      title: "Iventory Manager",
      description: "An web application features warehouse mangement functionality and switch between different role of users",
      tags: ["Java", "JavaScript", "MySQL", "Springboot", "Node.JS", "Vue"],
      link: "#"
    },
    {
      title: "Titanic Data Analysis",
      description: "Data analysis and visualization project predicting passenger survival using decision tree models and interactive dashboards.",
      tags: ["Python", "Pandas", "Scikit-learn", "Decision Trees"],
      link: "#"
    }
  ];

  const skills = [
    "Java", "JavaScript", "SQL", "React", "Node.js", "Python",
    "HTML/CSS", "Git", "REST APIs",
    "Agile", "C#", "C", "CI/CD", "Data Science"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-500 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Yongteng (Max) Li
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
              <a href="#education" className="text-gray-300 hover:text-purple-400 transition">Education</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-purple-400 transition">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 text-gray-300 hover:text-purple-400">About</a>
              <a href="#projects" className="block py-2 text-gray-300 hover:text-purple-400">Projects</a>
              <a href="#skills" className="block py-2 text-gray-300 hover:text-purple-400">Skills</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-purple-400">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden min-h-screen">
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 w-full h-full">
          <MatrixRain />
        </div>
        
        {/* Content overlay */}
        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col justify-center min-h-screen">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={max_photo} 
              alt="Max Li" 
              className="w-80 h-80 rounded-full border-4 border-green-400 shadow-lg shadow-green-500/50 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Hi, I'm <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Max</span>
          </h1>
          <p className="text-xl md:text-4xl text-gray-100 mb-8 drop-shadow-lg">
            Former Teacher, now Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg shadow-green-500/50">
              View My Work
            </a>
            <a href="#contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition transform hover:scale-105 shadow-lg shadow-green-500/50">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-gray-100 text-xl leading-relaxed">
            Before transitioning to software development, I worked as a teacher and manager at a 
            training school, where I developed strong leadership and communication skills that 
            complement my technical expertise. Now I'm a passionate developer with a love for 
            creating beautiful, functional applications. With experience in both frontend and 
            backend technologies, I enjoy bringing ideas to life through code. When I'm not coding, 
            you can find me exploring new technologies, tackling challenging problems, or working 
            on personal projects. 
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Academic Background</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8">
                <a
                  href="https://www.dal.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <div className="w-32 h-24 flex items-center justify-center bg-slate-900/40 rounded-md">
                    <img
                      src={dalhousie_logo}
                      alt="Dalhousie University Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </a>
              </div>

            
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Dalhousie University</h3>
                <p className="text-green-400 text-lg mb-4">Bachelor of Computer Science</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-gray-300 text-lg">
                  <p>In-course Scholarship</p>
                  <p>Sexton Scholar</p>
                  <p>Dean's List</p>
                  <p>USRA Award</p>
                  <p>Sir William Young Scholarship</p>
                  <p>GPA: 4.20</p>
                </div>
              </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Work Experience</h2>
          
        <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 shadow-lg hover:shadow-green-500/10 transition">
          <a
            href="https://www.sprypoint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <div className="w-32 h-24 flex items-center justify-center bg-slate-900/40 rounded-md shadow-inner">
              <img 
                src={spry_logo} 
                alt="SpryPoint Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </a>

            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold text-white">SpryPoint</h3>
                <span className="text-sm text-gray-400">May 2025 – August 2025</span>
              </div>

              <p className="text-green-400 text-lg font-medium">
                Software Developer Co-op · <span className="text-gray-300">SpryCIS</span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Java</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">JavaScript</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">PostgreSQL</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">HTML</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">CSS</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Agile (Scrum)</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Jira</span>
              </div>
            </div>
          </div>

        <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 shadow-lg hover:shadow-green-500/10 transition">
          <a
            href="https://www.sprypoint.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <div className="w-32 h-24 flex items-center justify-center bg-slate-900/40 rounded-md shadow-inner">
              <img 
                src={spry_logo} 
                alt="SpryPoint Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </a>

            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold text-white">SpryPoint</h3>
                <span className="text-sm text-gray-400">Sep 2024 – Dec 2024</span>
              </div>

              <p className="text-green-400 text-lg font-medium">
                Software Developer Co-op · <span className="text-gray-300">SpryCIS</span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Java</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">JavaScript</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">PostgreSQL</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">HTML</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">CSS</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Agile (Scrum)</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Jira</span>
              </div>
            </div>
          </div>


          <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-lg p-8">
            <a
              href="https://gem.cs.dal.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
            <div className="w-32 h-24 flex items-center justify-center bg-slate-900/40 rounded-md">
              <img 
              src={gem_logo} 
              alt="GemLab" 
              className="w-25 h-28 object-contain"
              />
            </div>
            </a>
            
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-bold text-white">GemLab</h3>
                <span className="text-sm text-gray-400">May 2024 – August 2024</span>
              </div>

              <p className="text-green-400 text-lg font-medium">
                Research Assistant · <span className="text-gray-300">Psychogeographer’s table</span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Unity</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">C#</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">VR/MR</span>
                <span className="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-300 border border-green-500/20">HCI</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, idx) => (
              <span 
                key={idx}
                className="bg-gradient-to-r from-green-300 to-green-800 text-white px-6 py-3 rounded-full font-semibold hover:scale-110 transition transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:yn201290@dal.ca"
              className="bg-slate-800 hover:bg-green-600 text-white p-4 rounded-full transition transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/MaxLee0325"
              className="bg-slate-800 hover:bg-green-600 text-white p-4 rounded-full transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yongteng-li-308421250/"
              className="bg-slate-800 hover:bg-green-600 text-white p-4 rounded-full transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Yongteng (Max) Li. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('Matrix Rain is running!');
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas not found!');
      return;
    }
    
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ display: 'block' }} />;
};