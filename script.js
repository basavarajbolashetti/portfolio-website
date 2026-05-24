/* ═══════════════════════════════════════════════════════
   BASAVARAJ BOLASHETTI — PORTFOLIO JS
   ═══════════════════════════════════════════════════════ */

/* ── DATA ───────────────────────────────────────────────── */
const skillBars = [
  { name: 'Java & Spring Boot', percent: 90, color: 'linear-gradient(90deg,#f89820,#5382a1)' },
  { name: 'Backend Development (Node.js/Express)', percent: 88, color: 'linear-gradient(90deg,#68a063,#3c873a)' },
  { name: 'Python (Flask, AI/ML)', percent: 85, color: 'linear-gradient(90deg,#3776ab,#ffd43b)' },
  { name: 'React.js & Frontend', percent: 85, color: 'linear-gradient(90deg,#61dafb,#764abc)' },
  { name: 'SQL & Database Design (MySQL)', percent: 88, color: 'linear-gradient(90deg,#00758f,#f29111)' },
  { name: 'REST APIs & Microservices', percent: 87, color: 'linear-gradient(90deg,#da70d6,#ba55d3)' },
  { name: 'Git/GitHub & DevOps', percent: 82, color: 'linear-gradient(90deg,#f1502f,#6e5494)' },
];

const skillIcons = [
  { icon: 'fab fa-java',            label: 'Java',       color: '#f89820' },
  { icon: 'fas fa-leaf',            label: 'Spring Boot',color: '#6db33f' },
  { icon: 'fab fa-python',          label: 'Python',     color: '#3776ab' },
  { icon: 'fab fa-js',              label: 'JavaScript', color: '#f7df1e' },
  { icon: 'fab fa-node-js',         label: 'Node.js',    color: '#68a063' },
  { icon: 'fab fa-react',           label: 'React',      color: '#61dafb' },
  { icon: 'fas fa-database',        label: 'MySQL',      color: '#00758f' },
  { icon: 'fas fa-server',          label: 'Express.js', color: '#90c53f' },
  { icon: 'fas fa-cube',            label: 'REST API',   color: '#da70d6' },
  { icon: 'fab fa-html5',           label: 'HTML5',      color: '#e34f26' },
  { icon: 'fab fa-css3-alt',        label: 'CSS3',       color: '#1572b6' },
  { icon: 'fab fa-github',          label: 'GitHub',     color: '#ffffff' },
  { icon: 'fas fa-code-branch',     label: 'Git',        color: '#f1502f' },
  { icon: 'fas fa-brain',           label: 'AI/ML',      color: '#ff6f61' },
  { icon: 'fas fa-link',            label: 'Blockchain', color: '#f7931a' },
  { icon: 'fas fa-microchip',       label: 'IoT',        color: '#00d4aa' },
];

const projects = [
  {
    title: 'AI-Powered Online Exam Monitoring System',
    desc: 'Advanced proctoring system using YOLO object detection and Face Recognition to detect cheating in real-time. Implements multi-face detection, gaze tracking, and automated flagging for suspicious behavior.',
    icon: '🤖',
    tech: ['Python', 'YOLO', 'OpenCV', 'Face Recognition', 'Flask', 'AI/ML'],
    github: 'https://github.com/basavarajbolashetti',
    featured: true
  },
  {
    title: 'E-commerce Platform',
    desc: 'Full-stack e-commerce application with Java Spring Boot backend. Features user authentication, product catalog, shopping cart, order management, and payment integration with responsive React frontend.',
    icon: '🛒',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'REST API', 'JWT Auth'],
    github: 'https://github.com/basavarajbolashetti',
    featured: true
  },
  {
    title: 'Blockchain-Based Charity Donation System',
    desc: 'Transparent donation platform using blockchain technology. Ensures donation traceability, prevents fraud, and provides immutable transaction records for complete accountability.',
    icon: '💝',
    tech: ['Blockchain', 'Solidity', 'Web3.js', 'Node.js', 'React', 'Ethereum'],
    github: 'https://github.com/basavarajbolashetti',
    featured: true
  },
  {
    title: 'Blockchain-Based Voting System',
    desc: 'Secure and transparent electronic voting system leveraging blockchain for tamper-proof vote recording. Features voter verification, real-time results, and complete audit trail.',
    icon: '🗳️',
    tech: ['Blockchain', 'Smart Contracts', 'Node.js', 'React', 'Cryptography'],
    github: 'https://github.com/basavarajbolashetti'
  },
  {
    title: 'IoT Smart Circuit Breaker System',
    desc: 'Intelligent home automation system for remote monitoring and control of electrical circuits. Features real-time power consumption tracking, overload protection, and mobile app control.',
    icon: '⚡',
    tech: ['IoT', 'Arduino', 'Node.js', 'MQTT', 'React Native', 'Firebase'],
    github: 'https://github.com/basavarajbolashetti'
  },
  {
    title: 'Jewelry Shop Management System',
    desc: 'Comprehensive web-based system with admin and user roles. Features inventory management, sales tracking, billing, customer management, and AI chatbot for user queries.',
    icon: '💎',
    tech: ['Node.js', 'Express', 'MySQL', 'React', 'Chatbot'],
    github: 'https://github.com/basavarajbolashetti'
  }
];

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'Varuna Power & Infra',
    period: 'Internship',
    badge: 'Completed',
    active: true,
    points: [
      'Built web modules for housekeeping, travel desk, and restaurant management systems.',
      'Integrated REST APIs with Node.js (Express) backend and React frontend.',
      'Connected MySQL database for data management and persistence.',
      'Improved performance and fixed bugs in existing modules.',
      'Worked with real-world datasets for system optimization.',
    ],
  },
  {
    title: 'SQL Intern',
    company: 'HUBBLEMIND',
    period: 'Internship',
    badge: 'Completed',
    active: false,
    points: [
      'Wrote and optimized SQL queries for data retrieval and reporting.',
      'Performed data cleaning and processing operations.',
      'Worked with real-world datasets and databases.',
      'Developed database optimization techniques.',
      'Collaborated with team on data analysis projects.',
    ],
  },
];

const certifications = [
  {
    name: 'Introduction to Artificial Intelligence',
    code: 'IBM',
    issuer: 'IBM',
    icon: 'fas fa-brain',
    iconColor: '#000000',
    bgColor: 'rgba(0, 0, 0, 0.1)',
  },
  {
    name: 'Data Analytics Simulation',
    code: 'Deloitte',
    issuer: 'Deloitte',
    icon: 'fas fa-chart-bar',
    iconColor: '#1e40af',
    bgColor: 'rgba(30, 64, 175, 0.1)',
  },
  {
    name: 'Privacy & Security in Online Social Media',
    code: 'VTU',
    issuer: 'VTU',
    icon: 'fas fa-lock',
    iconColor: '#dc2626',
    bgColor: 'rgba(220, 38, 38, 0.1)',
  },
];

const typedRoles = [
  'Software Engineer',
  'Java Developer',
  'Full Stack Developer',
  'Backend Developer',
  'Python Developer',
];

/* ── AOS ─────────────────────────────────────────────────── */
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

/* ── Scroll Progress ─────────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + '%';
});

/* ── Navbar ──────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

/* ── Back to Top ─────────────────────────────────────────── */
const backTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 300);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Counter Animation ───────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  }
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.stat-num[data-target]');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ── Typing Animation ────────────────────────────────────── */
const typedEl = document.getElementById('typed-role');
let roleIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
  const current = typedRoles[roleIdx];
  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      setTimeout(() => { isDeleting = true; typeLoop(); }, 2000);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % typedRoles.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 45 : 90);
}
setTimeout(typeLoop, 800);

/* ── Skill Bars ──────────────────────────────────────────── */
function renderSkillBars() {
  const container = document.getElementById('skill-bars-container');
  container.innerHTML = skillBars.map(s => `
    <div class="skill-bar-item" data-aos="fade-right" data-aos-delay="150">
      <div class="skill-bar-header">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-percent">${s.percent}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-target="${s.percent}" style="background:${s.color}"></div>
      </div>
    </div>
  `).join('');

  const fills = container.querySelectorAll('.skill-bar-fill');
  const barObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.target + '%';
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => barObserver.observe(f));
}

/* ── Skill Icons ─────────────────────────────────────────── */
function renderSkillIcons() {
  const container = document.getElementById('skill-icons-container');
  container.innerHTML = skillIcons.map((s, i) => `
    <div class="skill-icon-card" data-aos="zoom-in" data-aos-delay="${i * 50}">
      <i class="${s.icon}" style="color:${s.color}"></i>
      <span class="icon-label">${s.label}</span>
    </div>
  `).join('');
}

/* ── Projects ────────────────────────────────────────────── */
function renderProjects() {
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map((p, i) => `
    <div class="project-card ${p.featured ? 'featured' : ''}" data-aos="fade-up" data-aos-delay="${i * 100}">
      ${p.featured ? '<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
      <div class="project-header">
        <h3 class="project-title">${p.title}</h3>
        <span class="project-icon">${p.icon}</span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
    </div>
  `).join('');
}

/* ── Experience Timeline ─────────────────────────────────── */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  container.innerHTML = experiences.map((exp, i) => `
    <div class="timeline-item" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="timeline-dot ${exp.active ? 'active' : ''}"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <div class="timeline-title">${exp.title}</div>
            <div class="timeline-company">${exp.company}</div>
            <div class="timeline-period"><i class="fas fa-briefcase"></i> ${exp.period}</div>
          </div>
          ${exp.badge ? `<span class="timeline-badge">${exp.badge}</span>` : ''}
        </div>
        <ul class="timeline-points">
          ${exp.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* ── Certifications ──────────────────────────────────────── */
function renderCerts() {
  const container = document.getElementById('certs-container');
  container.innerHTML = certifications.map((c, i) => `
    <div class="cert-card" data-aos="fade-up" data-aos-delay="${i * 100}">
      <div class="cert-icon" style="background:${c.bgColor}; color:${c.iconColor}">
        <i class="${c.icon}"></i>
      </div>
      <div class="cert-info">
        <div class="cert-name">${c.name}</div>
        <div class="cert-issuer">${c.issuer}</div>
        <span class="cert-badge">${c.code}</span>
      </div>
    </div>
  `).join('');
}

/* ── Contact Form Validation ─────────────────────────────── */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  function validate() {
    let valid = true;
    const fields = [
      { id: 'name',    errId: 'name-error',    msg: 'Please enter your name.',            check: v => v.trim().length >= 2 },
      { id: 'email',   errId: 'email-error',   msg: 'Please enter a valid email.',        check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { id: 'subject', errId: 'subject-error', msg: 'Please enter a subject.',            check: v => v.trim().length >= 3 },
      { id: 'message', errId: 'message-error', msg: 'Please enter a message (10+ chars).', check: v => v.trim().length >= 10 },
    ];
    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const errEl = document.getElementById(f.errId);
      if (!f.check(el.value)) {
        el.classList.add('error');
        errEl.textContent = f.msg;
        valid = false;
      } else {
        el.classList.remove('error');
        errEl.textContent = '';
      }
    });
    return valid;
  }

  ['name','email','subject','message'].forEach(id => {
    document.getElementById(id).addEventListener('blur', validate);
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    const data = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    try {
      const res = await fetch('https://formspree.io/f/mdawgkrq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        submitBtn.style.display = 'none';
        successMsg.style.display = 'flex';
        successMsg.style.alignItems = 'center';
        successMsg.style.gap = '8px';
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Message sent! Basavaraj will get back to you soon.';
        form.reset();
      } else {
        const json = await res.json();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        alert(json?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      alert('Network error. Please check your connection and try again.');
    }
  });
}

/* ── Particle System ─────────────────────────────────────── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const NUM = Math.min(70, Math.floor(window.innerWidth / 20));
  const particles = Array.from({ length: NUM }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(218, 112, 214, ${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(218, 112, 214, ${p.opacity})`;
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Init All ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderSkillBars();
  renderSkillIcons();
  renderProjects();
  renderExperience();
  renderCerts();
  setupContactForm();
  initParticles();
});
