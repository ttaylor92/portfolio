const year = (new Date()).getFullYear();
const dp = 'images/dp.JPG';

const about = {
  title: 'Who am I?',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const skills = [
  ['lor body'],
  [
    {type: 'ReactJS', level: 68},
    {type: 'Angular', level: 20},
    {type: 'Javascript', level: 50},
    {type: 'Bootstrap', level: 40},
    {type: 'CSS', level: 70},
    {type: 'jQuery', level: 30},
    {type: 'PHP', level: 25},
    {type: 'Photoshop', level: 60},
    {type: 'After Effects', level: 50},
    {type: 'Illustrator', level: 50},
    {type: 'Blender', level: 30},
    {type: 'Cinema 4D', level: 30}
  ]
]

const contact={
  number: '+1876 327 7085',
  address: 'Port Morant, St Thomas, Jamaica'
}

const experience=[
  {
    job: 'Freelance Web Developer',
    time: '2018 – Present',
    location: '',
    description: ''
  },
  {
    job: 'Customer Service Representative',
    time: '2016 - Present',
    location: 'Stapharm Services',
    description: ''
  },
  {
    job: 'Senior Graphics Designer',
    time: '2016 - Present',
    location: 'Utopia Tech (Startup)',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading'
  },
  {
    job: 'Graphic Designer',
    time: '2015 - 2016',
    location: 'St Thomas Signs',
    description: 'Visual Design, Videography, Video Editing, Branding'
  },
  {
    job: 'Herbalife Health Coach',
    time: '2013-2015',
    location: '',
    description: ''
  },
  {
    job: 'Computer Lab Technician',
    time: '2010 - 2012',
    location: 'St Thomas Techincal High School',
    description: 'Repairs and Mantainance, Networking'
  }
]

export {
  dp,
  year,
  about,
  skills,
  contact,
  experience
}
