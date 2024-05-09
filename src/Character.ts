import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength = getRandomInt(1, 10);
  private _defense = getRandomInt(1, 10);
  private _dexterity = getRandomInt(1, 10);
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race(): Race {
    return this._race;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const attackPoints = this._strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    this.getLifePoints();
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  private getLifePoints(): void {
    this._maxLifePoints = Math.min(
      this._maxLifePoints + getRandomInt(1, 10),
      this._race.maxLifePoints,
    );
    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter): void {
    if (this._energy.amount === 10) {
      const attackPoints = this._strength * 3;
      enemy.receiveDamage(attackPoints);
      this._energy.amount -= 10;
    }
  }
}
// Special: Quando o personagem estiver com a energia cheia, seu primeiro ataque causará o triplo de dano
// em compensação, ele perderá toda sua energia.

export default Character;