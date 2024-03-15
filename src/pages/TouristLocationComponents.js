import { View, Text } from "react-native";
// Eita como ele chama os components
import Name from "../components/NameComponent";
import Description from "../components/DescriptionComponent";
import Adress from "../components/AdressComponent";

export default function TouristPage() {
  return (
    <View>
      <Name name="Galatea" />
      <Description description="Galatea a cidade de Ouro, o local da Justiça contra os maculados." />
      <Adress adress="?????????" />
    </View>
  );
}
