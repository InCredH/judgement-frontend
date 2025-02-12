type PlayerCardPair = {
  username: string;
  card: number;
};

export type SubRound = {
  powerCard: number;
  cardsPlayed: Array<PlayerCardPair>;
};

export type SubRoundAction = {
  updatePowerCard: (powerCard: number) => void;
  updateCardsPlayed: (cardsPlayed: Array<PlayerCardPair>) => void;
};
