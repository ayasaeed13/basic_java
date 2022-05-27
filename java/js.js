var quotesArray =[
{
    author:"Frank Sinatra",
    quote:"The best revenge is massive success.",

},
{
    author:"Wayne Gretzy",
    quote:"You miss 100% of the shots you don\'t take.",

},
{
    author:"Nelson Mandela",
    quote:"Resentment is like drinking poison and waiting for your enemies to die.",

},
{
    author:"Elbert Hubbard",
    quote:"Do not take life too seriously. You will not get out alive.",

},
{
    author:"Epictetus",
    quote:"It\'s not what happens to you, but how you react to it that matters.",

},
{
    author:"Jim Rohn",
    quote:"Beware of what you become in pursuit of what you want.",

},
{
    author:" Oscar Wilde",
    quote:"Be yourself; everyone else is already taken.",

},
{
    author:"Frank Zappa",
    quote:"So many books, so little time.",

},
{
    author:"Marcus Tullius Cicero",
    quote:"A room without books is like a body without a soul.",

},
{
    author:"Mahatma Gandhi",
    quote:"Be the change that you wish to see in the world.",

},
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*quotesArray.length + 1);
    document.getElementById("quoteOutput").innerHTML=`" ${quotesArray[random].quote} "`;
    document.getElementById("authorOutput").innerHTML=`--${quotesArray[random].author}`;

}