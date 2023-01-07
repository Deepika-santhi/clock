const randomquote=function(name){
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${name}`,{
        method:'GET',
        headers:{
            'X-api-key':'tPUFvi5yfYVrTUpgT0l7EA==UYK9CMSmxMnW8cEV'
        }
    })
    .then(function(response){
       return response.json();
    })
     .then(function(data){
       let quotes=data[0];
       let sentence=quotes.quote;
       let author=quotes.author
      console.log(sentence);
      console.log(author);
 })
}
 randomquote("success");
 