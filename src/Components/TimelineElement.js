import {VerticalTimelineElement }  from 'react-vertical-timeline-component';
import styles from '../CSS/Main.module.css';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import Text from './Text';

const TimelineElement=({h3,h4,skills,text,button,list,github,link,githublink,...props})=>{
    return (
        <VerticalTimelineElement
            {...props}
        >
            <h3 className='vertical-timeline-element-title'>{h3}</h3>
            <h4 className={`vertical-timeline-element-subtitle ${styles.subtitle}`}>{h4}</h4>                        
            <div className={styles.work}>
                {
                    skills.map((skill,index)=>(
                        <span key={index} className={styles.skills}>{skill}</span>
                    ))
                }
            </div>
            { 
                list===false
                ?<Text message={text}/>
                :<ul className={styles['work-tasks']}>
                    {
                        text.map((point,index)=>(
                            <li key={index}>{point}</li>
                        ))
                    }
                </ul>
            }
            { button===true &&
                <div className={styles['icon-group']} >
                    <a href={link} target='_blank' rel='noreferrer' className={styles.button}>
                        <Icon className={styles.icon} icon={faGlobe} />
                        Live Website
                    </a>
                    {github===true &&
                        <a href={githublink} target='_blank' rel='noreferrer' className={styles.button}>
                            <Icon className={styles.icon} icon={faGithub} />
                            Github
                        </a>
                    }
                </div>
            }
        </VerticalTimelineElement>
    );
}

export default TimelineElement;