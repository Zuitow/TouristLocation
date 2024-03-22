import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Description({ description }) {
    return(
        <Text style={estilosTu.description}>{description}</Text>
    )
}