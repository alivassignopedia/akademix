/*
import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import StudentJourney from '../../components/StudentJourney/StudentJourney'
import FindProfessorFlow from '../../components/FindProfessorFlow/FindProfessorFlow'
import CareerExplorer from '../../components/CareerExplorer/CareerExplorer'
import SubjectCard from '../../components/SubjectCard/SubjectCard'
import UniversityCard from '../../components/UniversityCard/UniversityCard'
import { subjectCategories } from '../../data/subjects'
import { universities } from '../../data/universities'
import { mentorCategories } from '../../data/mentors'

const featuredSubjects = subjectCategories.flatMap((c) =>
  c.subjects.slice(0, 2).map((name) => ({ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name }))
).slice(0, 9)

export default function Home() {
  return (
    <div>
      <Hero />
      <StudentJourney />
      <FindProfessorFlow />

      <section className="border-b border-line">
        <div className="container-content py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Explore subjects</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Every subject, one platform.
              </h2>
            </div>
            <Link to="/subjects" className="hidden sm:block text-sm text-ink hover:text-brass-dark">
              View all subjects →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {featuredSubjects.map((s) => (
              <SubjectCard key={s.slug} subject={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-content py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Learn with Akademix</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Coaching, beyond the classroom.
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'School Coaching',
              'Entrance Preparation',
              'University Subjects',
              'Professional Courses',
              'Skill Development',
              'Exam Preparation',
              'Research Support',
              'Career Preparation',
            ].map((label) => (
              <div key={label} className="card px-5 py-6 text-ink text-sm font-medium">
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-content py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Global universities</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Explore universities worldwide.
              </h2>
            </div>
            <Link to="/universities" className="hidden sm:block text-sm text-ink hover:text-brass-dark">
              View all universities →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {universities.slice(0, 6).map((u) => (
              <UniversityCard key={u.id} university={u} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-content py-16">
          <p className="eyebrow mb-2">One-to-one mentoring</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-8">
            Find a mentor for exactly where you are.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mentorCategories.map((m) => (
              <div key={m.slug} className="card px-5 py-5">
                <p className="text-ink font-medium">{m.name}</p>
                <p className="text-sm text-slate mt-1">{m.description}</p>
              </div>
            ))}
          </div>
          <Link to="/mentoring" className="btn-secondary mt-8 inline-flex">
            Find a Mentor
          </Link>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-content py-16">
          <p className="eyebrow mb-2">Assignment guidance</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4 max-w-2xl">
            Structured guidance, not shortcuts.
          </h2>
          <p className="text-slate max-w-xl">
            Get structured academic guidance, concept clarification, research direction and
            feedback to help you understand and complete your academic work independently.
          </p>
        </div>
      </section>

      <CareerExplorer />

      <section>
        <div className="container-content py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
            Tell us where you are. We'll help you find the way.
          </h2>
          <Link to="/professors" className="btn-primary mt-2 inline-flex">
            Find Your Professor
          </Link>
        </div>
      </section>
    </div>
  )
}
*/
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Globe, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  UserCheck, 
  Compass, 
  FileText, 
  Briefcase, 
  ChevronRight, 
  X, 
  Star, 
  ShieldCheck, 
  Users, 
  Lightbulb, 
  PlayCircle,
  Menu
} from 'lucide-react';

const subjectCategories = [
  { category: 'STEM', subjects: ['Artificial Intelligence', 'Quantum Physics', 'Biotechnology', 'Data Science', 'Astrophysics', 'Robotics'] },
  { category: 'Humanities', subjects: ['Philosophy of Mind', 'Global Economics', 'Cognitive Psychology', 'International Relations', 'Modern History', 'Sociology'] },
  { category: 'Business & Law', subjects: ['Corporate Finance', 'Intellectual Property Law', 'Venture Capital', 'Strategic Management', 'Behavioral Economics', 'Global Marketing'] }
];

const featuredSubjects = subjectCategories.flatMap((c) =>
  c.subjects.slice(0, 2).map((name) => ({ slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name, category: c.category }))
).slice(0, 9);

const universities = [
  { id: '1', name: 'Massachusetts Institute of Technology', location: 'Cambridge, MA, USA', rank: '#1 Global', badge: 'Elite STEM', students: '11,500+' },
  { id: '2', name: 'University of Oxford', location: 'Oxford, United Kingdom', rank: '#2 Global', badge: 'Collegiate', students: '24,000+' },
  { id: '3', name: 'Stanford University', location: 'Stanford, CA, USA', rank: '#3 Global', badge: 'Innovation Hub', students: '17,000+' },
  { id: '4', name: 'ETH Zurich', location: 'Zurich, Switzerland', rank: '#6 Global', badge: 'Research Giant', students: '22,000+' },
  { id: '5', name: 'National University of Singapore', location: 'Singapore', rank: '#8 Global', badge: 'Asia Leader', students: '38,000+' },
  { id: '6', name: 'University of Cambridge', location: 'Cambridge, United Kingdom', rank: '#4 Global', badge: 'Historic Excellence', students: '23,000+' }
];

const mentorCategories = [
  { slug: 'ivy-league-admissions', name: 'Ivy League Admissions Mentors', description: 'Former admissions officers and alumni guiding your essays and portfolio.' },
  { slug: 'research-publication', name: 'Research & Thesis Advisors', description: 'PhD holders from top labs assisting with peer-reviewed publications.' },
  { slug: 'career-accelerator', name: 'FAANG & MBB Mentors', description: 'Industry leaders providing mock interviews and portfolio reviews.' },
  { slug: 'olympiad-prep', name: 'Competitive Exam Coaches', description: 'Gold medalists training you for Olympiads and rigorous entrance tests.' },
  { slug: 'early-stem', name: 'Young Innovators Track', description: 'Guiding high schoolers building real patents, apps, and startups.' },
  { slug: 'global-scholarships', name: 'Scholarship & Grant Strategists', description: 'Securing full-rides and prestigious global fellowships.' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup for light dual-tone (Cream / Blush) Theme
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Warm gold, soft rose, and periwinkle particle field
    const particleCount = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorGold = new THREE.Color(0xd97706);
    const colorRose = new THREE.Color(0xf472b6);
    const colorPeriwinkle = new THREE.Color(0x818cf8);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 85;
      positions[i + 1] = (Math.random() - 0.5) * 85;
      positions[i + 2] = (Math.random() - 0.5) * 50;

      const r = Math.random();
      const mixedColor = r > 0.66 ? colorGold : r > 0.33 ? colorRose : colorPeriwinkle;
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.48,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Two floating wireframe icosahedrons for depth
    const icoGeometry1 = new THREE.IcosahedronGeometry(13, 1);
    const icoMaterial1 = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const icosahedron1 = new THREE.Mesh(icoGeometry1, icoMaterial1);
    scene.add(icosahedron1);

    const icoGeometry2 = new THREE.IcosahedronGeometry(8, 1);
    const icoMaterial2 = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const icosahedron2 = new THREE.Mesh(icoGeometry2, icoMaterial2);
    icosahedron2.position.set(-20, 10, -10);
    scene.add(icosahedron2);

    // Ambient & Directional Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd97706, 2.4, 65);
    pointLight.position.set(18, 22, 22);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x818cf8, 2.4, 65);
    pointLight2.position.set(-18, -22, 22);
    scene.add(pointLight2);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.03 + targetX;
      particles.rotation.x = elapsedTime * 0.015 + targetY;

      icosahedron1.rotation.x = elapsedTime * 0.05;
      icosahedron1.rotation.y = elapsedTime * 0.07;

      icosahedron2.rotation.x = -elapsedTime * 0.04;
      icosahedron2.rotation.y = -elapsedTime * 0.06;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      icoGeometry1.dispose();
      icoMaterial1.dispose();
      icoGeometry2.dispose();
      icoMaterial2.dispose();
      renderer.dispose();
    };
  }, []);

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
    setSuccessToast(true);
    setTimeout(() => setSuccessToast(false), 4000);
  };

  return (
    <div className="min-h-screen text-slate-900 font-sans relative selection:bg-amber-500 selection:text-white overflow-x-hidden animated-bg">
      {/* Animated light dual-tone gradient background + reveal animation styles */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          background: linear-gradient(120deg, #FFF3DC 0%, #FDE6C8 22%, #FBD9C4 40%, #F3D9F0 60%, #E4E3FB 78%, #FFF3DC 100%);
          background-size: 320% 320%;
          animation: gradientShift 16s ease infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fadeUp 0.8s ease both;
        }
        @keyframes floaty {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hover-lift {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 45px rgba(217,119,6,0.18);
        }
        .hover-tilt {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .hover-tilt:hover {
          transform: perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-6px);
          box-shadow: 0 18px 40px rgba(129,140,248,0.18);
        }
        .hover-glow {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 0 3px rgba(245,158,11,0.25), 0 12px 30px rgba(245,158,11,0.25);
          transform: translateY(-2px);
        }
        a, button {
          transition: color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        nav a {
          position: relative;
        }
        nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg,#d97706,#f472b6);
          transition: width 0.3s ease;
        }
        nav a:hover::after {
          width: 100%;
        }
        .logo-float {
          animation: floaty 5s ease-in-out infinite;
        }
        .card-anim {
          position: relative;
          overflow: hidden;
          animation: cardIn 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .card-anim::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 40%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.55), transparent);
          transform: skewX(-20deg);
          transition: left 0.7s ease;
          pointer-events: none;
          z-index: 1;
        }
        .card-anim:hover::before {
          left: 130%;
        }
        .icon-pop {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease, color 0.3s ease;
        }
        .card-anim:hover .icon-pop {
          transform: scale(1.15) rotate(-6deg);
        }
        .badge-pop {
          transition: transform 0.3s ease;
        }
        .card-anim:hover .badge-pop {
          transform: translateY(-2px) scale(1.05);
        }
      `}</style>

      {/* Interactive WebGL 3D Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-80" />

      {/* Delicate Ambient Mesh Glow Orbs (light, dual-tone) */}
      <div className="absolute top-0 left-1/4 w-[650px] h-[650px] bg-gradient-to-tr from-amber-200/40 via-rose-100/50 to-orange-100/30 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-10 w-[750px] h-[750px] bg-gradient-to-br from-indigo-100/40 via-rose-200/30 to-amber-100/40 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-gradient-to-r from-amber-100/40 to-rose-100/40 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Success Toast Notification */}
      {successToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 text-white shadow-2xl border border-amber-500/30 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium">Match request submitted successfully! Our dean will email you shortly.</span>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/70 border-b border-stone-300/60 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 font-bold text-xl text-white logo-float hover-glow">
              A
            </div>
            <span className="font-serif text-2xl tracking-tight bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent font-bold">
              Akademix
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-800">
            <a href="#subjects" className="hover:text-amber-700 transition-colors flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Subjects</a>
            <a href="#coaching" className="hover:text-amber-700 transition-colors flex items-center gap-1.5"><Award className="w-4 h-4" /> Coaching</a>
            <a href="#universities" className="hover:text-amber-700 transition-colors flex items-center gap-1.5"><Globe className="w-4 h-4" /> Universities</a>
            <a href="#mentoring" className="hover:text-amber-700 transition-colors flex items-center gap-1.5"><Users className="w-4 h-4" /> Mentoring</a>
            <a href="#careers" className="hover:text-amber-700 transition-colors flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> Careers</a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => { setSelectedProfessor('Consultation Session'); setModalOpen(true); }}
              className="text-sm font-semibold text-slate-800 hover:text-slate-950 px-4 py-2 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setSelectedProfessor('Professor Matching'); setModalOpen(true); }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 hover-glow"
            >
              Find Your Professor
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-stone-200/60"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 border-b border-stone-200 px-6 py-5 space-y-4 backdrop-blur-2xl shadow-xl">
            <a href="#subjects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-amber-700 font-semibold">Subjects</a>
            <a href="#coaching" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-amber-700 font-semibold">Coaching</a>
            <a href="#universities" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-amber-700 font-semibold">Universities</a>
            <a href="#mentoring" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-amber-700 font-semibold">Mentoring</a>
            <a href="#careers" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-amber-700 font-semibold">Careers</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
              className="w-full py-3 rounded-full bg-amber-500 text-white font-semibold text-sm shadow-lg"
            >
              Find Your Professor
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-16 pb-24 lg:pt-28 lg:pb-36 fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-amber-500/30 text-amber-800 text-xs sm:text-sm font-bold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
            Empowering 120,000+ Global Scholars & Researchers
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight max-w-5xl mx-auto leading-[1.1] mb-8 text-slate-900">
            Every subject, one world-class academic platform.
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            Connect directly with elite professors, Ivy League mentors, and structured academic guidance tailored to your exact milestone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <button 
              onClick={() => { setSelectedProfessor('General Inquiry'); setModalOpen(true); }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-base shadow-xl shadow-amber-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 hover-glow"
            >
              Find Your Professor <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#subjects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 hover:bg-white border border-stone-300 text-slate-900 font-bold text-base backdrop-blur-md shadow-sm transition-all duration-300 hover-lift"
            >
              Explore Subjects
            </a>
          </div>

          {/* Glassmorphic Quick-Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { label: 'Global Professors', value: '1,400+', icon: <GraduationCap className="w-8 h-8 text-amber-600" /> },
              { label: 'Universities Covered', value: '350+', icon: <Globe className="w-8 h-8 text-indigo-600" /> },
              { label: 'Success Rate', value: '98.4%', icon: <ShieldCheck className="w-8 h-8 text-emerald-600" /> },
              { label: 'Research Papers Guided', value: '4,500+', icon: <Lightbulb className="w-8 h-8 text-amber-500" /> }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 hover:border-amber-500/40 hover:bg-white transition-all duration-500 transform hover:-translate-y-1.5 shadow-xl shadow-stone-300/40 hover-tilt card-anim"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="mb-3 p-3 rounded-2xl bg-amber-500/10 w-fit icon-pop">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Steps */}
      <section className="relative z-10 py-24 border-t border-stone-300/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-3 block">Your Academic Journey</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-900">Designed for clarity, built for excellence.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Diagnostic Mapping', desc: 'We analyze your current academic standing, target universities, and knowledge gaps through our AI-assisted diagnostic.' },
              { step: '02', title: 'Professor Matching', desc: 'Paired with a dedicated subject expert who holds a PhD or advanced degree from a top-tier global institution.' },
              { step: '03', title: 'Milestone Mastery', desc: 'Structured 1-to-1 live sessions, rigorous assignment guidance, and portfolio refinement leading to guaranteed breakthroughs.' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative group p-8 rounded-3xl bg-white/90 border border-stone-300/70 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden shadow-lg hover-tilt card-anim"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm icon-pop">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section id="subjects" className="relative z-10 py-24 border-t border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">Explore Subjects</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Every subject, one platform.</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-white/95 p-1.5 rounded-2xl border border-stone-300 shadow-md">
              {['all', 'STEM', 'Humanities', 'Business & Law'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all capitalize ${
                    activeTab === tab 
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-stone-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-10 max-w-md relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-500" />
            <input 
              type="text" 
              placeholder="Search specific subject (e.g., Quantum Physics)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3.5 rounded-2xl bg-white/95 border border-stone-300 text-slate-900 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 transition-colors shadow-lg shadow-stone-300/40"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSubjects
              .filter(s => activeTab === 'all' || s.category === activeTab)
              .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((s) => (
                <div 
                  key={s.slug} 
                  onClick={() => { setSelectedProfessor(s.name); setModalOpen(true); }}
                  className="group relative p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-stone-300/70 hover:border-amber-500/50 hover:bg-white transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1.5 shadow-xl shadow-stone-300/40 hover-lift card-anim"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  <span className="text-xs px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 font-bold inline-block mb-4 border border-amber-500/20 badge-pop">
                    {s.category}
                  </span>
                  <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                    {s.name}
                    <ChevronRight className="w-5 h-5 text-stone-500 group-hover:text-amber-700 transform group-hover:translate-x-1.5 transition-all" />
                  </h3>
                  <p className="text-sm text-slate-700">Master core concepts, advanced problem sets, and guided research with top faculty.</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching */}
      <section id="coaching" className="relative z-10 py-24 border-t border-stone-300/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">Learn with Akademix</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 mb-4">Coaching, beyond the classroom.</h2>
            <p className="text-slate-700 text-sm sm:text-base">Comprehensive programs tailored to every stage of your academic career.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'School Coaching', desc: 'IB, AP, IGCSE & A-Levels mastery with distinction.' },
              { title: 'Entrance Preparation', desc: 'SAT, ACT, GRE, GMAT & LNAT elite test strategies.' },
              { title: 'University Subjects', desc: 'Rigorous collegiate tutoring for top-tier GPA.' },
              { title: 'Professional Courses', desc: 'Coding, Data Science, Financial Modeling & AI.' },
              { title: 'Skill Development', desc: 'Critical thinking, public speaking & academic writing.' },
              { title: 'Exam Preparation', desc: 'Timed mock tests, score analysis & weakness correction.' },
              { title: 'Research Support', desc: 'Co-authoring papers & journal publication assistance.' },
              { title: 'Career Preparation', desc: 'Resume building, networking & mentorship loops.' },
            ].map((coach, index) => (
              <div 
                key={index} 
                onClick={() => { setSelectedProfessor(coach.title); setModalOpen(true); }}
                className="group p-6 rounded-3xl bg-white/90 border border-stone-300/70 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-md hover-lift card-anim"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center font-bold mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm icon-pop">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-serif text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">{coach.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{coach.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs text-amber-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="relative z-10 py-24 border-t border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">Global Universities</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">Explore universities worldwide.</h2>
            </div>
            <button 
              onClick={() => { setSelectedProfessor('University Admissions Strategy'); setModalOpen(true); }}
              className="text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 self-start sm:self-auto"
            >
              View all admissions tracks <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((u) => (
              <div 
                key={u.id} 
                onClick={() => { setSelectedProfessor(u.name); setModalOpen(true); }}
                className="group p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-stone-300/70 hover:border-amber-500/50 hover:bg-white transition-all duration-300 cursor-pointer shadow-xl shadow-stone-300/40 relative overflow-hidden hover-tilt card-anim"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 border border-stone-300 flex items-center justify-center font-serif text-amber-700 text-lg shadow-inner icon-pop">
                    <Globe className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-bold">
                    {u.rank}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">{u.name}</h3>
                <p className="text-xs text-slate-600 mb-6 flex items-center gap-1.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {u.location}
                </p>
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-slate-700">
                  <span>Active Scholars: <strong className="text-slate-900">{u.students}</strong></span>
                  <span className="text-amber-700 font-bold group-hover:translate-x-1.5 transition-transform flex items-center gap-1">Connect <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring */}
      <section id="mentoring" className="relative z-10 py-24 border-t border-stone-300/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">One-to-One Mentoring</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 mb-4">Find a mentor for exactly where you are.</h2>
            <p className="text-slate-700 text-sm sm:text-base">No generalized advice. Only targeted mentorship from world authorities in your field.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {mentorCategories.map((m) => (
              <div 
                key={m.slug} 
                onClick={() => { setSelectedProfessor(m.name); setModalOpen(true); }}
                className="group p-6 rounded-3xl bg-white/90 border border-stone-300/70 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between hover-lift card-anim"
              >
                <div>
                  <h3 className="text-lg font-serif text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">{m.name}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{m.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => { setSelectedProfessor('General Mentoring Program'); setModalOpen(true); }}
            className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-xl hover-lift"
          >
            Find a Mentor Now
          </button>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="relative z-10 py-24 border-t border-stone-300/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-amber-50/60 to-white border border-stone-300/70 shadow-2xl relative overflow-hidden hover-tilt card-anim">
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">Assignment Guidance</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-6">Structured guidance, not shortcuts.</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                Get structured academic guidance, concept clarification, research direction and feedback to help you understand and complete your academic work independently with absolute confidence.
              </p>
              <button 
                onClick={() => { setSelectedProfessor('Assignment Guidance Track'); setModalOpen(true); }}
                className="px-6 py-3.5 rounded-full bg-amber-500 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-all flex items-center gap-2 hover-glow"
              >
                Request Academic Advisor <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="p-8 sm:p-12 rounded-3xl bg-white/90 backdrop-blur-xl border border-stone-300/70 shadow-2xl shadow-stone-300/40 hover-tilt card-anim">
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-2 block">Career Explorer</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-6">Chart your trajectory from classroom to industry.</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                Map your academic degree to high-growth career paths in tech, finance, biotech, and global policy with real-time feedback from hiring managers.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Quantitative Finance', 'AI Research Scientist', 'Biotech Venture Capital', 'Global Trade Attorney', 'Quantum Engineer'].map((career, i) => (
                  <span key={i} className="px-3.5 py-2 rounded-xl bg-stone-100 border border-stone-300 text-xs text-slate-800 font-bold shadow-sm hover-glow cursor-default">
                    {career}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 border-t border-stone-300/60 bg-gradient-to-b from-white/60 to-stone-100/60 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 mb-6">
            Tell us where you are. We'll help you find the way.
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of successful scholars who transformed their academic journey with Akademix.
          </p>
          <button 
            onClick={() => { setSelectedProfessor('Ultimate Matchmaker'); setModalOpen(true); }}
            className="px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-lg shadow-2xl shadow-amber-500/30 transform hover:-translate-y-1 transition-all hover-glow"
          >
            Find Your Professor Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-300 bg-white/80 py-12 text-slate-600 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-white shadow-md">A</div>
            <span className="font-serif text-slate-900 text-lg font-semibold">Akademix Global</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-slate-700 font-semibold">
            <a href="#subjects" className="hover:text-amber-700 transition-colors">Privacy Policy</a>
            <a href="#coaching" className="hover:text-amber-700 transition-colors">Terms of Service</a>
            <a href="#universities" className="hover:text-amber-700 transition-colors">Faculty Portal</a>
            <a href="#mentoring" className="hover:text-amber-700 transition-colors">Contact Support</a>
          </div>
          <div className="text-slate-500">
            © {new Date().getFullYear()} Akademix Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-lg p-8 rounded-3xl bg-white border border-stone-300 shadow-2xl">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-stone-100 text-slate-600 hover:text-slate-900 flex items-center justify-center text-sm transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold mb-1 block">Professor & Mentor Matching</span>
              <h3 className="font-serif text-2xl text-slate-900">Connect with {selectedProfessor || 'an Expert'}</h3>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Name</label>
                <input required type="text" placeholder="e.g. Alexander Vance" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Academic Email</label>
                <input required type="email" placeholder="e.g. alexander@university.edu" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Academic Level / Target Goal</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500">
                  <option>High School / IB / AP</option>
                  <option>Undergraduate Student</option>
                  <option>Graduate / PhD Candidate</option>
                  <option>Professional / Test Prep</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 transition-all mt-4 flex items-center justify-center gap-2"
              >
                Confirm Match Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
