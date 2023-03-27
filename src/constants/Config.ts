import {StatusBar} from "react-native";

export const HeaderHeight = 120;
export const StatusBarHeight = StatusBar.currentHeight;
// @ts-ignore
export const HeaderHeightWithStatusBar = HeaderHeight + StatusBar.currentHeight as number+5;
