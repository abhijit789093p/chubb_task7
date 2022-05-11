class Player {
    id;
    score = 0;
    balls = [];
  
    constructor(id) {
      this.id = id;
    }
    hit() {
      let run = Math.floor(Math.random() * 6);
      this.score += run;
      this.balls.push(run);
      return run;
    }
  }
  
  class Team {
    players = [];
    teamScore = 0;
    currentPlayer;
  
    constructor() {
      for (let i = 1; i <= 11; i++) {
        this.players.push(new Player(i));
      }
      this.currentPlayer = this.players[0];
    }
  
    play() {
      let run = this.currentPlayer.hit();
      console.log('Player ID ', this.currentPlayer.id);
      console.log('Player Run ', run);
      if (run == 0) {
        this.currentPlayer = this.players[this.currentPlayer.id + 1 - 1];
      } else {
        this.teamScore += run;
      }
    }
  
    getTeamScore() {
      return this.teamScore;
    }
  }
  
  let team1 = new Team();
  
  document.getElementById('hit').addEventListener('click', () => {
    team1.play();
  });
  
  document.getElementById('getscore').addEventListener('click', () => {
    console.log('Team Score', team1.getTeamScore());
  });