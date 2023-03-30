import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Quantin',
  lastName: 'Massias',
  initials: 'QM',
  position: 'a student',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🍇🍷',
      text: 'based in Bordeaux, France',
    },
    {
      emoji: '👨‍💻📱',
      text: 'Developer Web FullStack & student at WildCodeSchool',
    },
    {
      emoji: '📧📨',
      text: 'massias.quantinpro@gmail.com',
    },
  ],
  socials: [
    {
      link: '', //a modifier
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://www.instagram.com/don_plozed/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/MassiasQuantin',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/quantin-massias-123201268/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "Ancien cuisinier, passionné depuis petit par l'informatique. C'est le 27 février 2023 que je me lance dans une formation de développer web d'une durée de 5 mois (BAC+2) pour ensuite créer ma propre entreprise et travailler en freelance !",
  skills: {
    tools: ['Figma', 'VisualStudioCode', 'KaliLinux', 'Virtual Box'],
    others: ['Basic HTML/CSS', 'OSINT', 'Pentest', 'Optimisation SEO', 'JavaScript']
  },
  hobbies: [
    {
      label: 'Golf',
      emoji: '🏌🏽',
    },
    {
      label: 'Jeu video',
      emoji: '🎮',
    },
    {
      label: 'Musculation',
      emoji: '🏋️',
    },
    {
      label: 'Musique',
      emoji: '🎧',
    },
    {
      label: 'Cuisiner',
      emoji: '👨🏻‍🍳',
    },
    {
      label: 'Voyager',
      emoji: '✈️',
    }
    
  ],
  portfolio: [
    {
      title: 'Portfolio de Massias Quantin',
      live: '/',
      image: 'https://image.noelshack.com/fichiers/2023/13/4/1680187630-website.png',
    }
  ],
};
