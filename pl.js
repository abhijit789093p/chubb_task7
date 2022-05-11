var Player = /** @class */ (function () {
    function Player(id) {
        this.score = 0;
        this.balls = [];
        this.id = id;
    }
    Player.prototype.hit = function () {
        var run = Math.floor(Math.random() * 6);
        this.score += run;
        this.balls.push(run);
        return run;
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
        this.teamScore = 0;
        for (var i = 1; i <= 11; i++) {
            this.players.push(new Player(i));
        }
        this.currentPlayer = this.players[0];
    }
    Team.prototype.play = function () {
        var run = this.currentPlayer.hit();
        console.log('Player ID ', this.currentPlayer.id);
        console.log('Player Run ', run);
        if (run == 0) {
            this.currentPlayer = this.players[this.currentPlayer.id + 1 - 1];
        }
        else {
            this.teamScore += run;
        }
    };
    Team.prototype.getTeamScore = function () {
        return this.teamScore;
    };
    return Team;
}());
var team1 = new Team();
document.getElementById('hit').addEventListener('click', function () {
    team1.play();
});
document.getElementById('getscore').addEventListener('click', function () {
    console.log('Team Score', team1.getTeamScore());
});
