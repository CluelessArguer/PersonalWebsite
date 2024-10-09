import styles from './Contact.module.css';
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {Form, Formik, Field} from 'formik';
import InputField from './InputField';
import Text from './Text';
import Icon from './Icon';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { SignupSchema } from '../Constants/SignupSchema';
import {social, fields, skills, message, sendMessage} from '../Constants/Contact';

const Contact=()=>{
    return (
        <div id='contactMe' className={`flex-row ${styles.contact}`}>
            <div className={styles.connect}>
                <h3 className={styles.heading3}>Let's connect</h3>   
                <Text message={message}/>
                <div className={`flex-row ${styles['icon-group']}`}>
                    {
                        social.map((icon,index)=>(
                            <a key={index} className={styles.link} href={icon.link} target='_blank' rel='noreferrer'>
                                <Icon className={styles.icon} icon={icon.icon}/>
                            </a>
                        ))
                    }
                </div>
                <h3 className={styles.toolkit}>My Toolkit</h3>
                <div className={`flex-row ${styles['icon-group']}`}>
                    {
                        skills.map((skill,index)=>(
                            <Icon key={index} className={styles['icon-skill']} id={skill.skill} data-tooltip-content={skill.skill} icon={skill.icon}/>
                        ))
                    }
                </div>
            </div>             
           {/* <Formik
                initialValues={{name:'', email:'', subject:'', message:''}}
                validationSchema={SignupSchema}
                onSubmit={sendMessage}
            >
                    {(props)=>(
                        <Form className={`flex-column ${styles.form}`} noValidate>
                            {
                                fields.map((field,index)=>(
                                    <InputField
                                        key={index}
                                        label={field.label}
                                        className='input'
                                        labelclass='label'
                                        iconClass={styles.errorMessage}
                                        type={field.type}
                                        name={field.name}                    
                                    />
                                ))
                            }
                            <label className='label'>Message</label>
                            <Field name='message' className='textarea' rows='10' as='textarea'/>
                            {props.touched.message&&props.errors.message&&<span className={styles.errorMessage}><FontAwesomeIcon icon={faTriangleExclamation} /> {props.errors.message}</span>}
                            <button className='submit' type="submit">Send Message</button>
                        </Form>
                    )}
            </Formik>*/}
        </div>
    )
}

export default Contact;