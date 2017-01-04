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

//Make it an array for sorting.
var countedWordArr=new Array();
for(var name in countedWord){
	countedWordArr.push([name,countedWord[name]])
}
//ASC sorting
countedWordArr.sort(function(a,b){
	return a[1]-b[1];
})
