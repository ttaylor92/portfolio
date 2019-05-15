const year = (new Date()).getFullYear();
const dp = 'images/dp.JPG';

const about = {
  title: 'Who am I?',
  body: [
    "I am someone who is driven by my interests; as long as my interest in a topic of any kind I am focused on learning about it wether if it is for work or hobbie wise. ",
    "I absolutely love programming and the all things that can be done with it. ",
    "My hobbies, apart from coding, include gaming, reading novels and watching videos; wether it is cooking videos, movies and different kinds of series. ",
    "Graphic Design is an hobbie that I took up a while back. Being able to create things just of what I have pictured in my mind is something that I enjoyed."
   ]
}

const skills = [
  ['The languages/applications that I have used before and are using currently. I do look foward to increasing the count very soon.'],
  [
    {type: 'ReactJS', level: 68},
    {type: 'NodeJS', level: 40},
    {type: 'React-Redux', level: 40},
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
  address: 'Port Morant, St Thomas, Jamaica',
  email: 'tyronetaylorbiz@gmail.com'
}

const experience=[
  {
    job: 'Freelance Web Developer',
    time: '2018 – Present',
    location: '',
    description: '',
    icon: 'fas fa-cogs'
  },
  {
    job: 'Customer Service Representative',
    time: '2016 - Present',
    location: 'Stapharm Services',
    description: '',
    icon: 'fab fa-intercom'
  },
  {
    job: 'Senior Graphics Designer',
    time: '2016 - Present',
    location: 'Utopia Tech (Startup)',
    description: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
    icon: 'fas fa-pen-nib'
  },
  {
    job: 'Graphic Designer',
    time: '2015 - 2016',
    location: 'St Thomas Signs',
    description: 'Visual Design, Videography, Video Editing, Branding',
    icon: 'fas fa-pen-nib'
  },
  {
    job: 'Herbalife Health Coach',
    time: '2013-2015',
    location: '',
    description: '',
    icon: 'fas fa-running'
  },
  {
    job: 'Computer Lab Technician',
    time: '2010 - 2012',
    location: 'St Thomas Techincal High School',
    description: 'Repairs and Mantainance, Networking',
    icon: 'fas fa-tools'
  }
]

const education=[
  {
    type: 'FreeCodeCamp',
    time: '2017-Present',
    description: 'Responsive Web Design, JavaScript Algorithms and Data Structures, Front End Libraries',
    icon: 'fab fa-free-code-camp'
  },
  {
    type: 'University of Technology',
    time: '2013-2014',
    description: 'CompTIA A+ Certification',
    icon: 'fas fa-tools'
  },
  {
    type: 'Heart Trust National Tools and Engineering Institute',
    time: '2009-2010',
    description: 'Level Two Computer Servicing and Repairs Technician Diploma',
    icon: 'fas fa-tools'
  }
]

const portfolio = {
  codepen : [
    {
      url: 'https://codepen.io/curlybraces/pen/QqVZqX',
      name: 'Fcc Portfolio',
      language: 'HTML'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/dZpGpG',
      name: 'Fcc WikiSearch',
      language: 'jQuery'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/JOMQmw',
      name: 'Fcc Twitch.tv API',
      language: 'jQuery'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/zELxWv',
      name: 'Fcc Tribute Page',
      language: 'HTML'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/rGQmmX',
      name: 'Random Post Generator',
      language: 'jQuery'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/JOdVyL',
      name: 'Fcc Weather App',
      language: 'jQuery'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/GLqegP',
      name: 'Fcc Product Landing Page',
      language: 'HTML'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/QaWeBz',
      name: 'Todo App',
      language: 'JavaScript'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/vMvamV',
      name: 'Fcc JavaScript Calculator',
      language: 'JavaScript, ReactJS'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/pBGVLd',
      name: 'Fcc Pomodoro Clock',
      language: 'JavaScript, ReactJS'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/dLpVdW',
      name: 'Fcc Technical Documentation Page',
      language: 'HTML'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/bJQWrz',
      name: 'Fcc Drummachine',
      language: 'JavaScript, ReactJS'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/VNdMrJ',
      name: 'Fcc Markdown',
      language: 'JavaScript, ReactJS'
    },
    {
      url: 'https://codepen.io/curlybraces/pen/MRjOrJ',
      name: 'Fcc Survey Form',
      language: 'JavaScript, ReactJS'
    }
  ]
}

export {
  dp,
  year,
  about,
  skills,
  contact,
  experience,
  education,
  portfolio
}
