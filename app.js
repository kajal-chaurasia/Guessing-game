const favMovie ="3idiots";
const input = document.getElementById("movie");
const button = document.getElementById("submit");
const message = document.getElementById("message");

button.addEventListener("click", function(){
  const guess = input.value.toLowerCase().trim();
  
  if(guess === "quit"){
    message.textContent = "You quit the game!";
  }else if ( guess === favMovie.toLowerCase()){
    message.textContent ="Congrats! You guessed it right!";
  }else {
    message.textContent = "Wrong guess! Try again.";
  }
  
  input.value ="";
});

