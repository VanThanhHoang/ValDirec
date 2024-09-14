import {appImage} from '@/asset';
import {HomeMenuItemProps} from './type';
import {resourcesKey} from '@/lang/i18n.cofig';
export const homeMenuItemList: HomeMenuItemProps[] = [
  {title: resourcesKey.agents, image: appImage.agents, screen: 'Agents'},
  {title: resourcesKey.weapons, image: appImage.weapons, screen: 'Weapons'},
  {title: resourcesKey.ranks, image: appImage.ranks, screen: 'Ranks'},
  {title: resourcesKey.sprays, image: appImage.sprays, screen: 'Sprays'},
  {
    title: resourcesKey.playerCards,
    image: appImage.playercards,
    screen: 'PlayerCards',
  },
  {title: resourcesKey.maps, image: appImage.maps, screen: 'Maps'},
  {
    title: resourcesKey.gunbuddies,
    image: appImage.gunbuddies,
    screen: 'GunBuddies',
  },
];
