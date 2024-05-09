import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(name: string, special: number, cost: number) {
    this.name = name;
    this.special = special;
    this.cost = cost;
  }

  get getName(): string {
    return this.name;
  }

  get getSpecial(): number {
    return this.special;
  }

  get getCost(): number {
    return this.cost;
  }

  static createdArchetypesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}