
function randomQutes(){
    var quotes= [
        {text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
         author: "― Albert Einstein"},
        {text: "“So many books, so little time.”",
         author: "― Frank Zappa"},
        {text: "“You only live once, but if you do it right, once is enough.”",
         author: "― Mae West"},
        {text: "“If you tell the truth, you don't have to remember anything.”",
         author: "― Mark Twain"},
        {text: "“Always forgive your enemies; nothing annoys them so much.”",
         author: "― Oscar Wilde"},
        {text: "“It is better to be hated for what you are than to be loved for what you are not.”",
         author: "― Andre Gide"},
        {text: "“Without music, life would be a mistake.”",
         author: "― Friedrich Nietzsche"},
        {text: "“We accept the love we think we deserve.”",
         author: "― Stephen Chbosky"},
        {text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
         author: "― Mahatma Gandhi"},
        {text: "“In three words I can sum up everything I've learned about life: it goes on.”",
         author: "― Robert Frost"},
    ]

        var randNums = Math.floor((Math.random()*quotes.length));
        
        
        while(previousNum === randNums){
            randNums = Math.floor((Math.random()*quotes.length));
        }
        previousNum = randNums;

        console.log( randNums);

    document.getElementById("quotes-text").innerHTML = quotes[randNums].text;
    document.getElementById("quotes-details").innerHTML = quotes[randNums].author;
}

var previousNum = -1;

