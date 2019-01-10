//Global Variables
var player1, player2;
//Constructor function for a player
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}
//Function to disable and enable gaming areas according to which player is active.
function activeUser() {
    if (player1.active === true && player2.active === false) {
        $('.player1Area').children().prop('disabled', false);
        $('.player1Area').removeClass('disableGamingArea');
        $('.player2Area').children().prop('disabled', true);
        $('.player2Area').addClass('disableGamingArea');
    } else {
        $('.player1Area').children().prop('disabled', true);
        $('.player1Area').addClass('disableGamingArea');
        $('.player2Area').children().prop('disabled', false);
        $('.player2Area').removeClass('disableGamingArea');
    }
};
//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    this.diceRoll = randomNo;
    activeUser();
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        if (this.active === player1.active) { //disable and enable gaming areas when dice is a 1 according to which player is active.
            player1.active = false;
            player2.active = true;
            $('.player1Area').children().prop('disabled', true);
            $('.player1Area').addClass('disableGamingArea');
            $('.player2Area').children().prop('disabled', false);
            $('.player2Area').removeClass('disableGamingArea');
        } else if (this.active === player2.active) {
            player2.active = false;
            player1.active = true;
            $('.player2Area').children().prop('disabled', true);
            $('.player2Area').addClass('disableGamingArea');
            $('.player1Area').children().prop('disabled', false);
            $('.player1Area').removeClass('disableGamingArea');
        } else {
            console.log("not working");
        }
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};