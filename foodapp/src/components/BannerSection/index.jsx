import "C:/Users/User/Documents/GitHub/FOODAPP/foodapp/src/style/bannerSection.css"
export const BannerSection = () => {
    return(
        <div className="BannerSection">
            <section className="sec1">
                <h1>Descubra o melhor<br />aplicativo de comida</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.</p>
                <a href="#">Saiba mais</a>
            </section>
            <section className="sec2">

                <img src="src\assets\BannerFood.png" alt="" /> 
            
            </section>
        </div>
    )
}