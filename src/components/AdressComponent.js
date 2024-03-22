import { Text } from "react-native";
import { estilosTu } from "../styles/Styless";

export default function Adress({ adress, styleAdd}) {
    return(
        <Text style={styleAdd}>{adress}</Text>
    )
}