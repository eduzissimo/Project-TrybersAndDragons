import Fighter from '../Fighter/Fighter';

abstract class Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    this.player1 = player1;
    this.player2 = player2;
  }

  abstract fight(): number;
}

export default Battle;
