import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Java } from "@/components/ui/svgs/java";
import { Python } from "@/components/ui/svgs/python";
import { Html5 } from "@/components/ui/svgs/html5";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Flutter } from "@/components/ui/svgs/flutter";

export const DATA = {
  name: "Aman Naveed",
  initials: "AN",
  // TODO: swap in your real portfolio domain once you deploy
  url: "https://amannaveed.dev",
  location: "Lahore, Pakistan",
  locationLink: "https://www.google.com/maps/place/lahore",
  description:
    "BS Information Technology student building mobile apps, web platforms, and marketplace tools. Open to remote internships / entry-level software & mobile dev roles.",
  summary:
    "I'm a BS Information Technology student at the [University of Management and Technology (UMT)](/#education) with strong foundations in programming, networking, and database-driven application development. I'm proficient in C++, Java, Python, Flutter, and HTML/CSS, with hands-on project experience spanning mobile apps, marketplace platforms, and management systems. I recently completed the [Deloitte Technology Job Simulation](/#certifications) (Software Development Track, via Forage), and I'm actively looking for a remote internship or entry-level role in software or mobile app development where I can apply and grow these skills in a professional setting.",
  avatarUrl: "/me.png",
  skills: [
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "Flutter", icon: Flutter },
    { name: "HTML/CSS", icon: Html5 },
  ],
  // Soft-skill / non-technical strengths from the resume — surface these as
  // pills/badges near the summary or in a dedicated "Core Competencies"
  // block, since they're a real differentiator for a student aiming at
  // client-facing or growth-adjacent roles (matches the "Sales & Marketing
  // Associate" title on the resume header).
  coreCompetencies: [
    "Client Communication & Negotiation",
    "Project & Task Coordination",
    "Team Leadership & Collaboration",
    "Problem Solving & Adaptability",
    "Time Management & Organization",
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Native" },
  ],
  certifications: [
    {
      name: "Deloitte Technology Job Simulation",
      issuer: "Forage",
      track: "Software Development Track",
      date: "July 2026",
      href: "https://www.theforage.com/simulations/deloitte-au/technology-fz0w",
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amannaveedcheema@gmail.com",
    tel: "+92 315 2335430",
    social: {
      // TODO: the resume doesn't list social URLs — drop your real handles
      // in below. Set `navbar: false` for any you don't want in the top nav.
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aman-naveed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aman-naveed-7241903b3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amannaveedcheema@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // No formal employment history on the resume yet — the Deloitte job
  // simulation is the closest thing to "work experience" so it's listed
  // here. Replace/extend this array as soon as you land an internship;
  // most portfolio templates render an empty section poorly, so don't
  // leave `work: []` for long.
  work: [
    {
      company: "Deloitte (via Forage)",
      href: "https://www.theforage.com/simulations/deloitte-au/technology-fz0w",
      badges: [],
      location: "Remote",
      title: "Technology Job Simulation — Software Development Track",
      logoUrl: "/deloitte.png",
      start: "July 2026",
      end: "July 2026",
      description:
        "Completed Deloitte's self-paced Technology job simulation on Forage: worked through realistic software development tasks including drafting a development proposal and building a status dashboard, gaining exposure to professional software project workflows from scoping through delivery.",
    },
  ],

  education: [
    {
      school: "University of Management and Technology",
      href: "https://www.umt.edu.pk",
      degree: "BS Information Technology",
      logoUrl: "/umt.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Punjab College, Chishtian",
      href: "https://www.punjabcollege.edu.pk",
      degree: "FSc Pre-Medical",
      logoUrl: "/pgc.png",
      start: "2021",
      end: "2023",
    },
  ],

  // TODO: tech stacks below are best-guess placeholders based on the skills
  // listed on your resume (C++, Java, Python, Flutter, HTML/CSS) since the
  // resume only gives project descriptions, not stacks. Swap each array for
  // what you actually built with — this matters for credibility with
  // technical reviewers/recruiters skimming the portfolio.
  projects: [
    {
      title: "Bid Bazar",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Built an online bidding/marketplace platform, gaining hands-on insight into buyer-seller interaction and deal closing.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      links: [
        // TODO: add a real Website/Source link once you have one, e.g.:
        // { type: "Source", href: "https://github.com/<you>/bid-bazar", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
    },
    {
      title: "Aghosh",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Led a social welfare initiative connecting donors with causes, sharpening outreach and relationship-building skills.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Hotel Management System",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Delivered a client-facing hotel booking system end-to-end, coordinating requirements and deadlines.",
      technologies: ["Java", "MySQL"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Student Hub",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Built and promoted a student-facing mobile app, handling user engagement and feedback.",
      technologies: ["Flutter", "Dart", "Firebase"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Spice Chain Management System",
      href: "#",
      dates: "2023",
      active: false,
      description:
        "Managed a supply/inventory workflow for a spice supply chain, strengthening organizational and reporting skills.",
      technologies: ["C++", "MySQL"],
      links: [],
      image: "",
      video: "",
    },
  ],

  // No hackathons listed on the resume — leave empty rather than showing
  // fabricated entries. Remove the "Hackathons" section from your page
  // entirely if you don't plan to compete, or fill this in as you do.
  hackathons: [],
} as const;
