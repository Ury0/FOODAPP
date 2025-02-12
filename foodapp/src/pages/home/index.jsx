import { AboutSection } from "../../components/AboutSection"
import { BannerSection } from "../../components/BannerSection"
import { FormSection } from "../../components/BannerSection/formSection"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/header"
import { RestauranteSection } from "../../components/RestauranteSection"
import "C:/Users/User/Documents/GitHub/FOODAPP/foodapp/src/style/homePage.css";
export const HomePage = ()=>{
    return(
        <>
           <Header/>
           <main>
                <BannerSection/>
                <RestauranteSection/>
                <AboutSection/>
                <FormSection/>
            </main> 
            <Footer/>
        </>
    )
}  