export type Room = {
  roomCode: string;
  players: Array<String>;
  numPlayers: number;
  numRounds: number;
  isRoomActive: boolean;
};

export type RoomAction = {
  updateRoomCode: (roomCode: string) => void;
  updatePlayers: (players: Array<String>) => void;
  updateNumPlayers: (numPlayers: number) => void;
  updateNumRounds: (numRounds: number) => void;
  updateIsRoomActive: (isRoomActive: boolean) => void;
};
