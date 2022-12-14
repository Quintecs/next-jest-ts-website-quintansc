import { NavElements } from './style'

import { FaGithubSquare, FaGitlab, FaLinkedin } from '../../utils/icons'
import { FaInstagram, FaInstagramSquare } from 'react-icons/fa';

const LateralComponent = ()=>{
    const sizeIcons = 40; 
    return (
        <NavElements>
            <a href='https://github.com/quintansc' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaGithubSquare size={sizeIcons} color={'black'}/></a>
            <a href='https://gitlab.com/QuintansC' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaGitlab size={sizeIcons} color={'black'}/></a>
            <a href='https://www.linkedin.com/in/gustavo-quintans-59206242/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaLinkedin size={sizeIcons} color={'black'}/></a>
            <a href='https://www.instagram.com/quintansdev/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaInstagramSquare size={sizeIcons} color={'black'}/></a>
        </NavElements>
    )
}

export default LateralComponent