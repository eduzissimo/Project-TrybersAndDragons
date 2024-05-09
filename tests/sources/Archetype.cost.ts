import Archetype from '../../src/Archetypes/Archetype';
import { EnergyType } from '../../src/Energy';

class ArchetypeChild extends Archetype {
  get energyType(): EnergyType {
    throw new Error('Method not implemented.');
  }
}

const archetype = new ArchetypeChild('Aloha');
archetype.cost;