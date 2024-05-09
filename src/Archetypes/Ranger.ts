import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energy: EnergyType = 'stamina';
  private static _createdArchetypesInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypesInstances += 1;
  }

  static createdArchetypesInstances(): number {
    return Ranger._createdArchetypesInstances;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}