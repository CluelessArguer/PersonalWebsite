import {faHtml5, faCss3Alt, faSquareJs, faReact, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faMobile, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const social= [
    {
        icon:faLinkedinIn,
        link:'https://www.linkedin.com/in/marc-mansour-8616b81b6'
    },
    {
        icon:faEnvelope,
        link:'mailto:webdev.design.code@gmail.com'
    },
    {
        icon:faGithub,
        link:'https://github.com/CluelessArguer'
    }
];

export const fields=[
    {
        label:'Name',
        type:'text',
        name:'name',
        placeholder:'Enter your full name'
    },
    {
        label:'Email',
        type:'email',
        name:'email',
        placeholder:'Enter your email'
    },
    {
        label:'Subject',
        type:'text',
        name:'subject',
        placeholder:'Enter subject'
    }
];

export const skills=[
    {
        skill: 'Html5',
        icon:faHtml5
    },
    {
        skill: 'CSS3',
        icon:faCss3Alt
    },
    {
        skill: 'Javascript',
        icon:faSquareJs

    },
    {
        skill: 'React',
        icon:faReact
    },
    {
        skill: 'Responsive Design',
        icon:faMobile
    }
];

export const message='Feel free to contact me for project propositions, website inquiries, and more...';

export const sendMessage=(values, actions)=>{
    fetch('https://forward.marcmansour.ca/send',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

    actions.resetForm({
        values:{
            name:'', 
            email:'', 
            subject:'', 
            message:''
        }
    })
}