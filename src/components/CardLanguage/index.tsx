import { Grid } from "@mui/material"
import Link from "next/link"
import { SkillsContainer } from "./styles"

const CardLanguage = ({ icon, link, infos }: any)=>{
    return (
        <SkillsContainer item xs={3.5}>
            <Grid item xs={12}>
                <Grid item xs={4}>{icon}</Grid>
                <Grid item xs={8}>{infos.title}</Grid>
            </Grid>

            <Link href={link.link}>{infos.textContent}</Link>
        </SkillsContainer>
    )
} 

export default CardLanguage