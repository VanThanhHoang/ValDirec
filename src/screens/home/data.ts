import {appImage} from '@/asset';
import {HomeMenuItemProps} from './type';
import {resourcesKey} from '@/lang/i18n.cofig';
import {ScreenName} from '@/navigation';
export const homeMenuItemList: HomeMenuItemProps[] = [
  {
    title: resourcesKey.agents,
    image: appImage.agents,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.weapons,
    image: appImage.weapons,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.ranks,
    image: appImage.ranks,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.sprays,
    image: appImage.sprays,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.playerCards,
    image: appImage.playercards,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.maps,
    image: appImage.maps,
    screen: ScreenName.AgentScreen,
  },
  {
    title: resourcesKey.gunbuddies,
    image: appImage.gunbuddies,
    screen: ScreenName.AgentScreen,
  },
];
