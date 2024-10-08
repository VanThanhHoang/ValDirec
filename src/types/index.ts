// Types cho Agents
interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: string[] | null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  abilities: Ability[];
  voiceLine: any; // Có thể định nghĩa chi tiết hơn nếu cần
}

interface AgentsResponse {
  status: number;
  data: Agent[];
}

interface AgentResponse {
  status: number;
  data: Agent;
}
export type {Agent, AgentsResponse, AgentResponse};
