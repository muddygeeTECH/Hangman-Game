
$( document ).ready( function ( ) {

  var wordBank = [ "doctor", "companion", "cyberman", "dalek", "tardis", "gallifrey", "master", "time", "river", "rose", "torchwood", "earth", "screwdriver", "planet", "ten", "eleven", "twelve", "invasion", "space", "regeneration", "clara", "martha", "donna", "amy", "rory" ]
  var wins = 0
  var losses = 0
  var guessesLeft = 0
  
  
  $( ".btn" ).on( "click", function ( ) {
    var playWord = wordBank[ Math.floor( Math.random( ) * wordBank.length )]
    var wordDisplay = playWord.split( "" )
    for( var i = 0; i < playWord.length; i++ ) {
      wordDisplay[i] = "  _  "
    }
    var remainingLetters = playWord.length
    remainingLetters = playWord.length
    guessesLeft = 12
    $( "#game-space" ).html( wordDisplay )
    $( "#guessesLeft" ).text( "12" )
    $( "#lettersGuessed" ).empty()
    $( "#page-heading" ).html( "Doctor Who Hangman Game!" )
    
    $( document ).on( "keyup",  function ( e )  {
      var input = String.fromCharCode(e.which)
      var char = input.toLowerCase()
      
      var str = playWord
      for( var i = 0; i < str.length; i++ ) {
        str[i] = " "
      }
      var check = str.includes( char )
      
      if( check === true ) {
        for( var i = 0; i < playWord.length; i++ ) {
          if (str[i] == char ) {
            wordDisplay[i] = char
            remainingLetters--
          }
        }
        $( "#game-space" ).text( wordDisplay.join( " " ) )
      }
      
      if( check === false ) {
        guessesLeft--
        $( "#guessesLeft" ).text( guessesLeft )
        $( "#lettersGuessed" ).append( " " + char + " " )
      }
      
      if( guessesLeft === 0) {
        $( "#page-heading" ).html( "<h1>GAME OVER</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
        losses++
        $( "#losses" ).text( losses )
        $( document ).off( "keyup" )
      }
      
      if( remainingLetters === 0 ) {
        $( "#page-heading" ).html( "<h1>YOU WIN</h1><h5>CLICK BUTTON TO PLAY AGAIN</h5>" )
        wins++
        $( "#wins" ).text( wins )
        $( document ).off( "keyup" )
      }
    })
  })   
})