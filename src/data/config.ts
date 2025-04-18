const config = {
  title: "Doniyor Dev | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Doniyor, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Doniyor, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Doniyor",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Doniyor Dev",
  email: "doniyormak.1@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/doniyor-dev-7bb83021a/",
    instagram: "#",
    facebook: "#",
    github: "https://github.com/webmasters-Team",
  },
};
export { config };
