export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type || '';
    this.attack = attack || 0;
    this.defence = defence || 0;
  }
}
