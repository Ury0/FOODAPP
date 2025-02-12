import { RestauranteList } from "./restauranteList"
import "C:/Users/User/Documents/GitHub/FOODAPP/foodapp/src/style/restauranteSection.css"
export const RestauranteSection = () => {
    const restaurantelist = [
        {
            id: 1,
            img: "src/assets/Restaurant1.png",
            titulo: "pizza",
            descriçao: "lorem ipsom"
        },
        {
            id: 2,
            img: "src/assets/Restaurant2.png",
            titulo: "pizza",
            descriçao: "lorem ipsom"
        },
        {
            id: 3,
            img: "src/assets/Restaurant3.png",
            titulo: "pizza",
            descriçao: "lorem ipsom"
        }
    ]
    return(
        <section className="restauranteSection">
            <img src="src/assets/RestaurantIcon.svg" alt="" />
            <h2>Restaurantes famosos</h2>
            <RestauranteList restaurantelist={restaurantelist}/>
        </section>
    )
}
