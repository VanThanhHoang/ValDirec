import { ScreenName } from "@/navigation";
import { ImageSourcePropType } from "react-native";

export type HomeMenuItemProps = {
  title: string;
  image: ImageSourcePropType;
  screen: ScreenName;
};
