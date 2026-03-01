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
  Activity,
  CheckCircle2,
  Terminal,
  Ticket,
  PenTool,
  GraduationCap,
  Camera,
  FileCode,
  Headset
} from 'lucide-react';
import avatarImg from './assets/image.jpg'
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Thông tin cá nhân lấy từ CV
  const personalInfo = {
    name: "Phạm Quốc Anh",
    role: "IT Helpdesk Specialist",
    bio: "Chuyên viên IT với nền tảng Kỹ thuật phần mềm vững chắc (ĐH Tôn Đức Thắng). Chuyên môn hóa trong việc hỗ trợ kỹ thuật từ xa (Remote Support), thiết kế hạ tầng mạng/CCTV và tự động hóa các tác vụ xử lý sự cố (Scripting). Mục tiêu ngắn hạn: Tối ưu hóa quy trình IT Helpdesk, hướng tới vị trí System Engineer.",
    email: "phquocanhtdtu@gmail.com",
    phone: "087 6810 602",
    location: "Quận Gò Vấp, TP. Hồ Chí Minh",
    github: "https://github.com/qa1602", 
    linkedin: "https://linkedin.com/in/qa1602", 
  };

  const skillGroups = [
    { 
      name: "IT Support & System", 
      icon: <Server className="text-blue-600" size={24} />,
      items: [
        "Hỗ trợ End-user (90% Remote Support)", 
        "Xử lý sự cố PC, Máy in, Máy chấm công", 
        "Viết Batch Script tự động hóa (Backup, Spooler...)", 
        "Active Directory & Cloud (Foundation)"
      ] 
    },
    { 
      name: "Networking & IoT", 
      icon: <Network className="text-blue-600" size={24} />,
      items: [
        "Thiết kế bản vẽ hạ tầng trên AutoCAD", 
        "Cấu hình thiết bị mạng Ruijie, NAT Port", 
        "Vận hành thiết bị IoT, truyền dữ liệu SFTP", 
        "Quản lý Ticket & SLA (hệ thống AMIS)"
      ] 
    },
    { 
      name: "Web & Testing", 
      icon: <PenTool className="text-blue-600" size={24} />,
      items: [
        "Manual Testing cho Website Products",
        "Quản trị nội dung WordPress CMS", 
        "Adobe Photoshop & Canva Pro", 
        "Figma (Basic UI/UX Design)"
      ] 
    }
  ];

  const certifications = [
    { name: "Cử nhân Kỹ thuật Phần mềm - ĐH Tôn Đức Thắng (GPA: 7.2)", status: "Education" },
    { name: "Google IT Support Professional (Coursera 2024)", status: "Certified" },
    { name: "TOEIC: 860/990", status: "Language" },
    { name: "Aptis ESOL: 173/200 (B2+)", status: "Language" }
  ];

  const projects = [
    {
      title: "Triển khai Hạ tầng Camera ZARA",
      description: "Phụ trách thiết kế và quy hoạch hạ tầng cho cửa hàng thời trang ZARA tại TTTM Hà Nội. Sử dụng AutoCAD để bố trí sơ đồ cho hơn 100 camera, hệ thống switch, vị trí tủ rack IT và hướng đi cáp tín hiệu tối ưu nhất.",
      tech: ["AutoCAD", "CCTV System", "Network Design"],
      icon: <Camera size={40} className="text-blue-400" />
    },
    {
      title: "Script Tự động hóa IT Helpdesk",
      description: "Ứng dụng tư duy Kỹ thuật phần mềm để phát triển các mã script (Batch .bat) giúp tự động hóa quá trình dò lỗi máy tính, sửa lỗi Print Spooler, dọn rác hệ thống, và tự động tạo Backup/Restore point nhanh chóng.",
      tech: ["Batch Script", "Automation", "Troubleshooting"],
      icon: <FileCode size={40} className="text-blue-400" />
    },
    {
      title: "Quản lý SLA & Hỗ trợ Khách hàng",
      description: "Điều phối và xử lý 15-20 ticket/tuần qua hệ thống AMIS. Hỗ trợ 20% cho nội bộ và 80% cho khách hàng ngoài (chủ yếu qua Remote). Trực tiếp làm việc với hãng nước ngoài bằng Tiếng Anh, duy trì tỉ lệ đáp ứng SLA luôn >90% trong ngày.",
      tech: ["SLA >90%", "AMIS Ticket", "Remote Support"],
      icon: <Headset size={40} className="text-blue-400" />
    }
  ];

  const experiences = [
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
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold flex items-center gap-2 text-blue-700 cursor-pointer" onClick={() => scrollTo('home')}>
            <Terminal size={24} className="animate-pulse" /> QA_PORTFOLIO
          </span>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-bold transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'}`}>
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-6 flex flex-col space-y-4 animate-in slide-in-from-top-full duration-300">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left font-bold text-slate-600">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
              Sẵn sàng làm việc
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">IT Helpdesk</span> <br />
              Specialist
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
              Xin chào, tôi là <strong>{personalInfo.name}</strong>. {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => scrollTo('contact')} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all">
                Liên hệ ngay
              </button>
              
              {/* Nút Tải Hồ Sơ Năng Lực (Đã được chuyển thành thẻ <a> để download) */}
              <a 
                href="/CV_PhamQuocAnh.pdf" 
                download="CV_PhamQuocAnh_IT_Helpdesk.pdf"
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-black hover:border-blue-600 hover:-translate-y-1 transition-all flex items-center gap-2 inline-flex"
              >
                <Download size={20} /> Tải hồ sơ năng lực
              </a>

            </div>
          </div>
          <div className="w-full md:w-[450px] relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="absolute -inset-4 bg-blue-100 rounded-[3.5rem] -rotate-3"></div>
            <div className="relative aspect-[4/5] bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* Ảnh đại diện với tính năng dự phòng (fallback) */}
              <img 
                src={avatarImg}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=800&q=80'; }} 
                alt="Phạm Quốc Anh" 
                className="w-full h-full object-cover object-top" 
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase">SLA Target</p>
                    <p className="text-2xl font-black text-slate-900">&gt; 90%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-blue-600 uppercase">Remote Support</p>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Năng lực cốt lõi</h2>
            <p className="text-slate-500 font-medium">Kết hợp tư duy Lập trình, Quản trị mạng và Vận hành hệ thống</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-black mb-6">{group.name}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-semibold">
                      <CheckCircle2 size={16} className="text-blue-500 min-w-[16px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Row */}
          <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                  <GraduationCap size={32} /> Học vấn & Chứng chỉ
                </h3>
                <p className="text-blue-100">Bằng cấp chuyên môn và năng lực ngoại ngữ.</p>
              </div>
              <div className="flex flex-wrap gap-3 max-w-2xl justify-end">
                {certifications.map((cert, i) => (
                  <div key={i} className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-black uppercase tracking-wider text-center">
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center">Hành trình sự nghiệp</h2>
          <div className="space-y-0 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 hidden md:block"></div>
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative mb-12 flex flex-col md:flex-row md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full md:-translate-x-1/2 shadow-[0_0_0_6px_rgba(37,99,235,0.1)] z-10 hidden md:block"></div>
                <div className="w-full md:w-1/2 p-4">
                  <div className={`p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-2xl font-black mt-2">{exp.role}</h3>
                    <p className="text-lg font-bold text-slate-400 mb-4">{exp.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Responsibilities Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-4">Dự án & Nhiệm vụ cốt lõi</h2>
              <p className="text-slate-500 font-medium">Những case study thực tế chứng minh năng lực kỹ thuật của tôi</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="mb-6 p-8 bg-slate-50 rounded-[2.5rem] flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 h-48">
                  <div className="group-hover:scale-125 group-hover:text-white text-blue-600 transition-all duration-500 transform">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black uppercase rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-10">
              <h2 className="text-5xl font-black">Kết nối với <br /> bộ phận IT</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Sẵn sàng giải quyết mọi sự cố kỹ thuật và đồng hành cùng sự phát triển hạ tầng CNTT của doanh nghiệp.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-tighter">Email</p>
                    <p className="text-xl font-bold">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-tighter">Số điện thoại</p>
                    <p className="text-xl font-bold">{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-tighter">Địa điểm</p>
                    <p className="text-xl font-bold">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-2xl">
              <h4 className="text-xl font-black mb-8">Gửi yêu cầu nhanh (WIP)</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500">Họ và tên</label>
                    <input type="text" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-500">Email</label>
                    <input type="email" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-500">Mô tả sự cố / yêu cầu</label>
                  <textarea rows="4" className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all"></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-900/40 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                  Gửi ticket ngay <ChevronRight size={20} />
                </button>
              </form>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium">
            <p>© 2026 {personalInfo.name}. Tech Solutions & Support.</p>
            <div className="flex gap-8">
              <a href={personalInfo.linkedin} className="hover:text-white transition-colors flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={personalInfo.github} className="hover:text-white transition-colors flex items-center gap-2">
                <Github size={18} /> Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;