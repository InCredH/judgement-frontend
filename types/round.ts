type PlayerPredictionPair = {
  username: string;
  prediction: number;
};

type PlayerRoundScores = {
  username: string;
  allRoundScores: Array<number | null>;
};

export type Round = {
  roundNumber: number;
  playerPredictions: Array<PlayerPredictionPair>;
  leaderboard: Array<PlayerRoundScores>;
};

export type RoundAction = {
  updateRoundNumber: (roundNumber: number) => void;
  updatePlayerPredictions: (
    playerPredictions: Array<PlayerPredictionPair>
  ) => void;
  updateLeaderboard: (leaderboard: Array<PlayerRoundScores>) => void;
};
