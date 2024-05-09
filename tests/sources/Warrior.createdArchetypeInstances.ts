import { Warrior } from '../../src/Archetypes/Archetype';

const result = () => {
  const r = [];
  const w1 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  const w2 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  const w3 = new Warrior('');
  r.push(Warrior.createdArchetypeInstances());
  return r;
};
