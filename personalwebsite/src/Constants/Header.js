import {faFileLines, faDiagramProject, faMessage} from '@fortawesome/free-solid-svg-icons';

export const icons=[
    {
        id: 'resume',
        link: require('../assets/resume.pdf'),
        content: 'Resume',
        icon:faFileLines,
        target:'_blank'
    },
    {
        id: 'timeline',
        link: '#timeline',
        content: 'Timeline',
        icon:faDiagramProject,
        target:''
    },
    {
        id: 'contact',
        link: '#contactMe',
        content: 'Contact',
        icon:faMessage,
        target:''
    }
];

export const intro=`<span class='color'>ONE</span> man.<br>`+
            ` <span class='color'>MANY</span> journeys.<br>`+
            `This is <span class='color'>MY</span> journey in <span class='color'>WEB DEVELOPMENT</span>.<br>`+
            `Follow <span class='color'>MY</span> journey.<br>`+
            `Or be a <span class='color'>PART</span> of it.<br>`+
            `<span class='color'>YOU DECIDE.</span>`;