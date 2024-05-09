import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _rangerInstances = 0;

  constructor(name: string, private _energyType: EnergyType = 'stamina') {
    super(name);
    Ranger._rangerInstances += 1;
  }

  static createdArchetypeInstances = (): number => Ranger._rangerInstances;

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;