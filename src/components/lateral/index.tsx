import { NavElements } from './style'
import { FiGithub, FiLinkedin, FiGitlab, FaInstagram } from '../../utils/icons'

const SocialIconsComponent = ({ theme }: any)=>{
    const sizeIcons = theme.icon? theme.icon : 25
    return (
        <NavElements theme={theme}>
            <a href='https://github.com/quintansc' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGithub size={sizeIcons} color={theme.color}/></a>
            <a href='https://gitlab.com/QuintansC' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGitlab size={sizeIcons}  color={theme.color}/></a>
            <a href='https://www.instagram.com/quintansdev/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaInstagram size={sizeIcons} color={theme.color}/></a>
            <a href='https://www.linkedin.com/in/gustavo-quintans-59206242/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiLinkedin size={sizeIcons}  color={theme.color}/></a>
        </NavElements>
    )
}

export default SocialIconsComponent