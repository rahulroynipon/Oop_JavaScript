const Game = function(name, winner, loser){
    this.name = name;
    this.winner = winner;
    this.loser = loser;

    // this.printGame = function(){
    //     console.log(`Game Name: ${this.name}\nWinner Team: ${this.winner}\nLoser Team: ${this.loser}`);
    // }
}

Game.prototype.printGame = function(){
    console.log(`Game Name: ${this.name}\nWinner Team: ${this.winner}\nLoser Team: ${this.loser}`);
}

const game1 = new Game('Cricket', 'Bangladesh', 'Pakistan');
const game2 = new Game('Football','Arzentina','Brazil');

console.log(game1)


game1.printGame();
game2.printGame()

