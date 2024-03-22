import { View } from "react-native";
// Eita como ele chama os components
import Name from "../components/NameComponent";
import Description from "../components/DescriptionComponent";
import Adress from "../components/AdressComponent";
import ImageComponent from "../components/ImageSourceComponent";
import { estilosTu } from "../styles/Styless";

export default function TouristPage() {
  return (
    <View style={estilosTu.containerConteudo}>
      <Name styleName={estilosTu.name} name="Galatea" />
      <ImageComponent stylesImage={estilosTu.img} source={require("../assets/images/galatea.jpg")}/>
      <Description styleDesc={estilosTu.description} description="Galatea a cidade de Ouro, o local da Justiça contra os maculados." />
      <Adress styleAdd={estilosTu.adress} adress="A Localização de Galatea é desconhecido pelos comuns." />

    </View>
  );
}
