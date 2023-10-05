import { NavElements } from './style'
import { FiGithub, FiLinkedin, FiGitlab, FaInstagram } from '../../utils/icons'
import Link from 'next/link'

const SocialIconsComponent = ({ theme }: SocialIconType)=>{
    const sizeIcons = theme?.icon? theme.icon : 25
    return (
        <NavElements theme={theme}>
            <Link href='https://github.com/quintansc' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGithub size={sizeIcons} color={theme?.color}/></Link>
            <Link href='https://gitlab.com/QuintansC' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiGitlab size={sizeIcons}  color={theme?.color}/></Link>
            <Link href='https://www.instagram.com/quintansdev/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FaInstagram size={sizeIcons} color={theme?.color}/></Link>
            <Link href='https://www.linkedin.com/in/gustavo-quintans-59206242/' target="_blank" rel="noreferrer" data-testid="lateralElements"><FiLinkedin size={sizeIcons}  color={theme?.color}/></Link>
        </NavElements>
    )
}

export default SocialIconsComponent