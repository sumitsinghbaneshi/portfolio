import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(true)

  // Background images for different sections
  const backgrounds = {
    home: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    about: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    skills: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    projects: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    resume: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    contact: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Animated background */}
      <div className="background-container">
        <motion.img 
          key={activeSection}
          src={backgrounds[activeSection]}
          alt="Background"
          className="background-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        />
        <div className="overlay"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="logo">SS</span>
          <span>Sumit Singh</span>
        </div>
        
        <div className="nav-links">
          <button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</button>
          <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
          <button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => setActiveSection('resume')} className={activeSection === 'resume' ? 'active' : ''}>Resume</button>
          <button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</button>
        </div>
        
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      {/* Main Content */}
      <main className="content">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'resume' && <ResumeSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  )
}

// Home Section Component
function HomeSection() {
  return (
    <motion.div 
      className="section home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>SECURING DIGITAL LANDSCAPES</h1>
      <p className="tagline">Cybersecurity Analyst | Pentester | IAM Specialist | Web Developer</p>
      
      <div className="cta-buttons">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="primary-btn"
        >
          View My Work
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="secondary-btn"
        >
          Contact Me
        </motion.button>
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <h3>100+</h3>
          <p>Security Assessments</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Systems Implemented</p>
        </div>
        <div className="stat-item">
          <h3>30+</h3>
          <p>Websites Developed</p>
        </div>
      </div>
    </motion.div>
  )
}

// About Section Component
function AboutSection() {
  return (
    <motion.div 
      className="section about"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a cybersecurity professional with extensive experience in IT audits, penetration testing, 
            and security assessments. My expertise extends to IAM system implementation, SSO, MFA solutions, 
            and ensuring robust access controls for organizations.
          </p>
          <p>
            Beyond security, I develop functional and user-friendly websites for small businesses, 
            combining aesthetic appeal with solid security fundamentals. I bridge the gap between 
            technical security requirements and business objectives.
          </p>
          <p>
            My approach combines rigorous testing methodologies (including functional testing and UAT) 
            with creative problem-solving to deliver secure, efficient digital solutions.
          </p>
        </div>
        <div className="about-image">
          <motion.img 
            src="/Images/image.jpeg" 
            alt="Professional portrait"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// Skills Section Component
function SkillsSection() {
  const skills = [
    {
      category: "Cybersecurity",
      items: [
        { name: "Penetration Testing", level: 95 },
        { name: "IT Audit", level: 90 },
        { name: "Security Testing", level: 92 },
        { name: "Vulnerability Assessment", level: 88 }
      ]
    },
    {
      category: "IAM & Authentication",
      items: [
        { name: "IAM Implementation", level: 94 },
        { name: "SSO Solutions", level: 91 },
        { name: "MFA Systems", level: 93 },
        { name: "Access Governance", level: 89 }
      ]
    },
    {
      category: "Testing & Development",
      items: [
        { name: "Functional Testing", level: 85 },
        { name: "User Acceptance Testing", level: 87 },
        { name: "Web Development", level: 82 },
        { name: "Security by Design", level: 90 }
      ]
    }
  ]

  return (
    <motion.div 
      className="section skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Skills</h2>
      
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <motion.div 
            key={index}
            className="skill-category"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-level"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="certifications">
        <h3>Certifications & Training</h3>
        <div className="cert-grid">
          <motion.div whileHover={{ scale: 1.05 }} className="cert-item">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="CCNA" />
            <p>CCNA</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="cert-item">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="React" />
            <p>React Development</p>
          </motion.div>
        </div>
        {/* New Certifications as clickable image cards */}
        <div className="cert-grid">
          {/* SIEM Fundamentals */}
          <a href="https://learn.chronicle.security/certificates/tu2du6fkx3" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="SIEM Fundamentals" />
            <p><b>SIEM Fundamentals</b></p>
          </a>
          {/* SQL (Basic) */}
          <a href="https://www.hackerrank.com/certificates/17b8843912b4" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="SQL Basic" />
            <p><b>SQL (Basic)</b></p>
          </a>
          {/* CompTIA PenTest+ */}
          <a href="https://skillsoft.digitalbadges.skillsoft.com/23ef4812-cb9c-415d-9f52-81b5f75f2235#acc.Lbp9Kv1t" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="CompTIA PenTest+" />
            <p><b>CompTIA PenTest+: Planning for an Engagement</b></p>
          </a>
          {/* InfoSec Vendor Management */}
          <a href="https://skillsoft.digitalbadges.skillsoft.com/3ccc3f7c-0a5c-48ac-a590-5b9578b16ad0#acc.LcQhKuOk" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="InfoSec Vendor Management" />
            <p><b>Information Security Practices: InfoSec Vendor Management</b></p>
          </a>
          {/* Bits and Bytes of Computer Networking */}
          <a href="https://www.coursera.org/account/accomplishments/certificate/Z96QBXDTLR4Z" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Bits and Bytes of Computer Networking" />
            <p><b>Bits and Bytes of Computer Networking</b></p>
          </a>
          {/* Technical Support Fundamentals */}
          <a href="https://www.coursera.org/account/accomplishments/certificate/3X7BHRMP8ZY3" target="_blank" rel="noopener noreferrer" className="cert-item cert-link">
            <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Technical Support Fundamentals" />
            <p><b>Technical Support Fundamentals</b></p>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Projects Section Component
function ProjectsSection() {
  const projects = [
    {
      title: "Enterprise IAM Implementation",
      description: "Designed and implemented a comprehensive IAM solution for a Fortune 500 company with SSO and MFA integration.",
      tags: ["IAM", "SSO", "MFA", "Security"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "E-commerce Security Audit",
      description: "Conducted thorough penetration testing and security assessment for an online retail platform.",
      tags: ["Pentest", "Security Audit", "Vulnerability Assessment"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      title: "Small Business Website",
      description: "Developed a secure, responsive website for a local business with integrated contact forms and analytics.",
      tags: ["Web Development", "UI/UX", "Security"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    }
  ]

  return (
    <motion.div 
      className="section projects"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              <button className="project-btn">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Resume Section Component
function ResumeSection() {
  const handleDownload = () => {
    // The PDF file should be placed in the public/resume folder
    window.open('/resume/resume.pdf', '_blank')
  }

  return (
    <motion.div 
      className="section resume"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Resume</h2>
      
      <div className="resume-container">
        <div className="resume-content">
          <h3>Professional Experience Document</h3>
          <p>
            Download my detailed resume to learn more about my professional experience,
            education, certifications, and technical skills in cybersecurity and web development.
          </p>
          
          <motion.button 
            className="download-btn"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume (PDF)
          </motion.button>
        </div>
        
        <div className="resume-highlights">
          <h3>Key Highlights</h3>
          <ul>
            <li>5+ years of cybersecurity experience</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>CISSP Certification</li>
            <li>Full Stack Development expertise</li>
            <li>Project Management Professional</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

// Contact Section Component
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Message sent! I will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <motion.div 
      className="section contact"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Get In Touch</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>sumitsinghbaneshi@outlook.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 7251826364</p>
          </div>
          <div className="info-item">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sumit-singh-3892b1144/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/sumitsinghbaneshi/sumitsinghbaneshi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="submit-btn"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

export default App
