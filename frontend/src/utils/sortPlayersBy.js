export const sortPlayersBy = (players, sortBy) => {
  const sortPlayersBy = [...players].sort((playerA, playerB) =>
    playerA[sortBy] < playerB[sortBy] ? 1 : -1
  );
  return sortPlayersBy;
};
