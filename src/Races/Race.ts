export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  get getName(): string {
    return this.name;
  }

  get getDexterity(): number {
    return this.dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}