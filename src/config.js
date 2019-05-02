const year = (new Date()).getFullYear();
const dp = 'images/dp.JPG';

const about = {
  title: 'Who am I?',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const skills = [
  {type: 'ReactJS', level: 50},
  {type: 'Angular', level: 20},
  {type: 'Javascript', level: 50},
  {type: 'Bootstrap', level: 30},
  {type: 'CSS', level: 70},
  {type: 'jQuery', level: 30}
]

export {
  dp,
  year,
  about,
  skills
}
