import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  Phone,
  MapPin,
  Download,
  Server,
  Network,
  CheckCircle2,
  Terminal,
  PenTool,
  GraduationCap,
  Camera,
  FileCode,
  Headset,
  Loader2,
  CheckCircle,
  Globe
} from 'lucide-react';
import avatarImg from './assets/image.jpg'
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  const [lang, setLang] = useState('vi'); // 'vi' or 'en'

  const avatarSrc = {avatarImg}

  const content = {
    vi: {
      nav: [
        { id: 'home', label: 'Trang chủ' },
        { id: 'skills', label: 'Kỹ năng' },
        { id: 'projects', label: 'Dự án' },
        { id: 'experience', label: 'Kinh nghiệm' },
        { id: 'contact', label: 'Liên hệ' }
      ],
      hero: {
        ready: "Sẵn sàng làm việc",
        role1: "IT Helpdesk",
        role2: "Specialist",
        greeting: "Xin chào, tôi là",
        bio: "Chuyên viên IT với nền tảng Kỹ thuật phần mềm vững chắc (ĐH Tôn Đức Thắng). Chuyên môn hóa trong việc hỗ trợ kỹ thuật từ xa (Remote Support), thiết kế hạ tầng mạng/CCTV và tự động hóa các tác vụ xử lý sự cố (Scripting). Mục tiêu ngắn hạn: Tối ưu hóa quy trình IT Helpdesk, hướng tới vị trí System Engineer.",
        contactBtn: "Liên hệ ngay",
        downloadBtn: "Tải hồ sơ năng lực"
      },
      stats: {
        target: "SLA Target",
        remote: "Remote"
      },
      skills: {
        title: "Năng lực cốt lõi",
        subtitle: "Kết hợp tư duy Lập trình, Quản trị mạng và Vận hành hệ thống",
        eduTitle: "Học vấn & Chứng chỉ",
        eduSubtitle: "Nền tảng kiến thức vững chắc làm cơ sở để tiếp cận nhanh các công nghệ và quy trình mới.",
        groups: [
          { 
            name: "IT Support & System", 
            items: [
              "Hỗ trợ End-user (90% Remote Support)", 
              "Xử lý sự cố PC, Máy in, Máy chấm công", 
              "Viết Batch Script tự động hóa (Backup, Spooler...)", 
              "Active Directory & Cloud (Foundation)"
            ] 
          },
          { 
            name: "Networking & IoT", 
            items: [
              "Thiết kế bản vẽ hạ tầng trên AutoCAD", 
              "Cấu hình thiết bị mạng Ruijie, NAT Port", 
              "Vận hành thiết bị IoT, truyền dữ liệu SFTP", 
              "Quản lý Ticket & SLA (hệ thống AMIS)"
            ] 
          },
          { 
            name: "Web & Testing", 
            items: [
              "Manual Testing cho Website Products",
              "Quản trị nội dung WordPress CMS", 
              "Adobe Photoshop & Canva Pro", 
              "Figma (Basic UI/UX Design)"
            ] 
          }
        ],
        certs: [
          "Cử nhân Kỹ thuật Phần mềm - ĐH Tôn Đức Thắng (GPA: 7.2)",
          "Google IT Support Professional (Coursera 2024)",
          "TOEIC: 860/990",
          "Aptis ESOL: 173/200 (B2+)"
        ]
      },
      projects: {
        title: "Dự án & Case Study",
        subtitle: "Những nhiệm vụ thực tế chứng minh năng lực kỹ thuật và giải quyết vấn đề",
        items: [
          {
            title: "Triển khai Hạ tầng Camera ZARA",
            description: "Phụ trách thiết kế và quy hoạch hạ tầng cho cửa hàng thời trang ZARA tại TTTM Hà Nội. Sử dụng AutoCAD để bố trí sơ đồ cho hơn 100 camera, hệ thống switch, vị trí tủ rack IT và hướng đi cáp tín hiệu tối ưu nhất.",
            tech: ["AutoCAD", "CCTV System", "Network Design"]
          },
          {
            title: "Script Tự động hóa IT Helpdesk",
            description: "Ứng dụng tư duy Kỹ thuật phần mềm để phát triển các mã script (Batch .bat) giúp tự động hóa quá trình dò lỗi máy tính, sửa lỗi Print Spooler, dọn rác hệ thống, và tự động tạo Backup/Restore point nhanh chóng.",
            tech: ["Batch Script", "Automation", "Troubleshooting"]
          },
          {
            title: "Quản lý SLA & Hỗ trợ Khách hàng",
            description: "Điều phối và xử lý 15-20 ticket/tuần qua hệ thống AMIS. Hỗ trợ 20% cho nội bộ và 80% cho khách hàng ngoài (chủ yếu qua Remote). Trực tiếp làm việc với hãng nước ngoài bằng Tiếng Anh, duy trì tỉ lệ đáp ứng SLA luôn >90% trong ngày.",
            tech: ["SLA >90%", "AMIS Ticket", "Remote Support"]
          }
        ]
      },
      experience: {
        title: "Hành trình Sự nghiệp",
        subtitle: "Kinh nghiệm thực chiến từ môi trường doanh nghiệp",
        items: [
          {
            company: "CÔNG TY TNHH TMDV CÔNG NGHỆ SÁNG TẠO",
            role: "Technical Support",
            period: "Tháng 06/2025 - Hiện tại",
            desc: "Hỗ trợ 20% nội bộ và 80% khách hàng doanh nghiệp. Quản lý thiết bị (camera, máy tính, máy in). Cấu hình router Ruijie, NAT port. Giám sát hệ thống IoT đếm người (giao thức SFTP). Xử lý trung bình 15-20 ticket/tuần, đảm bảo SLA >90% trong ngày."
          },
          {
            company: "CÔNG TY TNHH CÔNG NGHỆ SỐ NAM PHƯƠNG",
            role: "IT Tester Intern",
            period: "Tháng 05/2024 - Tháng 09/2024",
            desc: "Thực hiện Manual Test cho các sản phẩm Website công nghệ mới. Lập báo cáo lỗi hệ thống chi tiết cho đội Dev và đề xuất các phương án tối ưu hóa trải nghiệm người dùng (End-user)."
          }
        ]
      },
      contact: {
        title1: "Kết nối với",
        title2: "bộ phận IT",
        desc: "Sẵn sàng giải quyết mọi sự cố kỹ thuật và đồng hành cùng sự phát triển hạ tầng CNTT của doanh nghiệp.",
        location: "Vị trí",
        formTitle: "Gửi Ticket Hỗ trợ",
        formName: "Họ và tên",
        formEmail: "Email",
        formDesc: "Mô tả sự cố / yêu cầu",
        formPlaceholderName: "Nguyễn Văn A",
        formPlaceholderDesc: "Ví dụ: Cần hỗ trợ cài đặt máy in tại phòng họp...",
        btnSubmit: "Gửi ticket ngay",
        btnProcessing: "Đang xử lý...",
        successTitle: "Đã ghi nhận yêu cầu!",
        successDesc: "Ticket của bạn đã được đẩy vào hệ thống. Mình sẽ liên hệ xử lý trong thời gian sớm nhất."
      }
    },
    en: {
      nav: [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' }
      ],
      hero: {
        ready: "Available for work",
        role1: "IT Helpdesk",
        role2: "Specialist",
        greeting: "Hello, I am",
        bio: "IT Specialist with a solid Software Engineering background (Ton Duc Thang University). Specialized in Remote Support, Network/CCTV infrastructure design, and troubleshooting automation (Scripting). Short-term goal: Optimize IT Helpdesk processes, aiming for a System Engineer position.",
        contactBtn: "Contact Me",
        downloadBtn: "Download Resume"
      },
      stats: {
        target: "SLA Target",
        remote: "Remote"
      },
      skills: {
        title: "Core Competencies",
        subtitle: "Combining Programming mindset, Network Administration, and System Operations",
        eduTitle: "Education & Certifications",
        eduSubtitle: "Solid knowledge foundation to quickly adapt to new technologies and processes.",
        groups: [
          { 
            name: "IT Support & System", 
            items: [
              "End-user Support (90% Remote Support)", 
              "Troubleshoot PCs, Printers, Timekeepers", 
              "Write Automation Batch Scripts (Backup, Spooler...)", 
              "Active Directory & Cloud (Foundation)"
            ] 
          },
          { 
            name: "Networking & IoT", 
            items: [
              "Infrastructure drawing design on AutoCAD", 
              "Configure Ruijie network devices, NAT Port", 
              "Operate IoT devices, SFTP data transmission", 
              "Manage Tickets & SLA (AMIS system)"
            ] 
          },
          { 
            name: "Web & Testing", 
            items: [
              "Manual Testing for Website Products",
              "WordPress CMS Content Administration", 
              "Adobe Photoshop & Canva Pro", 
              "Figma (Basic UI/UX Design)"
            ] 
          }
        ],
        certs: [
          "B.S. in Software Engineering - Ton Duc Thang Univ (GPA: 7.2)",
          "Google IT Support Professional (Coursera 2024)",
          "TOEIC: 860/990",
          "Aptis ESOL: 173/200 (B2+)"
        ]
      },
      projects: {
        title: "Projects & Case Studies",
        subtitle: "Practical tasks demonstrating technical and problem-solving skills",
        items: [
          {
            title: "ZARA CCTV Infrastructure",
            description: "In charge of designing and planning infrastructure for the ZARA fashion store in Hanoi Mall. Used AutoCAD to layout diagrams for over 100 cameras, switch systems, IT rack locations, and optimized signal cable routing.",
            tech: ["AutoCAD", "CCTV System", "Network Design"]
          },
          {
            title: "IT Helpdesk Automation Scripts",
            description: "Applied Software Engineering mindset to develop script codes (Batch .bat) that automate PC troubleshooting, fix Print Spooler errors, clear system cache, and quickly create auto Backup/Restore points.",
            tech: ["Batch Script", "Automation", "Troubleshooting"]
          },
          {
            title: "SLA Management & Support",
            description: "Coordinated and resolved 15-20 tickets/week via the AMIS system. Provided 20% internal support and 80% external client support (mostly Remote). Communicated directly with foreign vendors in English, maintaining a daily SLA compliance rate of >90%.",
            tech: ["SLA >90%", "AMIS Ticket", "Remote Support"]
          }
        ]
      },
      experience: {
        title: "Career Journey",
        subtitle: "Practical experience from corporate environments",
        items: [
          {
            company: "CONG TY TNHH TMDV CONG NGHE SANG TAO",
            role: "Technical Support",
            period: "Jun 2025 - Present",
            desc: "Supported 20% internal users and 80% corporate clients. Managed devices (CCTV, PCs, printers). Configured Ruijie routers, NAT ports. Monitored IoT systems (SFTP protocol). Resolved an average of 15-20 tickets/week, ensuring >90% daily SLA compliance."
          },
          {
            company: "CONG TY TNHH CONG NGHE SO NAM PHUONG",
            role: "IT Tester Intern",
            period: "May 2024 - Sep 2024",
            desc: "Conducted Manual Testing for newly developed technology websites. Created detailed system bug reports for the Dev team and proposed solutions to optimize the End-user experience."
          }
        ]
      },
      contact: {
        title1: "Connect with",
        title2: "IT Department",
        desc: "Ready to resolve all technical issues and accompany your business's IT infrastructure growth.",
        location: "Location",
        formTitle: "Submit Support Ticket",
        formName: "Full Name",
        formEmail: "Email",
        formDesc: "Issue / Request Description",
        formPlaceholderName: "John Doe",
        formPlaceholderDesc: "Example: Need help installing printer in the meeting room...",
        btnSubmit: "Submit Ticket",
        btnProcessing: "Processing...",
        successTitle: "Request Received!",
        successDesc: "Your ticket has been submitted to the system. I will contact you to resolve it as soon as possible."
      }
    }
  };

  const currentContent = content[lang];

  const personalInfo = {
    name: "Phạm Quốc Anh",
    email: "phquocanhtdtu@gmail.com",
    phone: "087 6810 602",
    location: lang === 'vi' ? "Quận Gò Vấp, TP. Hồ Chí Minh" : "Go Vap Dist, Ho Chi Minh City",
    github: "https://github.com/qa1602", 
    linkedin: "https://linkedin.com/in/qa1602", 
  };

  const skillIcons = [
    <Server className="text-blue-600" size={24} />,
    <Network className="text-blue-600" size={24} />,
    <PenTool className="text-blue-600" size={24} />
  ];

  const projectIcons = [
    <Camera size={24} className="currentColor" />,
    <FileCode size={24} className="currentColor" />,
    <Headset size={24} className="currentColor" />
  ];

  const projectImages = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800", // Hạ tầng / Camera
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", // Code / Scripting
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800"  // Support / Helpdesk
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of currentContent.nav) {
        const element = document.getElementById(item.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(item.id);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentContent.nav]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  const toggleLanguage = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span 
            className="text-xl font-bold flex items-center gap-2 text-blue-700 cursor-pointer group" 
            onClick={() => scrollTo('home')}
          >
            <Terminal size={24} className="group-hover:animate-pulse" /> QA_PORTFOLIO
          </span>
          <div className="hidden md:flex items-center space-x-8">
            {currentContent.nav.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-bold transition-all duration-300 hover:text-blue-600 relative ${activeSection === item.id ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-in fade-in zoom-in duration-300"></span>
                )}
              </button>
            ))}
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors border border-slate-200 hover:border-blue-200"
            >
              <Globe size={16} /> {lang === 'vi' ? 'EN' : 'VI'}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 text-xs font-bold text-slate-700"
            >
              <Globe size={14} /> {lang === 'vi' ? 'EN' : 'VI'}
            </button>
            <button className="p-2 text-slate-600 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            {currentContent.nav.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)} 
                className={`text-left font-bold text-lg ${activeSection === item.id ? 'text-blue-600' : 'text-slate-600'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
              {currentContent.hero.ready}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">{currentContent.hero.role1}</span> <br />
              {currentContent.hero.role2}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
              {currentContent.hero.greeting} <strong>{personalInfo.name}</strong>. {currentContent.hero.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollTo('contact')} 
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                {currentContent.hero.contactBtn}
              </button>
              
              <a 
                href="/CV_PhamQuocAnh.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                download="CV_PhamQuocAnh_IT_Helpdesk.pdf"
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" /> {currentContent.hero.downloadBtn}
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-[450px] relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-[3.5rem] -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <div className="relative aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src={avatarImg}
                alt="Phạm Quốc Anh" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{currentContent.stats.target}</p>
                    <p className="text-2xl font-black text-slate-900">&gt; 90%</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{currentContent.stats.remote}</p>
                    <p className="text-2xl font-black text-slate-900">90%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-black mb-4 text-slate-900">{currentContent.skills.title}</h2>
            <p className="text-slate-500 font-medium text-lg">{currentContent.skills.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.skills.groups.map((group, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)] transition-all duration-300">
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                  {React.cloneElement(skillIcons[idx], { className: "currentColor" })}
                </div>
                <h3 className="text-xl font-black mb-6 text-slate-900">{group.name}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-semibold leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-500 min-w-[18px] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Row */}
          <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 rounded-[2.5rem] text-white shadow-xl shadow-blue-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="max-w-md">
                <h3 className="text-2xl font-black mb-3 flex items-center gap-3">
                  <GraduationCap size={32} className="text-blue-200" /> {currentContent.skills.eduTitle}
                </h3>
                <p className="text-blue-100/80 font-medium leading-relaxed">{currentContent.skills.eduSubtitle}</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                {currentContent.skills.certs.map((cert, i) => (
                  <div key={i} className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-bold text-blue-50 hover:bg-white/20 transition-colors">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4 text-slate-900">{currentContent.projects.title}</h2>
            <p className="text-slate-500 font-medium text-lg">{currentContent.projects.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {currentContent.projects.items.map((project, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl bg-slate-100">
                  <img 
                    src={projectImages[idx]} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-blue-600 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {projectIcons[idx]}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 text-slate-900">{currentContent.experience.title}</h2>
            <p className="text-slate-500 font-medium">{currentContent.experience.subtitle}</p>
          </div>
          
          <div className="space-y-0 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-slate-200 md:-translate-x-1/2"></div>
            
            {currentContent.experience.items.map((exp, idx) => (
              <div key={idx} className={`relative mb-12 flex flex-col md:flex-row md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 md:translate-x-[calc(-50%-0.5px)] shadow-[0_0_0_6px_rgba(37,99,235,0.1)] z-10 top-6 md:top-auto"></div>
                
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <div className={`p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg hover:bg-white transition-all duration-300 relative ${idx % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-lg mb-4">{exp.period}</span>
                    <h3 className="text-2xl font-black mb-2 text-slate-900">{exp.role}</h3>
                    <p className="text-md font-bold text-slate-500 mb-4">{exp.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">{currentContent.contact.title1} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{currentContent.contact.title2}</span></h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  {currentContent.contact.desc}
                </p>
              </div>
              
              <div className="space-y-8">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-6 group cursor-pointer block">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{personalInfo.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-6 group cursor-pointer block">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Hotline (Zalo/Call)</p>
                    <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{personalInfo.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">{currentContent.contact.location}</p>
                    <p className="text-xl font-bold group-hover:text-blue-400 transition-colors">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              <h4 className="text-2xl font-black mb-8">{currentContent.contact.formTitle}</h4>
              
              {formState === 'success' ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h5 className="text-2xl font-bold mb-2">{currentContent.contact.successTitle}</h5>
                  <p className="text-slate-400">{currentContent.contact.successDesc}</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">{currentContent.contact.formName}</label>
                      <input required type="text" placeholder={currentContent.contact.formPlaceholderName} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">{currentContent.contact.formEmail}</label>
                      <input required type="email" placeholder="email@company.com" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-slate-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 tracking-wider">{currentContent.contact.formDesc}</label>
                    <textarea required rows="4" placeholder={currentContent.contact.formPlaceholderDesc} className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all resize-none placeholder:text-slate-600"></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <><Loader2 size={24} className="animate-spin" /> {currentContent.contact.btnProcessing}</>
                    ) : (
                      <>{currentContent.contact.btnSubmit} <ChevronRight size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-medium">
            <p>© {new Date().getFullYear()} {personalInfo.name}. Tech Solutions & Support.</p>
            <div className="flex gap-6">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg">
                <Linkedin size={20} /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2 p-2 hover:bg-white/5 rounded-lg">
                <Github size={20} /> <span className="hidden sm:inline">Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;