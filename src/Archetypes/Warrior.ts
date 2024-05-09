import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static _warriorInstances = 0;

  constructor(name: string, private _energyType: EnergyType = 'stamina') {
    super(name);
    Warrior._warriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;