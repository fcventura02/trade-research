import { Address, Restaurante, RestaurantePhoto, RestauranteInfo, Title } from "./styled";
import { RatingView } from "react-simple-star-rating";
import restaurante from '../../assets/restaurante-fake.png'

const RestauranteCard = () => {
	
  return (
    <Restaurante>
      <RestauranteInfo>
        <Title>Nome do Restaurante</Title>
        <RatingView stars={5} ratingValue={3} size={18}/>
        <Address>Av. dos andradas, 2020</Address>
      </RestauranteInfo>
			<RestaurantePhoto src={restaurante} alt="Foto do Restaurante" />
    </Restaurante>
  );
};

export default RestauranteCard;
