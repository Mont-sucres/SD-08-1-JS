export class Player {
    constructor(name,level) {
      this.name = name;
      this.level = level;
    } 
  
  info() {
console.log(`${this.name} has reached level ${this.level}`);
  }
}
  const jugador1 = new Player ("Tara",6);
  const jugador2 = new Player ("Pedro",64);
  jugador1.info();
  jugador2.info();
 