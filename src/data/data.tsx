import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: 'React portfolio and resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm DENNIS MUSYOKA.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> and,
        <br />
        <strong className="text-stone-100">Frontend Developer</strong> based in Nairobi. I specialize in building modern
        web applications and fixing bugs.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, i explore new <strong className="text-stone-100">Technologies</strong>, used by{' '}
        <strong className="text-stone-100">Frontend Developers</strong>in various industries{' '}
        <strong className="text-stone-100"></strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I can engage in team projects and participate in group discussions to enhance my collaboration and communication skills. 
  I work effectively with my colleagues, sharing ideas, expertise, and resources to achieve our common goals. 
  I can contribute to the success of the projects by leveraging the diverse perspectives and strengths of team members`,
  aboutItems: [
    {label: 'Location', text: 'Nairobi', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Kenyan', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Reading, Swimming', Icon: SparklesIcon},
    {label: 'Study', text: 'Nairobi Technical Training School', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Frontend Developer.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Kiswahili',
        level: 4,
      },
      {
        name: 'Kamba',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'vite',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Ruby on Rails',
        level: 3,
      },
      // {
      //   name: 'Golang',
      //   level: 4,
      // },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      // {
      //   name: 'Flutter',
      //   level: 4,
      // },
      // {
      //   name: 'Swift',
      //   level: 3,
      // },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Nike Shop',
    description:
      'The shop features a wide range of Nike products, including athletic footwear, apparel, and accessories for men, women, and children.',
    url: 'https://nike-shop-ruby.vercel.app/',
    image: porfolioImage1,
  },
  {
    title: 'Modern Banking Sysytem',
    description: 'The next generation payment method.',
    url: 'https://dennis-bank.vercel.app/',
    image: porfolioImage2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage3,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage7,
  // },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://timbaker.me',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2022',
    location: 'Moringa School',
    title: 'Software Engineering',
    content: (
      <p>
        {' '}
        Programming Language: Javascript <br />
        Web Technogies: HTML, CSS, React, Express.js, Node.js, Ruby on Rails.
        <br />
        Database: MongoDB.
      </p>
    ),
  },
  {
    date: 'September 2019',
    location: 'Nairobi Technical Training Institute',
    title: 'Diploma in Chemical Engineering',
    content: (
      <p>
        {' '}
        Problem-solving: Chemical engineers are trained to analyze complex problems and develop innovative solutions.
        <br />
        This involves applying scientific principles, mathematical modeling, and critical thinking to design processes,
        troubleshoot issues, and optimize systems.
      </p>
    ),
  },
  {
    date: 'January 2015',
    location: 'Nduluni High School',
    title: 'Kenya Certificate of Secondary Education',
    content: <p></p>,
  },
  // {
  //   date: 'January 2006',
  //   location: 'Mwakitutu Primary School',
  //   title: 'Kenya Certificate of Primary Education',
  //   content: <p></p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Present',
    location: 'Nairobi',
    title: 'junior UX Engineer',
    content: (
      <p>
        I had the opportunity to learn from experienced developers, participate in code reviews, and contribute to team
        projects. I developed a strong foundation in front-end development principles, JavaScript, and React best
        practices.
      </p>
    ),
  },
  {
    date: 'May 2023 - present',
    location: 'Nairobi',
    title: 'Junior bug fixer',
    content: (
      <p>
        Reproduce and identify the bug: The first step is to reproduce the bug consistently. By understanding the steps
        or conditions that trigger the bug, I can gain insight into its root cause. This may involve analyzing error
        messages, reviewing logs, or conducting user interviews to gather additional information.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mbetsa Nzavila',
      text: ' His exceptional organizational skills and his ability to effectively manage his time and responsibilities at work.',
      image:
        'https://plus.unsplash.com/premium_photo-1661508991858-f83ea94b33a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFmcmljYW4lMjBpbWFnZXMocGVvcGxlKXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Boniface Mukabane',
      text: 'Quick to learn, display a greate deal of responsiblity and can work under minimal supervision.',
      image:
        'https://plus.unsplash.com/premium_photo-1666299738858-101046c3a83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFmcmljYW4lMjBpbWFnZXMocGVvcGxlKXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    // {
    //   name: 'Someone else',
    //   text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can get in touch with me through my social media handles below.',
  items: [
    {
      type: ContactType.Email,
      text: 'mateshdennis@gmail.com',
      href: 'mailto:mateshdennis@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Nairobi, Kenya',
      href: 'https://www.google.ca/maps/place/Nairobi/',
    },
    {
      type: ContactType.Instagram,
      text: '@DennisMusyoka',
      href: 'https://www.instagram.com/mateshdennis/',
    },
    {
      type: ContactType.Github,
      text: 'Dennis',
      href: 'https://github.com/DennisMatenge',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/DennisMatenge'},
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/8553186/mateshdennis.musyoka',
  },
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mateng-e-dennis-musyoka-209a44215/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/mateshdennis/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/@DennisonMusyoka'},
];
