// 4 rules of Function Constructor

    // 1. create an empty object {}
    // 2. function is called this = {}
    // 3. {} linked to the prototype
    // 4. {} will return automatically


    const Game = function(name, winner, loser){
        this.name = name;
        this.winner = winner;
        this.loser = loser;
    
        this.printGame = function(){
            console.log(`Game Name: ${this.name}\nWinner Team: ${this.winner}\nLoser Team: ${this.loser}`);
        }
    }
    
    const game1 = new Game('Cricket', 'Bangladesh', 'Pakistan');
    const game2 = new Game('Football','Arzentina','Brazil');

    game1.printGame();
    game2.printGame()

    