/* Since the purpose of this project
is to learn, i will comment everything
so it might look a little messy, but i think it is
good practice.
by: Frederik Borgbjerg
*/


$(document).ready(function(){
    var turnCount=0;
/* sliding down the welcome heading */
    $('h1').hide().slideDown('2000');

/* hiding stuff until the game begins */
    $(".player-turn").hide();
    $('#gameboard').hide();
    $('.header').hide();
    $('.author').hide();   

 /* Setting attributes of Wiredelta Link */

    $('#wiredelta-link').attr({
        href: 'https://www.wiredelta.com',
        target: "_blank"

    });
    $('.author-link').attr({
        href: "http://www.facebook.dk/fborgbjerg",
        target: "_blank"
    })

/*  clicking start-game button will hide info + 
    button and slidedown .header + .player-turn
    and show gameboard!                      */

    $('#start-game').on('click', function(event) {
        event.preventDefault();
        $(this).hide('200');
        $(".info").hide(200);
        $('.header').slideDown();
        $('.player-turn').slideToggle();
        $('#gameboard').show('slow');
        $(".author").toggle('slow');                
    });
          
/*  When a td on the gameboard is clicked
    call this function */
      $('#gameboard').find('td').on('click', function(){
        /* if the turnCount is equal to an even number
           it means that it is X's turn*/
            if (turnCount % 2 === 0){
        /* So add an X to the TD that was clicked*/
              $(this).text('X');
        /* edit the .player-turn to O*/
              $('.player-turn').text('Player Turn: O');
        /* finally call checkVictory to check if 
        the game is over or not*/
              checkVictory('X');
            } 
            /* if the game is not over it is O's turn to play*/
            else {           
              $(this).text('O');
               $('.player-turn').text('Player Turn: X');
              checkVictory('O');
            }
            /*if the game is still not over, add 1 to turnCount.value*/
          turnCount++;
          /*just logging the turnCount to the console for testing purposes*/
          console.log(turnCount);          
      });
     
   /*Whenever the checkVicory function is called
     it will check every row on the board to see if one of the players 
     has 3 in a line == is the winner. */  

    function checkVictory(player){
       /*Checks if there is a winner on the first row*/

       /*first check if the first the text of the first TD 
       on the gameboard is equal to an empty string */
        if ($('#gameboard').find('#1').text() !== '')
        {
            /* if true check if the TD next to it ( with id 2)
               has a text equal to the first one */
            if ($('#gameboard').find('#1').text() == $('#gameboard').find('#2').text()) 
            {
                /* if true see if the text of the third td with id of 3
                   is equal to the firt one */
                if ($('#gameboard').find('#1').text() == $('#3').text()) 
                {
                    /*if true Alert "Game Over" and the player who won*/
                    alert('Game over! '+player+' is the winner!');
                    /* remove the .invisible class from the #newGame button
                       so the player is able to start a new game!*/
                    $('#newGame').removeClass('invisible');
                }
            }

            /*This goes on for all possible solutions*/


        /*left column check*/
            if ($('#gameboard').find('#1').text() == $('#gameboard').find('#4').text()) {
                if ($('#gameboard').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        /*left diagonal check*/
            if ($('#gameboard').find('#1').text() == $('#gameboard').find('#5').text()) {
                if ($('#gameboard').find('#1').text() == $('#9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }    
        }
        
       /*middle column check*/
        if ($('#gameboard').find('#2').text() !== '')
        {
            if ($('#gameboard').find('#2').text() == $('#gameboard').find('#5').text())
             {
                if ($('#gameboard').find('#2').text() == $('#8').text()) 
                {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
        
        /*right column check*/
        if ($('#gameboard').find('#3').text() !== '')
        {
            if ($('#gameboard').find('#3').text() == $('#gameboard').find('#6').text()) 
            {
                if ($('#gameboard').find('#3').text() == $('#9').text()) 
                {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        /*right diagnal check*/
            if ($('#gameboard').find('#3').text() == $('#gameboard').find('#5').text()) 
            {
                if ($('#gameboard').find('#3').text() == $('#7').text()) 
                {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
        
        /*middle row check*/
        
        if ($('#gameboard').find('#4').text() !== '')
        {
            if ($('#gameboard').find('#4').text() == $('#gameboard').find('#5').text())
             {
                if ($('#gameboard').find('#4').text() == $('#6').text())
                 {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
        
        /*bottom row check*/
        if ($('#gameboard').find('#7').text() !== '')
        {
            if ($('#gameboard').find('#7').text() == $('#gameboard').find('#8').text())
             {
                if ($('#gameboard').find('#7').text() == $('#9').text()) 
                {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }        
  
    }

    $('#newGame').on('click',function(){
        $('.square').text('');
    });

});