import { Dimensions } from "react-native";

const deviceWithDp = Dimensions.get('window').width;
const uiWithPx = 750;
export default function px2dp(uiElementPx: number) {
    return uiElementPx * deviceWithDp / uiWithPx;
}