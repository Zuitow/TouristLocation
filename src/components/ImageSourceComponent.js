import { estilosTu } from "../styles/Styless";
import { Image } from "react-native";

export default function ImageComponent({ source, stylesImage }) {
    return(
        <Image source={source} style={stylesImage}/>
    )
}