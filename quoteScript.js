$(document).ready(function(){
    var randNum = "";
    var randQuote = [];
        randQuote[0] = "Thoughts are the shadows of our feelings - always darker, emptier, simpler.";
        randQuote[1] = "Madness is rare in individuals - but in groups, parties, nations and epochs it is the rule.";
        randQuote[2] = "Talking much about oneself can also be a means of concealing oneself.";
        randQuote[3] = "What is done out of love always takes place beyond good and evil.";
        randQuote[4] = "Anyone who despises himself will still respect himself as a despiser.";
        randQuote[5] = "One is punished most for one's virtues.";
        randQuote[6] = "One seeks a midwife for his thoughts, another someone to whom he can be a midwife: thus originates a good conversation.";
        randQuote[7] = "That which an age feels to be evil is usually an untimely echo of what was formerly considered good - the atavism of an old ideal.";
        randQuote[8] = "The vanity of others is only counter to our taste when it runs counter to our vanity.";
        randQuote[9] = "Is life not a thousand times too short for us to bore ourselves?";
        randQuote[10]= "Even the most courageous among us only rarely has the courage to face what he already knows.";
        randQuote[11]= "The saint in whom god is well-pleased is the ideal Eunuch.";
        randQuote[12]= "If one wants an end, one must also want the means: if one wants slaves, then one is a fool if one educates them to be masters.";
        randQuote[13]= "It is our tame, mediocre, emasculated society in which a natural human being necessarily degenerates into criminality.";
        randQuote[14]= "All becoming and growing - all that guarantees a future involves pain.";
        randQuote[15]= "One can promise actions, but not feelings, for the latter are involuntary.";
        randQuote[16]= "One will seldom go wrong to attribute extreme actions to vanity, moderate ones to habit and petty ones to fear.";
        randQuote[17]= "When a virtue has slept, it will arise refreshed.";
        randQuote[18]= "Most men are much too concerned with themselves to be malicious.";
        randQuote[19]= "We praise or find fault, depending on which of the two provides more opportunity for our powers of judgement to shine.";
        randQuote[20]= "He who humbles himself wants to be exalted.";
        randQuote[21]= "Good actions are sublimated evil actions; evil actions are good actions become coarse and stupid.";
        randQuote[22]= "There is not enough love and kindess in the world for us to give any of it away to imaginary beings.";
        randQuote[23]= "Art renders the sight of life bearable by laying over it the gauze of impure thinking.";
        randQuote[24]= "It is not enough to prove something, one also has to seduce or elevate people to it.";
		randQuote[25]= "The most perfidious way of harming a cause consists of defending it deliberately with faulty arguments.";
		randQuote[26]= "What is the seal of liberation? No longer being ashamed in front of oneself.";
		randQuote[27]= "If a temple is to be erected, a temple must be destroyed.";
  		randQuote[28]= "That which has been most stringently forbidden is, without exception, truth.";
		randQuote[29]= "My form of retaliation consists in this: immediately set a piece of cleverness at the heels of an act of stupidity.";
		randQuote[30]= "I have never pondered questions that are not questions - I have not wasted myself.";
		randQuote[31]= "I am essentially the anti-ass and on this account a world historical monster - in Greek and not only in Greek I am the Anti-Christ";
		randQuote[32]= "A man can approach only as near to truth as he has the courage to advance.";
		randQuote[33]= "The fate of music can be as dear to man as his own life, because joy and suffering are alike bound up with it.";
		randQuote[34]= "I refuse to be a saint; I would rather be a clown.";
		randQuote[35]= "Every concept arises from the equation of uneual things.";
		randQuote[36]= "How reluctant later generations will be to have anything to do with relics of an era ruled by psuedo-men dominated by public opinion.";
		randQuote[37]= "Haste is universal because everyone is in flight from himself.";
		randQuote[38]= "No one talks more passionately about his rights than he who in the depths of his soul doubts whether he has any.";
		randQuote[39]= "The mother of excess is not joy but joylessness.";
		randQuote[40]= "In the mountains of truth you will never climb in vain.";
		randQuote[41]= "Convictions are more dangerous enemies of truth than lies.";
		randQuote[42]= "The State lies in all languages of good and evil; whatever it says is a lie, and whatever it has it has stolen.";
		randQuote[43]= "Is Wagner a human being at all? Is he not rather a disease? He contaminates everything he touches - he has made music sick.";
		randQuote[44]= "Art is the supreme task and the truly metaphysical activity in this life.";
		randQuote[45]= "No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but yourself alone.";
		randQuote[46]= "We often contradict an opinion for no other reason than that we do not like the tone in which it is expressed.";
		randQuote[47]= "A witticism is an epigram on the death of a feeling.";
		randQuote[48]= "If a man has a great deal to put in them, a day will have a hundred pockets.";
		randQuote[49]= "Indeed, one meets those perverse wizards who instead of creating the world out of nothing, create nothing out of the world.";

    var attributions = [];
        attributions[0] = "- F. Nietzsche (The Gay Science)";
        attributions[1] = "- F. Nietzsche (Beyond Good and Evil)";
        attributions[2] = "- F. Nietzsche (Beyond Good and Evil)";
        attributions[3] = "- F. Nietzsche (Beyond Good and Evil)";
        attributions[4] = "- F. Nietzsche (Beyond Good and Evil)"; 
        attributions[5] = "- F. Nietzsche (Beyond Good and Evil)"; 
        attributions[6] = "- F. Nietzsche (Beyond Good and Evil)";
        attributions[7] = "- F. Nietzsche (Beyond Good and Evil)";
        attributions[8] = "- F. Nietzsche (Beyond Good and Evil)"; 
        attributions[9] = "- F. Nietzsche (Beyond Good and Evil)"; 
        attributions[10]= "- F. Nietzsche (Twilight of the Idols)";
        attributions[11]= "- F. Nietzsche (Twilight of the Idols)";
        attributions[12]= "- F. Nietzsche (Skirmishes of an Untimely Man)";
        attributions[13]= "- F. Nietzsche (Skirmishes of an Untimely Man)";
        attributions[14]= "- F. Nietzsche (What I Owe to the Ancients)";
        attributions[15]= "- F. Nietzsche (Human, All Too Human)";
        attributions[16]= "- F. Nietzsche (Human, All Too Human)";
        attributions[17]= "- F. Nietzsche (Human, All Too Human)";
        attributions[18]= "- F. Nietzsche (Human, All Too Human)";
        attributions[19]= "- F. Nietzsche (Human, All Too Human)"; 
        attributions[20]= "- F. Nietzsche (Human, All Too Human)";
        attributions[21]= "- F. Nietzsche (Human, All Too Human)"; 
        attributions[22]= "- F. Nietzsche (Human, All Too Human)";
        attributions[23]= "- F. Nietzsche (Human, All Too Human)";
        attributions[24]= "- F. Nietzsche (Daybreak)";
		attributions[25]= "- F. Nietzsche (The Gay Science)";
		attributions[26]= "- F. Nietzsche (The Gay Science)";
 		attributions[27] = "- F. Nietzsche (Genealogy of Morals)";
        attributions[28] = "- F. Nietzsche (Ecce Homo)"; 
        attributions[29] = "- F. Nietzsche (Why I Am So Wise)"; 
        attributions[30] = "- F. Nietzsche (Why I Am So Clever)";
        attributions[31] = "- F. Nietzsche (Why I Write Such Excellent Books)";
        attributions[32] = "- F. Nietzsche (The Birth of Tragedy)"; 
        attributions[33] = "- F. Nietzsche (The Case of Wagner)"; 
        attributions[34]= "- F. Nietzsche (Why I am A Fatality)";
        attributions[35]= "- F. Nietzsche (On Truth and Lie in an Extra-Moral Sense)";
        attributions[36]= "- F. Nietzsche (Untimely Meditations)";
        attributions[37]= "- F. Nietzsche (Untimely Meditations)";
        attributions[38]= "- F. Nietzsche (Human, All Too Human)";
        attributions[39]= "- F. Nietzsche (Human, All Too Human)";
        attributions[40]= "- F. Nietzsche (Human, All Too Human)";
        attributions[41]= "- F. Nietzsche (Human, All Too Human)";
        attributions[42]= "- F. Nietzsche (Thus Spoke Zarathustra)";
        attributions[43]= "- F. Nietzsche (Der Fall Wagner)"; 
        attributions[44]= "- F. Nietzsche (The Birth of Tragedy)";
        attributions[45]= "- F. Nietzsche (Untimely Meditations)"; 
        attributions[46]= "- F. Nietzsche (Human, All Too Human)";
        attributions[47]= "- F. Nietzsche (Human, All Too Human)";
        attributions[48]= "- F. Nietzsche (Human, All Too Human)";
		attributions[49]= "- F. Nietzsche (Human, All Too Human)";
 
	
	$("#freshButton").click(function(){
    
    	randNum = Math.floor(Math.random() * 50);
    	$("#quote").html('<em><strong>' + randQuote[randNum] + '</strong></em><h4>' + attributions[randNum] + '</h4>');
	  
  	});
  
  	$("#tweetButton").click(function(){

    	window.open("https://twitter.com/intent/tweet?text=" + randQuote[randNum] + " " + attributions[randNum]);
  	
	});
  
});
