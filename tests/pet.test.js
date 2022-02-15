const { Pet } = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Kayloo')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    const pet = new Pet('Kayloo');
    expect(pet.name).toEqual('Kayloo');
  });
  it('has an initial age of 0', () => {
    const pet = new Pet('Kayloo');
    expect(pet.age).toEqual(0);
  });
  it('increments the age by 1', () => {
    const pet = new Pet('Kayloo');
    pet.growup();
    expect(pet.age).toEqual(1);
  });
  it('has an initial hunger of 0', () => {
    const pet = new Pet('Kayloo');
    expect(pet.hunger).toEqual(0);
  });
  it('has an initial fitness of 0', () => {
    const pet = new Pet('Kayloo');
    expect(pet.fitness).toEqual(10);
  });
  it('increments hunger by 5 decrements fitness by 3', () => {
    const pet = new Pet('Kayloo');
    pet.growup();
    expect(pet.hunger).toEqual(5)
    expect(pet.fitness).toEqual(7)
  });
  it('increases fitness by 4 when walk method is called', () => {
    const pet = new Pet('Kayloo');
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('decrements hunger by 3 when feed method is called', () => {
    const pet = new Pet('Kayloo');
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('returns true if the pet is alive otherwise false', () => {
    const pet = new Pet('Kayloo');
    pet.isalive;
    expect(pet.isalive = true).toEqual(true)
    expect(pet.isalive = false).toEqual(false)
  });
  const pet = new Pet('Kayloo')
  pet.age = 30
  console.log(pet)
  it('throws an error message if the pet is not alive', () => {
    expect(() => pet.feed()).toThrow('Your pet is no longer alive =(');
    expect(() => pet.walk()).toThrow('Your pet is no longer alive =(');
    expect(() => pet.growup()).toThrow('Your pet is no longer alive =(');
  });
});

  

