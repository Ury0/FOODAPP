

import PropTypes from 'prop-types';
import "C:/Users/User/Documents/GitHub/FOODAPP/foodapp/src/style/restauranteCard.css"
export const RestauranteCard = ({ restaurante }) => {
  return (
    <li className='restauranteCard'>
      <img src={restaurante.img} alt="Imagem do Restaurante" />
      <h3>{restaurante.titulo}</h3>
      <p>{restaurante.descriçao}</p>
    </li>
  );
};

// Validação de prop-types
RestauranteCard.propTypes = {
  restaurante: PropTypes.shape({
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descriçao: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestauranteCard;
