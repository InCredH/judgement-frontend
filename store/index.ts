import { Player, PlayerAction } from "@/types/player";
import { Room, RoomAction } from "@/types/room";
import { Round, RoundAction } from "@/types/round";
import { SubRound, SubRoundAction } from "@/types/subRound";
import { create } from "zustand";

export const usePlayerStore = create<Player & PlayerAction>((set) => ({
  username: "",
  isRoomOwner: false,
  cardsInHand: [],
  updateUsername: (username) => set({ username }),
  updateIsRoomOwner: (isRoomOwner) => set({ isRoomOwner }),
  updateCardsInHand: (cardsInHand) => set({ cardsInHand }),
}));

export const useSubRoundStore = create<SubRound & SubRoundAction>((set) => ({
  powerCard: 0,
  cardsPlayed: [],
  updatePowerCard: (powerCard) => set({ powerCard }),
  updateCardsPlayed: (cardsPlayed) => set({ cardsPlayed }),
}));

export const useRoundStore = create<Round & RoundAction>((set) => ({
  roundNumber: 0,
  playerPredictions: [],
  leaderboard: [],
  updateRoundNumber: (roundNumber) => set({ roundNumber }),
  updatePlayerPredictions: (playerPredictions) => set({ playerPredictions }),
  updateLeaderboard: (leaderboard) => set({ leaderboard }),
}));

export const useRoomStore = create<Room & RoomAction>((set) => ({
  roomCode: "",
  players: [],
  numPlayers: 0,
  numRounds: 0,
  isRoomActive: false,
  updateRoomCode: (roomCode) => set({ roomCode }),
  updatePlayers: (players) => set({ players }),
  updateNumPlayers: (numPlayers) => set({ numPlayers }),
  updateNumRounds: (numRounds) => set({ numRounds }),
  updateIsRoomActive: (isRoomActive) => set({ isRoomActive }),
}));
