import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Description({ description, styleDesc }) {
    return(
        <Text style={styleDesc}>{description}</Text>
    )
}