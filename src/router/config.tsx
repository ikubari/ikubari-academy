import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const About = lazy(() => import('../pages/about/page'));
const Programs = lazy(() => import('../pages/programmes/page'));
const LearningExperience = lazy(() => import('../pages/learning-experience/page'));
const Skills = lazy(() => import('../pages/skills/page'));
const Partner = lazy(() => import('../pages/partner/page'));
const Contact = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/programs',
    element: <Programs />
  },
  {
    path: '/learning-experience',
    element: <LearningExperience />
  },
  {
    path: '/skills',
    element: <Skills />
  },
  {
    path: '/partner',
    element: <Partner />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;