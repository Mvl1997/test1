import rl from "readline-sync";

const name =rl.question("Geef je naam aub? ");
const age = rl.question("Geef je leeftijd aub? ");
console.log (`Hallo ${name}, je bent ${age} jaar oud! oude zak!!`)
const lijstMetSnoepjes = ["water v/d fontein van eeuwige jeugd","dropjes","botox", "vitamine-verjongingskuur"];
 var index= rl.keyInSelect(lijstMetSnoepjes,"Je bent veel te oud aan het worden kies een verjongingsmiddel!");
console.log('Ok, zelfs ' + lijstMetSnoepjes[index]+ ' helpt je niet om jonger te worden veel plezier als oma door het leven te gaan!');  
