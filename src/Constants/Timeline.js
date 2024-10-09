import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faBriefcase, faSchool, faCode} from '@fortawesome/free-solid-svg-icons';

export const timeline=[
    {
        h3:'Boggs Coffee',
        h4:'Windsor, ON',
        skills:['Astro','Shopify/API','TypeScript','React','Responsive Design', 'Development'],
        body:[
            'Shopify Storefront API is prevalent across many of the webpages to display '+
            'products, display blogs, cart mutation, and provide the checkout link. ',
            'Form Validation, Brevo API, Responsive Design'
        ],
        date:'July 2024 - Present',
        icon:<FontAwesomeIcon icon={faCode} />,
        button:false,
        list:true,
        github:false,
        link:''
    },
    {
        h3:'Stellar Structures',
        h4:'Windsor, ON',
        skills:['Astro', 'Tailwind'],
        body:[
            ''
        ],
        date:'July 2024',
        icon:<FontAwesomeIcon icon={faCode} />,
        button:true,
        list:false,
        github:false,
        link:'https://stellarstructuresinc.com/'
    },
    {
        h3:'Copper Tunnel',
        h4:'Windsor, ON',
        skills:['HTML','CSS','JavaScript','PHP','MySQL'],
        body:[''],
        date:'June 2024',
        icon:<FontAwesomeIcon icon={faCode} />,
        button:true,
        list:false,
        github:false,
        link:'https://www.coppertunnel.net/'
    },
    {
        h3:'Boggs Coffee Landing Page',
        h4:'Windsor, ON',
        skills:['HTML','CSS','JavaScript','PHP','MySQL'],
        body:[''],
        date:'May 2024',
        icon:<FontAwesomeIcon icon={faCode} />,
        button:true,
        list:false,
        github:false,
        link:'https://boggscoffee.com/'
    },
    {
        h3:'Cowlick Studios',
        h4:'Windsor,ON | Remote',
        skills:['Astro', 'Shopify', 'React', 'Tailwind'],
        body:['Developed responsive websites using technologies that met the client’s requirements (with Astro and Tailwind being predominantly used)',
            'Worked with form validation, databases, API’s, nanostores, and more',
            'Discussed with colleagues to exchange ideas to solve issues regarding images, mailer, and API’s'
        ],
        date:'May 2024 - Present',
        icon:<FontAwesomeIcon icon={faBriefcase} />,
        button:true,
        list:true,
        github:false,
        link:'https://cowlickstudios.com/',
    },
    {
        h3:'Weather Application',
        h4:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'Are you curious to know the current or forecasted weather for a location? '+
             'Find out right here (live website unavailable for the moment).',
        date:'July 2023 - August 2023',
        icon:<FontAwesomeIcon icon={faReact} />,
        button:true,
        list:false,
        github:true,
        link:'https://github.com/CluelessArguer/Weather',
        githubLink: 'https://github.com/CluelessArguer/Weather'
    },
    {
        h3:'Personal Website',
        h4:'Windsor, ON',
        skills:['React','HTML','CSS','JavaScript'],
        body:'This is the website you\'re currently browsing. I hope you are enjoying '+
                'your experience and thank you for taking the time to browse my website.',
        date:'June 2023 - July 2023',
        icon:<FontAwesomeIcon icon={faReact} />,
        button:false,
        list:false,
        github:false,
        link:''
    },
    {
        h3:'Bachelor of Computer Science, Honours',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Problem Solving','Fast Learner','Motivation'],
        body:'Networking, making friends, and developing hard/soft skills is the essence '+
              'of an university education.',
        date:'September 2017 - April 2023',
        icon:<FontAwesomeIcon icon={faSchool} />,
        button:false,
        list:false,
        github:false,
        link:''
    },
    {
        h3:'Mock E-commerce Website',
        h4:'Windsor, ON',
        skills:['HTML','CSS','JavaScript','PHP','MySQL'],
        body:'This mimics an e-commerce website experience without a checkout ' +
             'functionality. Create an account and experience it as an user. When ' +
             'registering, use fake information as this project was meant to provide ' +
             'web development practice.',
        date:'January 2022 - April 2022',
        icon:<FontAwesomeIcon icon={faCode} />,
        button:true,
        list:false,
        github:false,
        link:'https://manso118.myweb.cs.uwindsor.ca/COMP3077/FinalProject/PHP/home/index.php'
    },
    {
        h3:'Web Designer',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Drupal','HTML','CSS','Web Accessibility'],
        body:[
                'Discussed potential web design ideas with co-workers while adhering to web accessibility guidelines',
                'Built a modern looking and accessible website with the assistance of Drupal in addition to the use of ' +
                'custom HTML and CSS code',
                'Developed thorough instructional videos to assist future website maintainers'
             ],
        date:'May 2021 - September 2021',
        icon:<FontAwesomeIcon icon={faBriefcase} />,
        button:true,
        list:true,
        github:false,
        link:'https://www.uwindsor.ca/institutional-analysis/'
    },
    {
        h3:'UX/UI Designer',
        h4:'Communitech | Remote | Co-op',
        skills:['Wordpress','Squarespace','Teamwork','Wireframing'],
        body:[
                'Understood client needs and outlined a plan of action to compete the deliverables within the two-to-six ' +
                'week engagement',
                'Discussed website design ideas with teammates and created wireframes using Adobe XD',
                'Created and redesigned websites using content management systems such as Squarespace and WordPress'
             ],
        date:'September 2020 - December 2020',
        icon:<FontAwesomeIcon icon={faBriefcase} />,
        button:false,
        list:true,
        github:false,
        link:''
    },
    {
        h3:'Tier 1 Support Technician',
        h4:'University of Windsor | Windsor, ON | Co-op',
        skills:['Troubleshoot','Customer Service','TeamDynamix'],
        body:[
                'Created service request tickets on behalf of faculty, staff, and students using TeamDynamix',
                'Engaged with colleagues to find quick and suitable solutions to a client\'s technical problems',
                'Provided support to clients in the areas of password resets, minor network problems, and more'
             ],
        date:'January 2020 - March 2020',
        icon:<FontAwesomeIcon icon={faBriefcase} />,
        button:false,
        list:true,
        github:false,
        link:''
    }
];