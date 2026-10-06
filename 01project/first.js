const quotes=[
     "Be yourself; everyone else is already taken",
 "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,
 "So many books, so little time." ,
 "A room without books is like a body without a soul." ,
 "You only live once, but if you do it right, once is enough.",
 "Be the change that you wish to see in the world." ,
 "In three words I can sum up everything I've learned about life: it goes on." ,
 "If you tell the truth, you don't have to remember anything." ,
 "A friend is someone who knows all about you and still loves you." ,
 "To live is the rarest thing in the world. Most people exist, that is all.",
 "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." ,
 "Always forgive your enemies; nothing annoys them so much.",
 "We accept the love we think we deserve." ,
 "Without music, life would be a mistake.",
 "I have not failed. I've just found 10,000 ways that won't work." ,
 "It is better to be hated for what you are than to be loved for what you are not.",
 "As he read, Fallon fell in love in the way you fall asleep: slowly, and then all at once.",
 "I find that the harder I work, the more luck I have." ,
 "The mind is everything. What you think you become." ,
 "The best way to predict the future is to create it." ,
 "You miss 100% of the shots you don't take." ,
 "Whether you think you can or you think you can't, you're right." ,
 "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." ,
 "Either you run the day, or the day runs you." ,
 "Life is what happens when you're busy making other plans." ,
 "The purpose of our lives is to be happy." ,
 "Get busy living or get busy dying." ,
 "You only pass through this life once, you don't come back for an encore." ,
 "Many of life's failures are people who did not realize how close they were to success when they gave up.",
 "Life is really simple, but we insist on making it complicated."

];

const button=document.querySelector('button');
const quote=document.querySelector('h1');
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);
    quote.textContent=quotes[index];
})