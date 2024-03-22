import { estilosTu } from "../styles/Styless";
import { Image } from "react-native";

export default function ImageComponent({ source }) {
    return(
        <Image source={source} style={{width: 500, height: 500, alignSelf: 'center'}}/>
    )
}