import type { NextPage } from 'next'
import Image from 'next/image'
import Default from '@/layouts/Default'
import { Container, Typography, Unstable_Grid2 as Grid } from '@mui/material'


const Home: NextPage = () => {

    return (
        <Default title="Home page">
            <>
                <Container className="gradient1_bg" sx={{ pt: 12, display: "flex", justifyContent: "center" }} component={"section"} maxWidth={false}>
                    <Grid container sx={{ width: "100%", flexDirection: { xs: "column", smm: "row" }, justifyContent: { xs: "center", lg: "space-between" }, alignItems: "center", flexWrap: "nowrap" }} maxWidth={"lg"}>
                        <Grid marginBottom={6} {...{ md: 7, lg: 9 }}>
                            <Typography component={'h1'} sx={{ fontSize: { xs: 24, xsmm: 32, lg: 56 }, fontWeight: 800 }}>
                                Get The <span className='secondary'> Best Prices</span> From <br />
                                Sellers Around You
                            </Typography>
                            <Typography component={'p'} sx={{ fontSize: 18 }}>
                                Stay up-to-date with the latest average market prices for various commodities, helping you make well-informed decisions and get the best value for your money.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </>
        </Default >
    )
}

export default Home
