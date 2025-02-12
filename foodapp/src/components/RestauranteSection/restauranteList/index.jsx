import PropTypes from 'prop-types';
import { RestauranteCard } from "./restauranteCard";
import "C:/Users/User/Documents/GitHub/FOODAPP/foodapp/src/style/restauranteList.css"
export const RestauranteList = ({ restaurantelist }) => {
    return (
        <ul className='restauranteList'>
            {restaurantelist.map(restaurante => (
                <RestauranteCard key={restaurante.id} restaurante={restaurante} />
            ))}
        </ul>
    );
};

// Validação de prop-types
RestauranteList.propTypes = {
    restaurantelist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
            descriçao: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default RestauranteList;
