import Icon from './Icon';
import styles from '../CSS/Footer.module.css';
import {toolkit} from '../Constants/Tools';

const Tools=()=>{
    return(
        <div>
            <h3>My Toolkit</h3>
            <div className='flex-row'>
            {
                toolkit.map((skill,index)=>(
                    <div className='flex-column'>
                        <Icon key={index} className={styles.icon} icon={skill.icon}/>
                        <span className='text-white'>{skill.skill}</span>
                    </div>
                ))
            }
            </div>
        </div>
    );
}

export default Tools;