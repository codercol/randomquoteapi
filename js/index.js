$(document).ready(function(){
  getQuote();
  var randomQuote; 
  var author;
  
  function getQuote(){
    /*
    var quotes = ["Hello, World!", "Hello, There!", "Hello, Goodbye!"];
    var author1 = ["Author1", "Author2", "Author3"];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
     randomQuote = quotes[randomNum];
     author = author1[randomNum];*/

     var url= "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
     $.getJSON(url, function(data){
       $(".quote").html('"'+data.quoteText+ '"');
       $(".author").html("-"+data.quoteAuthor);
     });

    
    $(".quote").text(randomQuote);
    $(".author").text(author);
  }
    
  $("#tweet").on("click", function(){
      window.open("https://twitter.com/intent/tweet?text="+randomQuote + " " + author );
    });
  
  $("#newQuote").on("click", function(){
      getQuote();
    });
  
})
