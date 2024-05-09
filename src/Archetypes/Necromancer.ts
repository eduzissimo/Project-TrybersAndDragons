import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energy: EnergyType = 'mana';
  private static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypesInstances += 1;
  }

  static createdArchetypesInstances(): number {
    return Necromancer._createdArchetypesInstances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}