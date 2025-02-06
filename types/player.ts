export type Player = {
  username: string;
  isRoomOwner: boolean;
  cardsInHand: Array<number>;
};

export type PlayerAction = {
  updateUsername: (username: string) => void;
  updateIsRoomOwner: (isRoomOwner: boolean) => void;
  updateCardsInHand: (cardsInHand: Array<number>) => void;
};
