import { NavElements } from './style'

import { FiGithub, FiLinkedin, FiGitlab, FaInstagram } from '../../utils/icons'

const SocialIconsComponent = ()=>{
    const sizeIcons = 25; 
    return (
        <NavElements>
            <a href='https://github.com/quintansc' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGithub size={sizeIcons} color={'#999ED7'}/></a>
            <a href='https://gitlab.com/QuintansC' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGitlab size={sizeIcons} color={'#999ED7'}/></a>
            <a href='https://www.instagram.com/quintansdev/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaInstagram size={sizeIcons} color={'#999ED7'}/></a>
            <a href='https://www.linkedin.com/in/gustavo-quintans-59206242/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiLinkedin size={sizeIcons} color={'#999ED7'}/></a>
        </NavElements>
    )
}

export default SocialIconsComponent