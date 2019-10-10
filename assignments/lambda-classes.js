// CODE here for your Lambda Classes
class GameObject {
  constructor(attributes) {
    this.name = attributes.name;
    this.createdAt = attributes.createdAt;
    this.dimensions = attributes.dimensions;
  }

  GameObject() {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor(characterAttributes) {
    super(characterAttributes);
    this.name = characterAttributes.name;
    this.healthPoints = characterAttributes.healthPoints;
  }

  CharacterStats() {
    return `${this.name} took damage`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanoidAttributes) {
    super(characterAttributes);
    this.name = characterAttributes.name;
    this.healthPoints = characterAttributes.healthPoints;
  }

  CharacterStats() {
    return `${this.name} took damage`;
  }
}
