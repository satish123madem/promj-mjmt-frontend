import {
    Button,
    Container,
    Paper,
    Typography,
    Link,
    useTheme
} from "@mui/material";

import './Home.css'

const Home = () => {

    const { palette } = useTheme()

    return <Container
        maxWidth="xl"
        disableGutters
        className="welcome-banner-container"
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(to top, ${palette.primary.light}, #FFF, #FFF,#FFF)`
        }}>
        <div className="banner-adv-container">
            <img src="/images/home_banner.svg" height="400px" />
        </div>
        <div elevation={0} className="banner-nav-container">
            <div elevation={0}>
                <Typography variant="h3" textAlign="center" color={palette.primary.light}>PJMT</Typography>
                <Typography variant="caption" color={palette.info.light}>A place to organize and colloborate</Typography>
            </div>

            <Typography variant="body2">
                Connect | Colloborate | Complete
            </Typography>
            
            <div className="nav-btns">
               <Button variant="contained" sx={{m:1 }}>Sign up</Button>
               <Button variant="contained" sx={{m:1}}>Login</Button>

            </div>

        </div>
    </Container>
}

export default Home;