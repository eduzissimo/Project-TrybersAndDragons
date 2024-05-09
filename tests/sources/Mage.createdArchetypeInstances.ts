import { Mage } from '../../src/Archetypes/Archetypes';

const result = () => {
  const r = [];
  const m1 = new Mage('');
  r.push(Mage.createdArchetypeInstances());
  const m2 = new Mage('');
  r.push(Mage.createdArchetypeInstances());
  const m3 = new Mage('');
  r.push(Mage.createdArchetypeInstances());
  return r;
};
