import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Tooltip } from 'react-tooltip';

const Icon=({id, ...props})=>{
    return (
        <>
            <FontAwesomeIcon className='icon' data-tooltip-id={id} data-tooltip-place='bottom' {...props} />
            <Tooltip className='tooltip' id={id}/>
        </>
    );
}

export default Icon;