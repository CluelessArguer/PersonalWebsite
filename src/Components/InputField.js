import { useField } from "formik";
import {faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const InputField=({label,className,labelclass, iconClass, ...props})=>{
    const [field, meta]=useField(props);
    const error=meta.touched&&meta.error;
    return (
        <>
            <label htmlFor={props.name} className={labelclass}>{label}</label>
            <input className={error?className + ' input-error':className} {...props} {...field}/>
            {error&&<span className={iconClass}><FontAwesomeIcon icon={faTriangleExclamation} /> {meta.error}</span>}
        </>
    );
}

export default InputField;