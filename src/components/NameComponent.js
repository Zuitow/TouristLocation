import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Name({ name }) {
    return(
        <Text style={estilosTu.name}>{name}</Text>
    )
}