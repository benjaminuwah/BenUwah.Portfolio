import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  nextjs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  iobotech,
  chartdot,
  tesla,
  shopify,
  znexx,
  carrent,
  jobit,
  znexx_designs,
  finixx,
  nft_ng,
  tripguide,
  threejs,
  wordpress,
  khalikulture,
  dr_kosi,
  client_1,
  client_2,
  client_3,
  client_4,
  client_5,
  client_6,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Work Experience & Projects",
  },
  {
    id: "contact",
    title: "Get in Touch",
  },
  {
    id: "connect",
    title: "Let's Connect",
  },
];

const footerLinks = [
  {
    id: "linkedin",
    title: "Linkedin",
  },
  {
    id: "twitter",
    title: "Twitter",
  },
  {
    id: "github",
    title: "Github"
  },
]

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Product Designer",
    icon: backend,
  },
  {
    title: "Creative Director",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const clients = [
  {
    name: "Znexx",
    icon: client_3,
  },
  {
    name: "Khalikulture",
    icon: client_2,
  },
  {
    name: "Iobotech Limited",
    icon: client_1,
  },
  {
    name: "Asthma Awareness Care Group",
    icon: client_4,
  },
  {
    name: "Ukason Group LTD",
    icon: client_6,
  }
];

const experiences = [
  {
    title: "UX Designer and Web Developer",
    company_name: "Khalikulture Clothing Brand",
    icon: khalikulture,
    iconBg: "#0C0A3C",
    date: "2018 - 2021 (Remote)",
    points: [
      "Designed and developed a retail-focused e-commerce website serving retails across the country and beyond.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Iobotech Limited",
    icon: iobotech,
    iconBg: "#FFF",
    date: "November 2020 - August 2021",
    points: [
      "Designed and developed user interface prototypes and wireframes and converting these prototypes to working websites and web application. Tools used includes Adobe XD, Figma, Adobe Illustrator.",
      "Worked also as a Frontend web developer by converting the UX designs to actual interactive web design."
    ],
  },
  {
    title: "Web Developer and User Experience Designer",
    company_name: "Znexx Designs Limited",
    icon: znexx,
    iconBg: "#383E56",
    date: "September 2021 - Present (Remote)",
    points: [
      "Developing and maintaining web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "IT Operations Manager",
  //   company_name: "ChartDot",
  //   icon: chartdot,
  //   iconBg: "#0F47A1",
  //   date: "February 2023 - Present",
  //   points: [
  //     "Managing all activities involved in the production of services",
  //     "Managing the day-to-day operations of the IT team",
  //     "Managing technology vendors, and implementing new technologies and processes to improve efficiency and productivity",
  //     "Evaluating and implementing new technologies and systems that improve IT infrastructure and support the organization's business goals.",
  //     "Managing the IT budget and ensuring that expenses are in line with the organization's financial goals",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I worked with Ben on so many projects and I can say that he's really good at what he's doing. I recommend him anytime",
    name: "Simi",
    designation: "UX designer",
    company: "BrowPay Technologies",
    image: "",
  },
  {
    testimonial:
      "Ben's attitude to work is commendable. He meets up with timelines, gives prompt feedback and is courteous",
    name: "Kosi Amorha",
    designation: "Clinical Pharmacy and Pharmacy Management",
    company: "University of Nigeria, Nsukka",
    image: "",
  },
  {
    testimonial:
      "After Ben re-designed and optimized our website, our traffic increased by 50%. He's someone that gets your job ready in a short time frame!",
    name: "Marcus Jones",
    designation: "COE",
    company: "NOFOMOE (USA)",
    image: "",
  },
];

const projects = [
  {
    name: "Znexx Designs Limited",
    description:
      "Znexx Design Ltd is a design company providing service in 3D Animation, simulation, 3D Visualization, Engineering and professional training.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "web-dev",
        color: "pink-text-gradient",
      },
    ],
    image: znexx_designs,
    source_code_link: "https:znexx.com",
  },
  {
    name: "Finixx Consults",
    description:
      "Finixx Consulting offers fintech services, edutech services, financial and advisory services, business turnaround services, growth and expansion services.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "web-dev",
        color: "pink-text-gradient",
      },
    ],
    image: finixx,
    source_code_link: "https://finixx.com.ng",
  },
  {
    name: "NFT.ng App",
    description:
      "A comprehensive NFT platform that allows users to view collections and explore market places. Users can list and purchase items on the app.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "mobile app",
        color: "pink-text-gradient",
      },
    ],
    image: nft_ng,
    source_code_link: "https://www.figma.com/community/file/1174342590019824036",
  },
];

export { clients, services, technologies, experiences, testimonials, projects, footerLinks };
