import { View } from "react-native";
// Eita como ele chama os components
import Name from "../components/NameComponent";
import Description from "../components/DescriptionComponent";
import Adress from "../components/AdressComponent";
import ImageComponent from "../components/ImageSourceComponent";

export default function TouristPage() {
  return (
    <View>
      <Name name="Galatea" />
      <ImageComponent source={require("../assets/images/galatea.jpg")}/>
      <Description description="Galatea a cidade de Ouro, o local da Justiça contra os maculados." />
      <Adress adress="A Localização de Galatea é desconhecido pelos comuns." />

    </View>
  );
}
