import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SocialIconsComponent from "../lateral";

const UserComponent = ({user, teste}: any)=>{
    const [userData] = useState(user);
    const createdAt = new Date(userData.created_at).getFullYear();
    const anoAtual = new Date().getFullYear();  
    
    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', maxHeight: '250px', backgroundColor: '#1D1D1F', marginTop: '60px'}} >
                <Grid item xs={2}><img src={userData.avatar_url} style={{ maxWidth: '275px', maxHeight: '240px'}} alt="profileImage"></img></Grid>
                <Grid item xs={10}> 
                    <Container >
                            <h2 style={{ fontFamily: 'Inter'}}>{userData.name}</h2>

                            <Grid item xs={12}>
                                <p style={{ fontFamily: 'Inter'}}>{userData.company}</p> 
                                <p style={{ fontFamily: 'Inter'}}>{userData.bio}</p>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', width: '95%'}}>
                                <pre style={{ fontFamily: 'Inter', display: 'flex', alignItems: 'center'}}> <HiOutlineLocationMarker size={24}/>{userData.location}  <img src="/brasil.png" alt="brasil icon" width={18} /></pre>
                                <p style={{ color:'#999ED7', fontFamily: 'Inter' }}>{`+${anoAtual - createdAt} Years of Experience`}</p>
                            </Grid>
                    </Container>
                </Grid>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={9} style={{ marginTop: '10px', zIndex: '0'}}>
                    <img src="/code1.png" alt="" height='70px'></img>
                </Grid>
                 <Grid item={true} xs={3}><SocialIconsComponent theme={{ backgroundColor: "#1D1D1F", color: "#DAD9DE", size: "67px", justify: 'space-between', icon: 29}} /></Grid> <br></br>
            </div>
        </div>
    )
}

export default UserComponent;