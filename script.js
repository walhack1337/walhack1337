(() => {
  const menuButton=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  const navLinks=[...document.querySelectorAll('.main-nav a')];
  const backToTop=document.querySelector('.back-to-top');
  menuButton?.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));menuButton.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');});
  navLinks.forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
  const revealObserver=new IntersectionObserver((entries,observer)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach((el,index)=>{el.style.transitionDelay=`${Math.min(index%3,2)*90}ms`;revealObserver.observe(el);});
  const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}),{rootMargin:'-35% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
  window.addEventListener('scroll',()=>backToTop?.classList.toggle('visible',window.scrollY>600),{passive:true});
  backToTop?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  const translations={};
  const inline={
    'nav-home':['Home','الرئيسية'],'nav-about':['About & Team','عن الفريق'],'nav-projects':['Projects','المشاريع'],'nav-research':['Research','الأبحاث'],'nav-security-labs':['Security Labs','المختبرات الأمنية'],'nav-achievements':['CTF & Achievements','CTF والإنجازات'],'nav-contact':['Contact','تواصل'],'enter-lab':['Enter Lab','دخول المختبر'],
    'eyebrow':['CYBERSECURITY  ×  AI  ×  RESEARCH','الأمن السيبراني × الذكاء الاصطناعي × الأبحاث'],'hero-tagline':['We Research. We Build. We Secure.','نبحث. نبني. نحمي.'],'hero-description':['Cybersecurity research, offensive security, reverse engineering and intelligent tools.','أبحاث الأمن السيبراني، والأمن الهجومي، والهندسة العكسية، والأدوات الذكية.'],'explore-work':['Explore Our Work','استكشف أعمالنا'],'discover-team':['Discover the team','تعرّف على الفريق'],
    'terminal-1':['> Initializing security protocols...','> تهيئة بروتوكولات الأمن...'],'terminal-2':['> Exploring attack surfaces...','> استكشاف أسطح الهجوم...'],'terminal-3':['> Building next-gen tools...','> بناء أدوات الجيل القادم...'],'terminal-4':['> Welcome to WALHACK.','> أهلًا بك في WALHACK.'],
    'feature-research':['Cyber Research','الأبحاث السيبرانية'],'feature-research-sub':['Research, analysis & discovery','بحث وتحليل واكتشاف'],'feature-security-labs':['Security Labs','المختبرات الأمنية'],'feature-security-labs-sub':['Hands-on security testing & analysis','اختبارات وتحليلات أمنية عملية'],'feature-ctf':['CTF Achievements','إنجازات CTF'],'feature-ctf-sub':['Challenges, teamwork & results','تحديات وعمل جماعي ونتائج'],'feature-vuln':['Vulnerability Research','أبحاث الثغرات'],'feature-vuln-sub':['Analyze. Understand. Document.','حلّل. افهم. وثّق.'],'scroll':['—  SCROLL TO EXPLORE  —','—  مرّر لاستكشاف الموقع  —'],
    'about-label':['02 / WHO WE ARE','02 / من نحن'],'about-title':['Curiosity is our <em>attack surface.</em>','الفضول هو <em>نقطة انطلاقنا.</em>'],'about-intro':['WALHACK is a cybersecurity-focused team exploring systems, understanding weaknesses and building practical tools through research and experimentation.','WALHACK فريق يركّز على الأمن السيبراني، يستكشف الأنظمة ويفهم نقاط ضعفها ويبني أدوات عملية عبر البحث والتجربة.'],
    'projects-label':['03 / SELECTED WORK','03 / أعمال مختارة'],'projects-title':['Built in the <em>lab.</em>','صُنع داخل <em>المختبر.</em>'],'projects-intro':['A selection of tools and experiments. Completed work is separated from active development.','مجموعة من الأدوات والتجارب، مع توضيح الأعمال المكتملة وما يزال قيد التطوير.'],
    'research-label':['01 / KNOWLEDGE & DISCOVERY','01 / المعرفة والاكتشاف'],'research-title':['Research beyond the <em>surface.</em>','أبحاث تتجاوز <em>السطح.</em>'],'research-intro':['Technical reports and security investigations. Open any report to read the complete original research.','تقارير تقنية وتحقيقات أمنية. افتح أي بحث لقراءة التقرير الأصلي كاملًا.'],
    'security-labs-label':['03 / HANDS-ON SECURITY','03 / الأمن العملي'],'security-labs-title':['Test. Analyze. <em>Understand.</em>','اختبر. حلّل. <em>افهم.</em>'],'security-labs-intro':['Practical security labs, controlled experiments and hands-on technical investigations carried out by the team.','مختبرات أمنية عملية وتجارب مضبوطة وتحقيقات تقنية ينفذها الفريق.'],'achievements-label':['05 / PROOF OF WORK','05 / سجل الإنجاز'],'achievements-title':['Challenges make us <em>sharper.</em>','التحديات تجعلنا <em>أكثر خبرة.</em>'],'contact-label':['06 / ESTABLISH CONNECTION','06 / ابدأ التواصل'],'contact-title':['Have a challenge?<br><em>Let’s talk.</em>','لديك تحدٍ؟<br><em>لنتحدث.</em>'],'footer-tagline':['We Research. We Build. We Secure.','نبحث. نبني. نحمي.']
  };
  Object.assign(inline, {
    'team-wallhack-description':['A software analyst and reverse engineer focused on malware analysis and closed-source software.','محلل برمجيات ومهندس عكسي متخصص في تحليل البرامج الضارة والبرمجيات مغلقة المصدر.'],
    'team-wallhack-leadership':['Leads WALHACK and served as team leader during the Black Hat CTF participation.','يقود WALHACK وتولى قيادة الفريق خلال المشاركة في Black Hat CTF.'],
    'team-wallhack-status':['ACTIVE • RESEARCHING','نشط • يواصل البحث'],
    'hero-research':['RESEARCH','الأبحاث'],
    'hero-security-labs':['SECURITY LABS','المختبرات الأمنية'],
    'hero-projects':['PROJECTS','المشاريع'],
    'hero-achievements':['ACHIEVEMENTS','الإنجازات'],
    'detail-blackhat-team-result':['Team Vantablack1337 qualified for the finals. UserM and Wallhack participated as a team; Wallhack was the team leader.','تأهل فريق Vantablack1337 إلى النهائيات. شارك UserM وWallhack ضمن الفريق، وتولى Wallhack قيادته.'],
    'detail-back':['← BACK TO WALHACK','← العودة إلى WALHACK'],
    'detail-home':['RETURN TO HOME','العودة إلى الرئيسية'],
    'detail-open-repo':['OPEN PROJECT REPOSITORY','فتح مستودع المشروع']
  });
  try { const pageData=document.getElementById('pageTranslations'); if(pageData) Object.assign(inline,JSON.parse(pageData.textContent)); } catch(e) {}
  const langButton=document.getElementById('languageToggle');
  Object.assign(inline, {"about-panel-1-title": ["Offensive Security", "الأمن الهجومي"], "about-panel-1-text": ["We study how systems fail, examine attack surfaces and develop practical security skills in controlled environments.", "ندرس كيف تفشل الأنظمة، ونفحص أسطح الهجوم، ونطوّر مهارات أمنية عملية ضمن بيئات مضبوطة."], "about-panel-2-title": ["Reverse Engineering", "الهندسة العكسية"], "about-panel-2-text": ["Binary analysis, debugging and low-level investigation to understand program behavior and security boundaries.", "تحليل الملفات التنفيذية وتصحيح الأخطاء والفحص منخفض المستوى لفهم سلوك البرامج وحدود الأمان."], "about-panel-3-title": ["AI Development", "تطوير الذكاء الاصطناعي"], "about-panel-3-text": ["Building AI-assisted security workflows, agent architectures and tools that support research and analysis.", "بناء مسارات عمل أمنية مدعومة بالذكاء الاصطناعي ومعماريات وكلاء وأدوات تدعم البحث والتحليل."], "team-label": ["THE PEOPLE BEHIND THE WORK", "الأشخاص وراء الأعمال"], "team-title": ["Two minds. <em>One lab.</em>", "عقلان. <em>مختبر واحد.</em>"], "team-wallhack-role": ["Software Analyst & Reverse Engineer", "محلل برمجيات ومهندس عكسي"], "team-wallhack-text": ["A software analyst and reverse engineer focused on malware analysis and closed-source software.", "محلل برمجيات ومهندس عكسي متخصص في تحليل البرامج الضارة والبرمجيات مغلقة المصدر."], "team-userm-role": ["Team Member", "عضو الفريق"], "team-userm-text": ["Builds AI-assisted security tools and documents hands-on research and engineering work.", "يطوّر أدوات أمنية مدعومة بالذكاء الاصطناعي ويوثّق التجارب البحثية والهندسية العملية."], "project-ctf-status": ["PRACTICALLY USED", "استُخدم عمليًا"], "project-ctf-text": ["An AI-assisted CTF project built to support challenge solving and security workflows. Used in a team competition context and contributed to capturing two flags.", "مشروع CTF مدعوم بالذكاء الاصطناعي لمساندة تحليل التحديات ومسارات العمل الأمنية. استُخدم ضمن مشاركة جماعية وساهم في التقاط علمين."], "view-project": ["View full project ", "عرض تفاصيل المشروع "], "project-agent-status": ["IN DEVELOPMENT", "قيد التطوير"], "project-agent-text": ["An agent architecture for scoped security workflows, policy enforcement, tool execution, evidence verification and reporting.", "معمارية وكيل لمسارات أمنية محددة النطاق، وتطبيق السياسات، وتنفيذ الأدوات، والتحقق من الأدلة، وإعداد التقارير."], "view-development": ["View development details ", "عرض تفاصيل التطوير "], "project-re-status": ["PRACTICAL STUDY", "دراسة عملية"], "project-re-text": ["Hands-on learning and experimentation in binary analysis, debugging, heap behavior and memory-safety concepts.", "تعلّم وتجارب عملية في تحليل الملفات التنفيذية وتصحيح الأخطاء وسلوك Heap ومفاهيم سلامة الذاكرة."], "view-details": ["View full details ", "عرض التفاصيل كاملة "], "read-research": ["Read full research ", "قراءة البحث كاملًا "], "research-malware-label": ["MALWARE FORENSICS", "التحليل الجنائي للبرمجيات الخبيثة"], "research-hitv-label": ["REVERSE ENGINEERING", "الهندسة العكسية"], "research-silicon-label": ["SILICON REVERSE ENGINEERING", "الهندسة العكسية للعتاد"], "achievement-intro": ["Team milestones and competition experience, presented with clear and accurate context.", "محطات الفريق وخبرته في المنافسات، مع عرض السياق بدقة ووضوح."], "achievement-blackhat-title": ["Black Hat CTF", "Black Hat CTF"], "achievement-blackhat-text": ["qualified for the finals. CTF-BRAIN supported the team’s work and helped capture two flags.", "تأهل الفريق للنهائيات. دعم CTF-BRAIN عمل الفريق وساهم في التقاط علمين."], "achievement-flagyard-text": ["16 challenges across mixed categories • Experienced badge.", "16 تحديًا من فئات متنوعة • شارة Experienced."], "achievement-view": ["View full achievement ", "عرض تفاصيل الإنجاز "], "contact-intro": ["For collaboration, research discussions and project inquiries.", "للتعاون والنقاشات البحثية والاستفسارات حول المشاريع."], "github-link": ["Explore our GitHub ", "استكشف GitHub الخاص بنا "], "github-caption": ["Public project repository", "مستودع المشروع العام"]});
  Object.assign(inline, {
    "explore-work": ["Explore Our Work <span class=\"button-arrow\" aria-hidden=\"true\">❯</span>", "استكشف أعمالنا <span class=\"button-arrow\" aria-hidden=\"true\">❯</span>"],
    "discover-team": ["Discover the team <span class=\"button-arrow\" aria-hidden=\"true\">❯</span>", "تعرّف على الفريق <span class=\"button-arrow\" aria-hidden=\"true\">❯</span>"],
    "about-label": ["01 / WHO WE ARE", "01 / من نحن"],
    "research-label": ["02 / KNOWLEDGE & DISCOVERY", "02 / المعرفة والاكتشاف"],
    "projects-label": ["04 / SELECTED WORK", "04 / أعمال مختارة"],
    "security-labs-label": ["03 / HANDS-ON SECURITY", "03 / الأمن العملي"],
    "team-userm-role": ["Security Researcher · Team Member", "باحثة أمن سيبراني · عضو الفريق"],
    "team-userm-text": ["Focuses on reverse engineering, web application penetration testing and exploit development, alongside building AI-assisted security tools.", "تركّز على الهندسة العكسية واختبار اختراق تطبيقات الويب وتطوير الاستغلالات، إلى جانب بناء أدوات أمنية مدعومة بالذكاء الاصطناعي."],
    "team-userm-expertise-label": ["TECHNICAL FOCUS", "مجالات التركيز التقني"],
    "skill-re": ["Reverse Engineering", "الهندسة العكسية"],
    "skill-web": ["Web Application Pentesting", "اختبار اختراق تطبيقات الويب"],
    "skill-exploit": ["Exploit Development", "تطوير الاستغلالات"],
    "skill-research": ["Security Research", "البحث الأمني"], "skill-ai-security": ["AI-Assisted Security Tool Development", "تطوير أدوات أمنية مدعومة بالذكاء الاصطناعي"]
  });

  Object.assign(inline, {
    "team-wallhack-expertise-label": ["AREAS OF EXPERTISE", "مجالات الخبرة"],
    "team-mission-label": ["MISSION", "المهمة"],
    "team-wallhack-mission": ["Deeply understand software internals, discover vulnerabilities ahead of others, and share knowledge with the security community professionally and systematically.", "فهم عميق للبرمجيات من الداخل، واكتشاف الثغرات، ومشاركة المعرفة مع مجتمع الأمان السيبراني بطريقة احترافية ومنظمة."],
    "hub-label": ["02 / EXPLORE WALHACK", "02 / استكشف WALHACK"],
    "hub-title": ["Explore our <em>domains.</em>", "استكشف <em>مجالاتنا.</em>"],
    "hub-intro": ["Four dedicated spaces for our research, practical labs, engineering projects and achievements.", "أربعة أقسام مستقلة لأبحاثنا ومختبراتنا العملية ومشاريعنا وإنجازاتنا."],
    "hub-research-title": ["RESEARCH", "الأبحاث"],
    "hub-research-text": ["Security research, technical reports and investigations.", "الأبحاث الأمنية والتقارير التقنية والتحقيقات."],
    "hub-labs-title": ["SECURITY LABS", "المختبرات الأمنية"],
    "hub-labs-text": ["Hands-on experiments, reverse engineering and security testing.", "التجارب العملية والهندسة العكسية والاختبارات الأمنية."],
    "hub-projects-title": ["PROJECTS", "المشاريع"],
    "hub-projects-text": ["Tools and software projects built and developed by the team.", "الأدوات والمشاريع البرمجية التي يبنيها الفريق ويطورها."],
    "hub-achievements-title": ["ACHIEVEMENTS", "الإنجازات"],
    "hub-achievements-text": ["Competition results, milestones and demonstrated work.", "نتائج المنافسات والمحطات والأعمال المثبتة."],
    "hub-explore": ["EXPLORE <b></b>", "استكشف <b></b>"],
    "contact-us-button": ["Contact Us ❯", "تواصل معنا ❯"],
    "contact-page-label": ["ESTABLISH CONNECTION", "ابدأ التواصل"],
    "contact-page-title": ["CONTACT <em>WALHACK</em>", "تواصل مع <em>WALHACK</em>"],
    "contact-page-subtitle": ["REVERSE ENGINEERING | EXPLOITATION", "الهندسة العكسية | الاستغلال"],
    "contact-email-label": ["E-MAIL", "البريد الإلكتروني"],
    "contact-telegram-label": ["TELEGRAM", "تيليجرام"],
    "contact-discord-label": ["DISCORD", "ديسكورد"],
    "contact-copy": ["COPY", "نسخ"],
    "contact-copied": ["COPIED", "تم النسخ"]
  });

  function setLanguage(lang){const ar=lang==='ar';document.documentElement.lang=lang;document.documentElement.dir=ar?'rtl':'ltr';document.querySelectorAll('[data-i18n]').forEach(el=>{const pair=inline[el.dataset.i18n];if(pair)el.innerHTML=pair[ar?1:0];});if(langButton){langButton.textContent=ar?'EN':'AR';langButton.setAttribute('aria-label',ar?'Switch to English':'Switch to Arabic');}try{localStorage.setItem('walhack-language',lang);}catch(e){}}
  let saved='en';try{saved=localStorage.getItem('walhack-language')||'en';}catch(e){}setLanguage(saved);
  langButton?.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'ar':'en'));
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
})();
