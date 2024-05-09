import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _necroInstances = 0;

  constructor(name: string, private _energyType: EnergyType = 'mana') {
    super(name);
    Necromancer._necroInstances += 1;
  }

  static createdArchetypeInstances = (): number => Necromancer._necroInstances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;