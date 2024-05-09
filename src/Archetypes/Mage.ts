import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _mageInstances = 0;

  constructor(name: string, private _energyType: EnergyType = 'mana') {
    super(name);
    Mage._mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;