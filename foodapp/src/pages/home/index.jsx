import { AboutSection } from "../../components/AboutSection"
import { BannerSection } from "../../components/BannerSection"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/header"
import { RestauranteSection } from "../../components/RestauranteSection"

export const HomePage = ()=>{
    return(
        <>
           <Header/>
           <main>
                <BannerSection/>
                <RestauranteSection/>
                <AboutSection/>
            </main> 
            <Footer/>
        </>
    )
}