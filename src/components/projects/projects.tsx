type Project = {
  title: string
  description?: string
  techStack: string[]
  visit: string
  source: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'A native Javascript project',
    description:
      'This project is a weather forecast application built with native JavaScript that allows users to view current and upcoming weather conditions for a specified city. The application fetches weather data from the Weatherbit API and displays it using Chart.js for visual representation, while also saving the latest searched city using local storage.',
    techStack: ['HTML', 'CSS', 'Javascript', 'Chart.js'],
    visit: '/native-javascript',
    source: 'https://github.com/rolbjo/native-javascript',
    image: '/images/weatherApp.png',
  },

  {
    title: 'A React Native project',
    techStack: [
      'React Native',
      'JavaScript',
      'Open Trivia Database API',
      'react-native-animatable',
      'Expo',
    ],
    description:
      'This React Native quiz application allows users to answer true/false questions from various categories. It fetches questions from the Open Trivia Database API and provides immediate feedback on answers. Key features include dynamic question fetching, score tracking, and smooth animations. The app works seamlessly on Android, iOS, and web browsers.',
    visit: '/react-native',
    source: 'https://github.com/rolbjo/react-native',
    image: '/images/quizApp.png',
  },

  {
    title: 'A Vue project',
    techStack: [
      'Vue.js',
      'Vue Router',
      'Vuex',
      'Axios',
      'Bootstrap',
      'Sass',
      'Vite',
    ],
    description:
      'This project is a Vue.js application that fetches and displays top headlines from the GNews API. Users can navigate through different sections such as World, Science, and Home using Vue Router. The application also includes state management with Vuex to handle global state changes. The project is styled using Sass and Bootstrap, and it uses Axios for making HTTP requests to the GNews API. The application is built with Vite for fast development and build processes.',
    visit: '/A-vue-project',
    source: 'https://github.com/rolbjo/A-vue-project',
    image: '/images/newsApp.png',
  },

  {
    title: ' Vanilla CSS homepage',
    techStack: ['React', 'React Icons', 'Vite'],
    description:
      'This project is a React application for a fictional lemonade business called Lemonade Shack. The application features a responsive design and includes various sections such as a navigation bar, promotional content and new product highlights. The application is styled using CSS and integrates React Icons for enhanced visual appeal. The project is built with Vite for fast development and build processes, and it is deployed using GitHub Pages.',
    visit: '/homepageStyling',
    source: 'https://github.com/rolbjo/homepageStyling',
    image: '/images/vanillaCSS.png',
  },
]
