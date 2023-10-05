import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SocialIconsComponent from "../Laterals";
import { ContentUserComponent, TextUserComponent, DescriptionUserComponent, ImageUserComponent, StyledDiv } from "./styles";

const UserComponent = ({user}: UserComponent)=>{
    const [userData] = useState(user);
    const createdAt = new Date(userData.created_at).getFullYear();
    const anoAtual = new Date().getFullYear();  
    
    return(
        <StyledDiv>
            <ContentUserComponent>
                <Grid item lg={2} sm={12}><ImageUserComponent src={userData.avatar_url} alt="profileImage" /></Grid>
                <Grid item lg={10} sm={12}> 
                    <Container>
                        <h2 style={{ fontFamily: 'Inter'}}>{userData.name}</h2>

                        <Grid item xs={12}>
                            <p style={{ fontFamily: 'Inter'}}>{userData.company}</p> 
                            <p style={{ fontFamily: 'Inter'}}>{userData.bio}</p>
                        </Grid>
                        <DescriptionUserComponent item xs={12}>
                            <pre style={{ fontFamily: 'Inter', display: 'flex', alignItems: 'center'}}> <HiOutlineLocationMarker size={24}/>{userData.location}  <img src="/brasil.png" alt="brasil icon" width={18} /></pre>
                            <p style={{ color:'#999ED7', fontFamily: 'Inter' }}>{`+${anoAtual - createdAt} Years of Experience`}</p>
                        </DescriptionUserComponent>
                    </Container>
                </Grid>
            </ContentUserComponent>

            <TextUserComponent>
                <Grid item xs={9} style={{ marginTop: '10px', zIndex: '0'}}>
                    <img src="/code1.png" alt="" height='70px'></img>
                </Grid>
                 <Grid item={true} xs={3}><SocialIconsComponent theme={{ backgroundColor: "#1D1D1F", color: "#DAD9DE", size: "67px", justify: 'space-between', icon: 29}} /></Grid> <br></br>
            </TextUserComponent>
        </StyledDiv>
    )
}

export default UserComponent;