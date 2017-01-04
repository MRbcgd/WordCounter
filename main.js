//select word. exclude source code
var entireText=document.getElementsByTagName('body')[0].innerText;
//split word
var splitedText=entireText.split(' ');

var countedWord={};//js object
//insert splited word into object
for(var i=0; i<splitedText.length; i++){
	var word=splitedText[i];
  //counting word
	if(countedWord[word]==undefined){
	    countedWord[word]=1;
    }
	else{
		countedWord[word]++;
    }
}
console.log(countedword);
