import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from '../../Components/TimelineElement';
import styles from '../../CSS/Main.module.css';
import {timeline} from '../../Constants/Timeline';

const Main=()=>{
    return (
        <main id='timeline'>
            <section>
                <VerticalTimeline lineColor='#544C4A'>
                    {
                        timeline.map((element,index)=>(
                            <TimelineElement
                            key={index}
                            h3={element.h3}
                            h4={element.h4}
                            skills={element.skills}
                            text={element.body} 
                            button={element.button}  
                            list={element.list}
                            github={element.github}
                            link={element.link}
                            githublink={element.githubLink}
                            contentStyle={{ background: '#FFFFFF', color: '#000000', border:'1px solid #544C4A', boxShadow:'-1px 1px 0 1px #544C4A'}}
                            contentArrowStyle={{ borderRight: '8px solid  #544C4A' }}
                            date={element.date}
                            iconClassName={styles['icon-style']}
                            icon={element.icon}
                            />
                        ))
                    }                      
                </VerticalTimeline>
            </section>
        </main>
    );
}

export default Main;