import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Name({ name, styleName }) {
    return(
        <Text style={styleName}>{name}</Text>
    )
}