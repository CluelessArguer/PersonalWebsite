import {icons, intro} from '../../Constants/Header';
import CartoonMe from '../../Images/Portrait.png';
import styles from '../../CSS/Header.module.css';
import Icon from '../../Components/Icon';
import Type from '../../Components/Type';

const Header = ()=>{
    return (
        <header className={`flex-row ${styles.header}`}>
            <div className={`flex-column ${styles['about-me']}`}>
                <h1 className={styles['heading-1']}>Marc Mansour</h1>
                <h2 className={styles['heading-2']}>Aspiring Web Developer</h2>
                <div className={styles.line}></div>
                <div className={styles.spacing}>
                    <Type message={intro}/>
                </div>
                <div className={`flex-row icon-group`}>
                    {                            
                        icons.map((icon, index)=>(
                            <a  key={index} href={icon.link} target={icon.target}><Icon id={icon.id} data-tooltip-content={icon.content} icon={icon.icon}/></a>
                        ))
                    }
                </div>
            </div>
            <img className={styles.img} alt='Marc Mansour' src={CartoonMe}/>
        </header>
    );
}

export default Header;