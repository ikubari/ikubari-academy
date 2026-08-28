// Single source of truth for IKUBARI Academy content — aligned to the Development document.

export interface SkillTrack {
  number: string;
  title: string;
  icon: string;
  focus: string;
  coreSkills: string[];
  outcome: string;
}

export interface DevelopmentTrack {
  id: string;
  number: string;
  age: string;
  title: string;
  positioning: string;
  description: string;
  goal: string;
  keyFocus: string[];
  outcome: string;
  progression: string[];
  icon: string;
  accent: 'coral' | 'blue' | 'yellow';
  image: string;
}

export interface TrainingPillar {
  number: string;
  title: string;
  tagline: string;
  icon: string;
  description: string;
  focus: string[];
  shape: 'square' | 'circle' | 'triangle';
}

export interface PartnershipCategory {
  title: string;
  icon: string;
  description: string;
}

export const developmentTracks: DevelopmentTrack[] = [
  {
    id: 'summer',
    number: '01',
    age: '13–16',
    title: 'Summer Development Track',
    positioning: 'Inspiring curiosity and creativity in the next generation.',
    description:
      'A creative, high-energy experience that turns curiosity into confidence. Young learners explore media, technology, and making through hands-on projects, discovering what they love and building the courage to create.',
    goal: 'To spark curiosity and build creative confidence in young learners.',
    keyFocus: ['Creative exploration', 'Hands-on making', 'Foundational digital skills', 'Confidence building'],
    outcome: 'Curious, confident young creators ready to explore what is next.',
    progression: ['Discovery', 'Curiosity', 'Confidence'],
    icon: 'ri-rocket-2-line',
    accent: 'coral',
    image:
      'https://readdy.ai/api/search-image?query=Confident%20group%20of%20young%20Black%20African%20students%20aged%2013%20to%2016%20collaborating%20in%20a%20bright%20modern%20creative%20studio%2C%20sketching%20bold%20ideas%20and%20building%20digital%20prototypes%2C%20energetic%20and%20curious%2C%20deep%20navy%20walls%20with%20coral%20accent%20lighting%2C%20bold%20geometric%20shapes%20in%20the%20space%2C%20warm%20natural%20light%2C%20editorial%20photography%20style%2C%20high%20detail&width=800&height=600&seq=track-summer-1016&orientation=landscape&nocache=true',
  },
  {
    id: 'youth',
    number: '02',
    age: '17–22',
    title: 'Youth Development Track',
    positioning: 'Empowering students to explore, discover and prepare for the future.',
    description:
      'A development track for students navigating school, skills and identity. Learners explore their interests, build practical skills across media and technology, and gain the self-awareness and direction to step confidently into what is next.',
    goal: 'To help students explore, build skills and gain awareness for their future.',
    keyFocus: ['Interest exploration', 'Practical skill building', 'Self and career awareness', 'Mentorship'],
    outcome: 'Skilled, self-aware young people prepared for their next step.',
    progression: ['Exploration', 'Skill Building', 'Awareness'],
    icon: 'ri-compass-3-line',
    accent: 'blue',
    image:
      'https://readdy.ai/api/search-image?query=Confident%20young%20Black%20African%20students%20aged%2017%20to%2022%20collaborating%20on%20media%20and%20technology%20projects%20in%20a%20modern%20creative%20academy%20studio%2C%20using%20laptops%20and%20whiteboards%20with%20focused%20teamwork%2C%20deep%20navy%20and%20electric%20blue%20color%20tones%2C%20bold%20geometric%20architecture%2C%20warm%20natural%20lighting%2C%20editorial%20photography%20style&width=800&height=600&seq=track-youth-1722&orientation=landscape',
  },
  {
    id: 'young-professionals',
    number: '03',
    age: '23–30',
    title: 'Young Professionals Development Track',
    positioning: 'Preparing young people for immediate employment and career growth.',
    description:
      'A career-focused track for emerging professionals. Learners master in-demand skills, apply them through real projects and portfolios, and move directly into employment, freelancing or entrepreneurship.',
    goal: 'To prepare young professionals for immediate employment and career growth.',
    keyFocus: ['Skill mastery', 'Portfolio and project application', 'Employability', 'Entrepreneurship'],
    outcome: 'Employment-ready professionals equipped to work, build and grow.',
    progression: ['Mastery', 'Application', 'Employment'],
    icon: 'ri-briefcase-line',
    accent: 'yellow',
    image:
      'https://readdy.ai/api/search-image?query=Ambitious%20young%20Black%20African%20professionals%20aged%2023%20to%2030%20presenting%20business%20ideas%20and%20building%20prototypes%20in%20a%20professional%20creative%20workshop%2C%20mentorship%20and%20collaboration%2C%20deep%20navy%20and%20golden%20yellow%20accents%2C%20modern%20contemporary%20space%2C%20editorial%20photography%20style%2C%20high%20detail&width=800&height=600&seq=track-youngpro-2130&orientation=landscape&nocache=true',
  },
];

export const skillTracks: SkillTrack[] = [
  {
    number: '01',
    title: 'Digital Media & Content Creation',
    icon: 'ri-movie-line',
    focus: 'Producing compelling media and creative content that tells stories and moves audiences.',
    coreSkills: ['Graphic design', 'Video production', 'Photography', 'Storytelling', 'Content creation'],
    outcome: 'Creators who produce polished, purposeful digital media.',
  },
  {
    number: '02',
    title: 'Technology & Digital Innovation',
    icon: 'ri-code-s-slash-line',
    focus: 'Building with technology and turning ideas into digital solutions.',
    coreSkills: ['Coding and programming', 'Digital tools', 'Problem-solving', 'Emerging technology', 'Digital literacy'],
    outcome: 'Tech-fluent innovators who build and adapt.',
  },
  {
    number: '03',
    title: 'Digital Marketing & Communication',
    icon: 'ri-megaphone-line',
    focus: 'Reaching audiences and communicating ideas with clarity and impact.',
    coreSkills: ['Social media strategy', 'Branding', 'Copywriting', 'Analytics', 'Communication'],
    outcome: 'Strategic communicators who grow brands and messages.',
  },
  {
    number: '04',
    title: 'Leadership & Personal Development',
    icon: 'ri-user-star-line',
    focus: 'Growing character, confidence and the ability to lead others.',
    coreSkills: ['Self-leadership', 'Public speaking', 'Teamwork', 'Responsibility', 'Decision-making'],
    outcome: 'Confident, responsible leaders who inspire and mobilise.',
  },
  {
    number: '05',
    title: 'Creative Entrepreneurship & Future of Work',
    icon: 'ri-lightbulb-flash-line',
    focus: 'Turning ideas into ventures and thriving in the new world of work.',
    coreSkills: ['Entrepreneurship', 'Business modelling', 'Innovation', 'Financial literacy', 'Future-of-work skills'],
    outcome: 'Entrepreneurial thinkers who create value and adapt.',
  },
  {
    number: '06',
    title: 'Human Skills & Wellbeing',
    icon: 'ri-heart-3-line',
    focus: 'Strengthening the human foundation empathy, resilience and wellbeing.',
    coreSkills: ['Emotional intelligence', 'Empathy', 'Resilience', 'Collaboration', 'Wellbeing practices'],
    outcome: 'Grounded, resilient individuals who thrive and connect.',
  },
];

export const trainingPillars: TrainingPillar[] = [
  {
    number: '01',
    title: 'Hard Skills',
    tagline: 'Building Competence',
    icon: 'ri-tools-line',
    description:
      'Practical, job-ready skills in media and technology that make learners capable of creating, building and delivering real work.',
    focus: ['Technical mastery', 'Creative craft', 'Digital tools', 'Project delivery'],
    shape: 'square',
  },
  {
    number: '02',
    title: 'Soft Skills',
    tagline: 'Shaping Character',
    icon: 'ri-user-heart-line',
    description:
      'The inner qualities of communication, discipline, teamwork, and integrity that shape how learners work with others and show up in the world.',
    focus: ['Communication', 'Discipline', 'Teamwork', 'Integrity'],
    shape: 'circle',
  },
  {
    number: '03',
    title: 'Human Skills',
    tagline: 'Inspiring Purpose',
    icon: 'ri-compass-3-line',
    description:
      'The deeper human capacities of empathy, self-awareness, and a sense of purpose are what turn skill into meaningful impact.',
    focus: ['Empathy', 'Self-awareness', 'Purpose', 'Wellbeing'],
    shape: 'triangle',
  },
];

export const partnershipCategories: PartnershipCategory[] = [
  {
    title: 'Corporate Partners',
    icon: 'ri-building-2-line',
    description: 'Companies that sponsor learners, provide mentors and create pathways to employment.',
  },
  {
    title: 'Academic Institutions',
    icon: 'ri-school-line',
    description: 'Schools, colleges and universities that host training and share curriculum.',
  },
  {
    title: 'Technology Partners',
    icon: 'ri-cpu-line',
    description: 'Tech organisations that provide tools, platforms and innovation support.',
  },
  {
    title: 'NGOs & Development Agencies',
    icon: 'ri-global-line',
    description: 'Organisations that fund access and extend our reach to more young people.',
  },
  {
    title: 'Government & Ministries',
    icon: 'ri-government-line',
    description: 'Public institutions that support youth skills and employment agendas.',
  },
  {
    title: 'Alumni Network',
    icon: 'ri-group-line',
    description: 'Graduates who mentor the next cohort and grow the Ikubari community.',
  },
];

export const deliveryModel = ['Theory', 'Practice', 'Mentorship', 'Projects', 'Showcase'];