import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetypes {
  private _energy: EnergyType = 'stamina';
  private static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypesInstances += 1;
  }

  static createdArchetypesInstances(): number {
    return Warrior._createdArchetypesInstances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}