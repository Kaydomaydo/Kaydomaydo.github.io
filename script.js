// Emre's Station — PS3 XMB

// ─── Internationalisation ────────────────────────────────────────────────────
let lang = "en";

const TRANSLATIONS = {
  en: {
    // User-select screen
    switchUser:   "Switch User",
    whoUses:      "Who will use the PS4?",
    uiInfo1:      "You will be able to use all the previous user's devices.",
    uiInfo2:      "The previous user will not be logged out of the PS4.",
    newUser:      "New User",
    loggedIn:     "Logged In",
    enter:        "Enter",
    cancel:       "Cancel",
    // Guest prompt
    guestWelcome: "Welcome, Guest 👋",
    guestDesc:    "This is Emre's portfolio — feel free to look around. You'll be signed in as a visitor.",
    guestBtn:     "Continue as Guest",
    // Category labels
    catAbout:     "About",
    catProjects:  "Projects",
    catSkills:    "Skills",
    catResume:    "Resume",
    catContact:   "Contact",
    catExtra:     "Extra",
    // Sub-item labels (innerHTML — contains <small>)
    subBio:         `Bio<small>About me, in short</small>`,
    subFacts:       `Quick Facts<small>A few things to know</small>`,
    subInterests:   `Interests<small>What I'm into</small>`,
    subWax:         `Hepsi Emlak Pro<small>Featured · in development</small>`,
    subPortfolio:   `Olist Fraud Detection<small>Data analysis project</small>`,
    subMore:        `More on GitHub<small>External link</small>`,
    subLanguages:   `Languages<small>What I write code in</small>`,
    subOtherTools:  `Other Tools<small>The rest of the toolkit</small>`,
    subExperience:  `Experience<small>Work history</small>`,
    subEducation:   `Education<small>Where I studied</small>`,
    subDownload:    `Download CV<small>PDF · grab a copy</small>`,
    subEmail:       `Email<small>aydoganemre51@gmail.com</small>`,
    subLinkedIn:    `LinkedIn<small>Professional profile</small>`,
    subGitHub:      `GitHub<small>My code lives here</small>`,
    subWaxExtra:    `Plak<small>Music journal · live</small>`,
    // Bottom hints
    hintScroll: "Scroll left/right between categories",
    hintClick:  "Click a sub-item to open",
    hintEsc:    "Esc to close",
  },
  tr: {
    switchUser:   "Kullanıcı Değiştir",
    whoUses:      "PS4'ü kim kullanacak?",
    uiInfo1:      "Önceki kullanıcının tüm cihazlarını kullanabileceksiniz.",
    uiInfo2:      "Önceki kullanıcının PS4 oturumu kapatılmayacak.",
    newUser:      "Yeni Kullanıcı",
    loggedIn:     "Oturum Açık",
    enter:        "Giriş",
    cancel:       "İptal",
    guestWelcome: "Hoş geldin, Misafir 👋",
    guestDesc:    "Bu Emre'nin portföyü — dilediğin gibi gezebilirsin. Ziyaretçi olarak giriş yapılacak.",
    guestBtn:     "Misafir Olarak Devam Et",
    catAbout:     "Hakkımda",
    catProjects:  "Projeler",
    catSkills:    "Beceriler",
    catResume:    "Özgeçmiş",
    catContact:   "İletişim",
    catExtra:     "Ekstra",
    subBio:         `Biyografi<small>Kısaca ben</small>`,
    subFacts:       `Hızlı Bilgiler<small>Birkaç bilgi</small>`,
    subInterests:   `İlgi Alanları<small>Nelerle ilgileniyorum</small>`,
    subWax:         `Hepsi Emlak Pro<small>Öne çıkan · geliştiriliyor</small>`,
    subPortfolio:   `Olist Fraud Detection<small>Veri analizi projesi</small>`,
    subMore:        `GitHub'da Daha Fazlası<small>Dış bağlantı</small>`,
    subLanguages:   `Diller<small>Kod yazdığım diller</small>`,
    subOtherTools:  `Diğer Araçlar<small>Araç setinin geri kalanı</small>`,
    subExperience:  `Deneyim<small>İş geçmişi</small>`,
    subEducation:   `Eğitim<small>Okuduğum yerler</small>`,
    subDownload:    `CV İndir<small>PDF · bir kopyasını al</small>`,
    subEmail:       `E-posta<small>aydoganemre51@gmail.com</small>`,
    subLinkedIn:    `LinkedIn<small>Profesyonel profil</small>`,
    subGitHub:      `GitHub<small>Kodlarım burada</small>`,
    subWaxExtra:    `Plak<small>Müzik günlüğü · yayında</small>`,
    hintScroll: "Kategoriler arasında sola/sağa kaydır",
    hintClick:  "Açmak için bir alt öğeye tıkla",
    hintEsc:    "Kapatmak için Esc",
  },
};

// Content panel HTML per language
const CONTENT_TR = {
  about: {
    bio: {
      title: "Biyografi",
      sub: "Hakkımda · Giriş",
      html: `
        <h2>Merhaba, ben Emre Aydoğan</h2>
        <div class="panel-sub">Kısa bir tanıtım</div>
        <p>Web siteme hoş geldiniz. 2025 yılında Özyeğin Üniversitesi'nden Endüstri Mühendisi olarak mezun oldum (%50 burs).</p>
        <p>Üniversite öğrenci kulübünden AIESEC'te gönüllülüğe, ENERJISA'da yarı zamanlı çalışmaya ve 2 kısa dönem staja kadar çeşitli deneyimlerim oldu.</p>
        <p>Son olarak Workintech bünyesinde 6 aylık Veri Analizi ve Bilimi Stajyer programına katıldım.</p>
      `,
    },
    facts: {
      title: "Hızlı Bilgiler",
      sub: "Hakkımda · Profil",
      html: `
        <h2>Hızlı Bilgiler</h2>
        <div class="panel-sub">Hakkımda birkaç şey</div>
        <ul>
          <li>İstanbul, Türkiye'de yaşıyorum</li>
          <li>Aldığım eğitimle örtüşen yeni fırsatlar arıyorum</li>
          <li>Yan proje başlatmaktan büyük zevk alırım</li>
        </ul>
      `,
    },
    interests: {
      title: "İlgi Alanları",
      sub: "Hakkımda · Nelerle ilgileniyorum",
      html: `
        <h2>İlgi Alanları</h2>
        <div class="panel-sub">Zihnimi meşgul eden şeyler</div>
        <p>Veri analizi ve bilimi konusunda tutkulum; bu alanlarda sürekli öğrenmeye çalışıyorum. Gerçek dünya senaryolarında becerilerimi uygulayabileceğim projelerde çalışmaktan keyif alıyorum.</p>
        <p>Eski lisanslı bir basketbolcu olarak spora büyük ilgi duyuyor, aynı zamanda müzik dinlemeyi çok seviyorum.</p>
      `,
    },
  },
  projects: {
    wax: {
      title: "Hepsi Emlak Pro",
      sub: "Projeler · Öne Çıkan",
      html: `
        <h2>Hepsi Emlak Pro v2</h2>
        <div class="panel-sub">İkinci nesil proje</div>
        <p>Makine Öğrenmesi teknikleri kullanılarak geliştirilen gayrimenkul ilanları fiyat analiz aracı.</p>
      `,
    },
    portfolio: {
      title: "Olist Fraud Detection",
      sub: "Projeler · Veri",
      html: `
        <h2>Olist Fraud Detection</h2>
        <div class="panel-sub">PS3 XMB tarzı CV</div>
        <p>Müşteri davranışlarını analiz etmek amacıyla SQL ile veriler çıkarılıp Power BI ile görselleştirildi.</p>
      `,
    },
    more: {
      title: "GitHub'da Daha Fazlası",
      sub: "Projeler · Keşfet",
      html: `
        <h2>Daha fazla çalışma</h2>
        <div class="panel-sub">Dış bağlantılar</div>
        <p>Geri kalanını <a href="https://github.com/Kaydomaydo" target="_blank" rel="noopener noreferrer">GitHub</a> profilimde bulabilirsiniz.</p>
      `,
    },
  },
  skills: {
    languages: {
      title: "Diller",
      sub: "Beceriler · Programlama",
      html: `
        <h2>Diller</h2>
        <div class="panel-sub">Kod yazdıklarım</div>
        <div class="skill-grid">
          <div class="skill-pill">Java</div>
          <div class="skill-pill">Python</div>
          <div class="skill-pill">SQL</div>
          <div class="skill-pill">Microsoft Excel/VBA</div>
        </div>
      `,
    },
    frameworks: {
      title: "Diğer Araçlar",
      sub: "Görselleştirme · Araçlar",
      html: `
        <h2>Araçlar</h2>
        <div class="panel-sub">Kullandıklarım</div>
        <div class="skill-grid">
          <div class="skill-pill">Power BI</div>
          <div class="skill-pill">Microsoft Excel</div>
          <div class="skill-pill">Data Studio</div>
          <div class="skill-pill">Git</div>
          <div class="skill-pill">VS Code</div>
          <div class="skill-pill">Jupyter Notebook</div>
        </div>
      `,
    },
  },
  resume: {
    experience: {
      title: "Deneyim",
      sub: "Özgeçmiş · İş Geçmişi",
      html: `
        <h2>Deneyim</h2>
        <div class="panel-sub">Çalıştığım yerler</div>
        <ul>
          <li><strong>MT · ENERJISA</strong> — 10/2024–06/2025. ENERJISA Enter Yönetici Adayı programına seçildim.</li>
          <li><strong>Süreç İyileştirme Stajyeri · TI Automotive</strong> — 07/2024–08/2024. Kısa dönem staj.</li>
          <li><strong>Takım Lideri ve Üyesi · AIESEC</strong> — 03/2023–12/2023. Gönüllülük kapsamında farklı pozisyonlarda görev yaptım.</li>
          <li><strong>Kalite Stajyeri · VALEO</strong> — 06/2023–07/2023. VALEO kısa dönem stajı.</li>
        </ul>
      `,
    },
    education: {
      title: "Eğitim",
      sub: "Özgeçmiş · Okul",
      html: `
        <h2>Eğitim</h2>
        <div class="panel-sub">Okuduğum yerler</div>
        <ul>
          <li><strong>Lisans</strong> — Özyeğin Üniversitesi, 2020–2025</li>
        </ul>
      `,
    },
    download: {
      title: "CV İndir",
      sub: "Özgeçmiş · PDF",
      html: `
        <h2>İndir</h2>
        <div class="panel-sub">PDF'yi al</div>
        <p>Daha fazla bilgi için CV'me buradan ulaşabilirsiniz.</p>
        <p><a href="emre_aydogan_cv.pdf" download>CV İndir (PDF)</a></p>
      `,
    },
  },
  contact: {
    email: {
      title: "E-posta",
      sub: "İletişim · Doğrudan",
      html: `
        <h2>E-posta</h2>
        <div class="panel-sub">En hızlı yanıt</div>
        <p><a href="mailto:aydoganemre51@gmail.com">aydoganemre51@gmail.com</a></p>
      `,
    },
    linkedin: {
      title: "LinkedIn",
      sub: "İletişim · Profesyonel",
      html: `
        <h2>LinkedIn</h2>
        <div class="panel-sub">İş için</div>
        <p><a href="https://www.linkedin.com/in/emre-aydo%C4%9Fan-709459243/" target="_blank" rel="noopener noreferrer">LinkedIn profilimi görüntüle</a></p>
      `,
    },
    github: {
      title: "GitHub",
      sub: "İletişim · Kod",
      html: `
        <h2>GitHub</h2>
        <div class="panel-sub">Kodlarım burada</div>
        <p><a href="https://github.com/Kaydomaydo" target="_blank" rel="noopener noreferrer">GitHub profilimi görüntüle</a></p>
      `,
    },
  },
  blog: {
    latest: {
      title: "Plak",
      sub: "Ekstra · Yan Proje",
      html: `
        <h2>Plak — Müzik Günlüğü</h2>
        <div class="panel-sub">Yan proje · yayında</div>
        <p>Albümleri kaydedip puanladığın, yorumladığın ve arkadaşlarının ne dinlediğini takip ettiğin bir müzik günlüğü uygulaması — müzik için Letterboxd gibi. React ve Supabase ile geliştirildi.</p>
        <p><a href="https://kaydomaydo.github.io/plak/" target="_blank" rel="noopener noreferrer">Plak'ı Ziyaret Et</a></p>
      `,
    },
  },
};

function applyLang(newLang) {
  lang = newLang;
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById("langToggle").textContent = lang === "en" ? "TR" : "EN";
  document.documentElement.lang = lang;
}

// Sub-item content. Add or edit freely.
const CONTENT = {
  about: {
    bio: {
      title: "Bio",
      sub: "About · Introduction",
      html: `
        <h2>Hi, I'm Emre Aydoğan</h2>
        <div class="panel-sub">A short introduction</div>
        <p>Welcome to my website. I was graduated in 2025 from Özyeğin University as an Industrial Engineer (%50 scholarship).</p>
        <p>I've had multiple working experince from university student club to volunteering in AIESEC, part-time working with ENERJISA and also had 2 short-term internships.</p>
        <p>At last I've enrolled into a 6 months long Data Analysis and Science Trainee program within Workintech.</p>
      `,
    },
    facts: {
      title: "Quick Facts",
      sub: "About · Profile data",
      html: `
        <h2>Quick Facts</h2>
        <div class="panel-sub">A few things about me</div>
        <ul>
          <li>Based in Istanbul, Turkey</li>
          <li>Currently looking for new opportunities with align with education that I've had.</li>
          <li>Perpetual side-project starter</li>
        </ul>
      `,
    },
    interests: {
      title: "Interests",
      sub: "About · What I'm into",
      html: `
        <h2>Interests</h2>
        <div class="panel-sub">Things that occupy my brain</div>
        <p>I'm passionate about data analysis and science, and I'm always eager to learn more about these fields. I enjoy working on projects that allow me to apply my skills and knowledge in real-world scenarios.</p>
        <p>I am very much into sports as a previous licensed basketball player and like to listening to music.</p>
      `,
    },
  },
  projects: {
    wax: {
      title: "Hepsi Emlak Pro",
      sub: "Projects · Featured",
      html: `
        <h2>Hepsi Emlak Pro v2</h2>
        <div class="panel-sub">A second-gen project</div>
        <p>Price analysis tool for real estate listings with the use of Machine Learning techniques.</p>
        `,
    },
    portfolio: {
      title: "Olist Fraud Detection",
      sub: "Projects · Meta",
      html: `
        <h2>Olist Fraud Detection</h2>
        <div class="panel-sub">PS3 XMB-style CV</div>
        <p>Extracted and worked on the data with the use of SQL to then apply Power BI for visualization for analysing customer behaviour.</p>
      `,
    },
    more: {
      title: "More on GitHub",
      sub: "Projects · Browse",
      html: `
        <h2>More work</h2>
        <div class="panel-sub">External links</div>
        <p>Find the rest on my <a href="https://github.com/Kaydomaydo" target="_blank" rel="noopener noreferrer">GitHub</a> — replace with your real profile link.</p>
      `,
    },
  },
  skills: {
    languages: {
      title: "Languages",
      sub: "Skills · Programming",
      html: `
        <h2>Languages</h2>
        <div class="panel-sub">What I write</div>
        <div class="skill-grid">
          <div class="skill-pill">Java</div>
          <div class="skill-pill">Python</div>
          <div class="skill-pill">SQL</div>
          <div class="skill-pill">Microsoft Excel/VBA</div>
          </div>
      `,
    },
    frameworks: {
      title: "Other Tools",
      sub: "Visualizations · Tooling",
      html: `
        <h2>Frameworks &amp; Tools</h2>
        <div class="panel-sub">What I build with</div>
        <div class="skill-grid">
          <div class="skill-pill">Power BI</div>
          <div class="skill-pill">Microsoft Excel</div>
          <div class="skill-pill">Data Studio</div>
          <div class="skill-pill">Git</div>
          <div class="skill-pill">VS Code</div>
          <div class="skill-pill">Jupyter Notebook</div>
        </div>
      `,
    },
  },
  resume: {
    experience: {
      title: "Experience",
      sub: "Resume · Work history",
      html: `
        <h2>Experience</h2>
        <div class="panel-sub">Where I've been</div>
        <ul>
          <li><strong>MT · ENERJISA</strong> — 10/2024–06/2025. I was selected for the Enter Management Trainee program at ENERJISA.</li>
          <li><strong>Process Improvement Intern · TI Automotive</strong> — 07/2024–08/2024. Short-Term Internship.</li>
          <li><strong>Team Leader and Team Member · AIESEC</strong> — 03/2023–12/2023. Worked in volunteering and rotated in different positions.</li>
          <li><strong>Quality Intern · VALEO</strong> — 06/2023–07/2023. Short-Term Internship.</li>
        </ul>
      `,
    },
    education: {
      title: "Education",
      sub: "Resume · Schooling",
      html: `
        <h2>Education</h2>
        <div class="panel-sub">Studies</div>
        <ul>
          <li><strong>Bachelor's Degree</strong> — Ozyegin University, 2020-2025</li>
        </ul>
      `,
    },
    download: {
      title: "Download CV",
      sub: "Resume · PDF",
      html: `
        <h2>Download</h2>
        <div class="panel-sub">Grab the PDF</div>
        <p>For more information you can access my full CV from here.</p>
        <p><a href="emre_aydogan_cv.pdf" download>Download CV (PDF)</a></p>
      `,
    },
  },
  contact: {
    email: {
      title: "Email",
      sub: "Contact · Direct",
      html: `
        <h2>Email</h2>
        <div class="panel-sub">Fastest reply</div>
        <p><a href="mailto:aydoganemre51@gmail.com">aydoganemre51@gmail.com</a></p>
      `,
    },
    linkedin: {
      title: "LinkedIn",
      sub: "Contact · Professional",
      html: `
        <h2>LinkedIn</h2>
        <div class="panel-sub">For work stuff</div>
        <p><a href="https://www.linkedin.com/in/emre-aydo%C4%9Fan-709459243/" target="_blank" rel="noopener noreferrer">View my LinkedIn profile</a></p>
      `,
    },
    github: {
      title: "GitHub",
      sub: "Contact · Code",
      html: `
        <h2>GitHub</h2>
        <div class="panel-sub">My code lives here</div>
        <p><a href="https://github.com/Kaydomaydo" target="_blank" rel="noopener noreferrer">View my GitHub profile</a></p>
      `,
    },
  },
  blog: {
    latest: {
      title: "Plak",
      sub: "Extra · Side Project",
      html: `
        <h2>Plak — Music Journal</h2>
        <div class="panel-sub">Side project · live</div>
        <p>A music journaling app — log albums, rate them, and follow what friends are listening to (think Letterboxd for music). Built with React and Supabase.</p>
        <p><a href="https://kaydomaydo.github.io/plak/" target="_blank" rel="noopener noreferrer">Visit Plak</a></p>
      `,
    },
  },
};

const bootEl = document.getElementById("boot");
const userSelectEl = document.getElementById("userSelect");
const guestPromptEl = document.getElementById("guestPrompt");
const guestContinueBtn = document.getElementById("guestContinue");
const xmbEl = document.getElementById("xmb");
const barEl = document.getElementById("xmbBar");
const cats = Array.from(document.querySelectorAll(".xmb-cat"));
const panelEl = document.getElementById("xmbPanel");
const panelContent = document.getElementById("panelContent");
const panelClose = document.getElementById("panelClose");
const clockEl = document.getElementById("clock");
const dateEl = document.getElementById("date");
const userNameEl = document.querySelector(".xmb-user");

let activeIndex = cats.findIndex(c => c.classList.contains("xmb-cat-active"));
if (activeIndex < 0) activeIndex = 0;

// Boot → User select → XMB
setTimeout(() => {
  bootEl.classList.add("fade-out");
  userSelectEl.classList.remove("hidden");
  // Force a frame so the transition kicks in
  requestAnimationFrame(() => userSelectEl.classList.add("show"));
  setTimeout(() => bootEl.remove(), 600);
}, 2500);

function enterXmb(displayName) {
  if (userNameEl && displayName) userNameEl.textContent = displayName;
  userSelectEl.classList.add("fade-out");
  xmbEl.classList.remove("hidden");
  requestAnimationFrame(() => xmbEl.classList.add("show"));
  setTimeout(() => {
    userSelectEl.remove();
    setActive(activeIndex);
  }, 500);
}

document.querySelectorAll(".us-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const who = btn.dataset.user;
    if (who === "emre") {
      enterXmb("Emre's Station");
    } else {
      // New user → show guest prompt
      guestPromptEl.classList.remove("hidden");
      requestAnimationFrame(() => guestPromptEl.classList.add("show"));
    }
  });
});

guestContinueBtn.addEventListener("click", () => {
  guestPromptEl.classList.remove("show");
  setTimeout(() => guestPromptEl.remove(), 300);
  enterXmb("Guest");
});

// ─── Animated XMB wave: dramatic curved ribbons drifting across screen ───
const wavePaths = [
  { el: document.getElementById("wavePath1"), amp: 110, freq: 0.0014, speed: 0.00010, phase: 0,    yBase: 620, thickness: 22 },
  { el: document.getElementById("wavePath2"), amp: 95,  freq: 0.0012, speed: 0.00014, phase: 1.7,  yBase: 680, thickness: 15 },
  { el: document.getElementById("wavePath3"), amp: 80,  freq: 0.0016, speed: 0.00019, phase: 3.2,  yBase: 740, thickness: 9  },
];
function buildWavePath(p, t) {
  const W = 1920;
  const top = [], bot = [];
  for (let x = 0; x <= W; x += 18) {
    const y = p.yBase + Math.sin(x * p.freq + t * p.speed + p.phase) * p.amp
                     + Math.sin(x * p.freq * 0.45 + t * p.speed * 0.7) * (p.amp * 0.35);
    top.push(`${x},${y - p.thickness}`);
    bot.push(`${x},${y + p.thickness}`);
  }
  return "M" + top.join(" L") + " L" + bot.reverse().join(" L") + " Z";
}
function animateWave(t) {
  for (const p of wavePaths) {
    if (p.el) p.el.setAttribute("d", buildWavePath(p, t));
  }
  requestAnimationFrame(animateWave);
}
requestAnimationFrame(animateWave);

// Clock + date
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  clockEl.textContent = `${hh}:${mm}`;
  const opts = { weekday: "short", day: "numeric", month: "short" };
  dateEl.textContent = now.toLocaleDateString(undefined, opts);
}
updateClock();
setInterval(updateClock, 30000);

// Activate a category — bar stays still; only the icon and sub list change
function setActive(i, fromUser) {
  if (i < 0) i = cats.length - 1;
  if (i >= cats.length) i = 0;
  cats.forEach((c, idx) => c.classList.toggle("xmb-cat-active", idx === i));
  activeIndex = i;
  // Auto-focus the first sub-item of the new category (matches real XMB)
  document.querySelectorAll(".xmb-sub li.focused").forEach(x => x.classList.remove("focused"));
  const firstSub = cats[i].querySelector(".xmb-sub li");
  if (firstSub) firstSub.classList.add("focused");
}

// Bar stays centered in the viewport, no sideways motion when switching categories.
function centerActive() { /* no-op — kept for compatibility */ }

// Click a category to focus it
cats.forEach((cat, i) => {
  cat.addEventListener("click", (e) => {
    // If they clicked an item inside the sub list, let that handler run
    if (e.target.closest(".xmb-sub li")) return;
    setActive(i, true);
  });
});

// Click a sub-item to open the inline panel
document.querySelectorAll(".xmb-sub li").forEach((li) => {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    const catEl = li.closest(".xmb-cat");
    const catKey = catEl.dataset.key;
    const itemKey = li.dataset.item;
    openPanel(catKey, itemKey);
    // Mark which sub-item is focused
    catEl.querySelectorAll(".xmb-sub li").forEach(x => x.classList.remove("focused"));
    li.classList.add("focused");
  });
});

let openCatKey = null;
let openItemKey = null;

function openPanel(catKey, itemKey) {
  openCatKey = catKey;
  openItemKey = itemKey;
  const contentMap = lang === "tr" ? CONTENT_TR : CONTENT;
  const data = contentMap[catKey] && contentMap[catKey][itemKey];
  if (!data) return;
  panelContent.innerHTML = data.html;
  panelEl.classList.add("open");
}
function closePanel() {
  panelEl.classList.remove("open");
  openCatKey = null;
  openItemKey = null;
  document.querySelectorAll(".xmb-sub li.focused").forEach(x => x.classList.remove("focused"));
}
panelClose.addEventListener("click", closePanel);

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "en" ? "tr" : "en");
  if (panelEl.classList.contains("open") && openCatKey) {
    const contentMap = lang === "tr" ? CONTENT_TR : CONTENT;
    const data = contentMap[openCatKey] && contentMap[openCatKey][openItemKey];
    if (data) panelContent.innerHTML = data.html;
  }
});

// Wheel scrolling — left/right shifts category, up/down browses sub-items
let wheelLock = false;
document.addEventListener("wheel", (e) => {
  if (wheelLock) return;
  if (panelEl.classList.contains("open")) return; // let panel scroll naturally
  // Vertical scroll (most mice) → switch categories
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    if (e.deltaY > 10) setActive(activeIndex + 1, true);
    else if (e.deltaY < -10) setActive(activeIndex - 1, true);
  } else {
    if (e.deltaX > 10) setActive(activeIndex + 1, true);
    else if (e.deltaX < -10) setActive(activeIndex - 1, true);
  }
  wheelLock = true;
  setTimeout(() => (wheelLock = false), 600);
}, { passive: true });

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (panelEl.classList.contains("open")) closePanel();
    return;
  }
  if (panelEl.classList.contains("open")) return;
  if (e.key === "ArrowLeft")  setActive(activeIndex - 1, true);
  if (e.key === "ArrowRight") setActive(activeIndex + 1, true);
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    const subs = cats[activeIndex].querySelectorAll(".xmb-sub li");
    if (!subs.length) return;
    const cur = cats[activeIndex].querySelector(".xmb-sub li.focused");
    let idx = cur ? Array.from(subs).indexOf(cur) : -1;
    idx = e.key === "ArrowDown" ? idx + 1 : idx - 1;
    if (idx < 0) idx = subs.length - 1;
    if (idx >= subs.length) idx = 0;
    subs.forEach(s => s.classList.remove("focused"));
    subs[idx].classList.add("focused");
  }
  if (e.key === "Enter") {
    const focused = cats[activeIndex].querySelector(".xmb-sub li.focused");
    if (focused) focused.click();
  }
});

