import { SeparatorProps } from '@/types/types';
import './separator.css';

const Separator = ({containedStyles} : SeparatorProps) => {
    return <div className={`separator ${containedStyles}`}></div>
}

export default Separator;