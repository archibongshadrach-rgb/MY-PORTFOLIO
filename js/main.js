const portfolioData = {
  profile: {
    bio:
      "I’m a multi-disciplinary graphic designer focused on creative communication, visual storytelling, and brand systems that bring clarity and energy to the work. I design social campaigns, visuals, key art, and strategic brand materials for businesses and cultural projects that want to stand out.",
    expertise: [
      "Social Media Design",
      "Posters & Key visuals",
      "Banner & POSM Design",
      "YouTube Thumbnails",
      "Art Direction"
    ],
    skills: [
      { label: "Ps", bg: "#001e36", color: "#31a8ff" },
      { label: "Ai", bg: "#330000", color: "#ff9a00" },
      { label: "Fg", bg: "#1e1e1e", color: "#f24e1e" },
      { label: "Cd", bg: "#2b2b2b", color: "#ff7f50" },
      { label: "Cr", bg: "#3d2b0d", color: "#f3c13a" }
    ],
    stats: [
      { value: "200+", label: "Designs created" },
      { value: "50+", label: "Projects delivered" },
      { value: "100+", label: "Brand & social assets" }
    ]
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/klyr.wrk",
      icon: "icons/Instagram.svg"
    },
    {
      label: "Gmail",
      href: "https://mail.google.com/mail/?view=cm&to=archibongshadrach@gmail.com",
      icon: "icons/Gmail.svg"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      icon: "icons/LinkedIn.svg"
    }
  ],
  projects: [
    {
      title: "iDELIVER",
      category: "Branding",
      year: 2026,
      image: "images/ideliver-1.jpg",
      description:
        "Brand-focused campaign design and digital visuals created to increase visibility, conversions, and audience engagement."
    },
    {
      title: "TON Sports",
      category: "Branding",
      year: 2026,
      image: "images/ton-1.jpg",
      description:
        "Football-themed creative direction and fan-first content that helped grow the brand’s digital presence and matchday appeal."
    },
    {
      title: "KVLTVH",
      category: "Branding",
      year: 2024,
      image: "images/kvltvh-1.jpg",
      description:
        "Music promotion graphics and entertainment visuals designed to spotlight emerging artists and sustain consistent audience interest."
    },
    {
      title: "BYBATA",
      category: "Branding",
      year: 2026,
      image: "images/bybata-1.jpg",
      description:
        "Creative brand communication and visual identity design built to express the mission and personality of the business."
    },
    {
      title: "Other Projects",
      category: "Creative Work",
      year: 2025,
      image: "images/other-1.jpg",
      description:
        "A mix of social creative, print flyers, restaurant visuals, and other brand assets for diverse industries and audiences."
    }
  ]
};

const profileBio = document.getElementById("profile-bio");
const skillsGrid = document.getElementById("skills-grid");
const expertiseList = document.getElementById("expertise-list");
const statsGrid = document.getElementById("stats-grid");
const projectGrid = document.getElementById("project-grid");
const socials = document.getElementById("socials");

if (profileBio) {
  profileBio.textContent = portfolioData.profile.bio;
}

if (skillsGrid) {
  skillsGrid.innerHTML = portfolioData.profile.skills
    .map(
      (skill) => `
        <span class="tool-chip" style="background:${skill.bg};color:${skill.color};">${skill.label}</span>
      `
    )
    .join("");
}

if (expertiseList) {
  expertiseList.innerHTML = portfolioData.profile.expertise
    .map((item) => `<li>${item}</li>`)
    .join("");
}

if (statsGrid) {
  statsGrid.innerHTML = portfolioData.profile.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `
    )
    .join("");
}

if (projectGrid) {
  projectGrid.innerHTML = portfolioData.projects
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="${project.title}" loading="lazy" />
          <div class="content">
            <p class="project-meta">${project.category} • ${project.year}</p>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

if (socials) {
  socials.innerHTML = portfolioData.socials
    .map(
      (item) => `
        <a class="social-link" href="${item.href}" target="_blank" rel="noreferrer noopener" aria-label="${item.label}">
          <img src="${item.icon}" alt="${item.label}" />
        </a>
      `
    )
    .join("");
}
