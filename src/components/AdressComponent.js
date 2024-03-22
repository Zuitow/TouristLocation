import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Adress({ adress }) {
    return(
        <Text style={estilosTu.adress}>{adress}</Text>
    )
}