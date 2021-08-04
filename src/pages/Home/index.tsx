import { useState } from "react";
import MaterialIcon from "@material/react-material-icon";
import TextField, { Input } from "@material/react-text-field";
import {
  CarouselTitle,
  Carousel,
  Container,
  Logo,
  Search,
  Wrapper,
} from "./styles";
import { Card, Map, Modal, RestauranteCard } from "../../components";
import logo from "../../assets/logo.svg";
import restaurante from "../../assets/restaurante-fake.png";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [modalOpened, setModalOpened] = useState(false);
  const handleChange = (event: string) => setSearch(event);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo" />
          <TextField
            label="Pesquisar"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}
          >
            <Input
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
            />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
            <Card photo={restaurante} title="nome do restaunte" />
          </Carousel>
        </Search>
        <RestauranteCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <h1>Title</h1>
      </Modal>
    </Wrapper>
  );
};
export default Home;
