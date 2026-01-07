export class Player {
  name;
  level;
    constructor(name,level) {
      this.name = name;
      this.level = level;
    } 
  
  info() {
console.log(`${this.name} has reached level ${this.level}`);
  }

  Subirlevel(){
    this.level++;
  }
}
  const jugador1 = new Player ("Tara",6);
  const jugador2 = new Player ("Pedro",64);
  jugador1.info();
  jugador1.Subirlevel();
  jugador2.info();
  jugador2.Subirlevel();
  jugador1.info();
  jugador2.info();