const mixedArray = ["PIZAA",10,true,25,false,"Wings"];

var lowerCaseWords =  function(wordsArr){
    var wordsArray =[];
    if( wordsArr.length > 1){
        for(var i =0; i <wordsArr.length ; i++){
            if(typeof wordsArr[i] == "string"){
                wordsArray.push(wordsArr[i].toLowerCase());
            }
        }
        return Promise.resolve(wordsArray);
    }else{
        var error  = new Error("Error: Array cannot be empty");
        return Promise.reject(error);
    }
}
lowerCaseWords(mixedArray)
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error.message);
})
