


let Time,curTime="",AmOrPm="";

//https://api.ipgeolocation.io/timezone?apiKey=API_KEY&ip=1.1.1.1
function getTime()
{
    
    fetch('https://api.ipgeolocation.io/getip').then(
        function(response)
        {
            
             return response.json();

        }).then(
            function(data)
            {
                console.log(data);
                ip=Object.values(data);
                // console.log(ip[0]);
                return ip;
            }
        ).then(
            function(ip)
            {
            fetch(`https://api.ipgeolocation.io/timezone?apiKey=f2b0b8b7de284fb284cf2210dd2412fb&ip=${ip[0]}`).then(
                function(resp)
                {
                    return resp.json();
                }
            ).then(
                function(dat)
                {
                   console.log(dat);
                   let values=Object.values(dat);
                   console.log(values);
                   console.log("Timezone : "+values[1]);
                   console.log("Week Number : "+values[13]);
                   let date=(values[6].split(","));
                   
                   
                //    current Time fixing
                   Time=values[11].split("")
                   for(i=0;i<11;i++)
                   {
                        if(i<=4)
                        {
                            curTime+=Time[i] 
                        }
                        else if(i>=9)
                        {
                            AmOrPm+=Time[i] 
                        }
                   let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                   for(let a=0;a<week.length;a++)
                   {
                    if(date[0]==week[a])
                    {
                        console.log("week of the day"+a);
                    }
                   }

                   let day=values[4];
                   day=day.split("-");
                   console.log(day);
                   let answer=0;
                   let month=[31,28,31,30,31,30,31,31,30,31,30,31];
                   for(let a=1;a<day[1];a++)
                   {
                    answer+=Number(month[a]);
                   }
                   answer+=Number(day[2]);
                   if(day[0]%4==0&&day[0]%100!=0||day%400==0)
                   {
                    answer+=1;
                   }
                   console.log(answer)
                    
                   }


                   Day=values[6].split(', ')
                   
                   document.getElementById("currentTime").innerText=curTime
                   document.getElementById("timeZone").innerText="IN "+values[0].country_name;
                   document.getElementById("day").innerText=Day[0];
                   document.getElementById("weekNum").innerText=values[13];
                   document.getElementById("yearTxt").innerText=values[14];
                   document.getElementById("timeZone2").innerText=values[1];

                   timingFunc(AmOrPm,curTime)

                   console.log("Timezone : "+values[14]);                    
                }
            )
            }
        )
    
    
}
getTime();



function timingFunc(time,curTime)
{
    cTime=curTime.split(":")
    // console.log("cTime : "+cTime[0])

    // time="PM"
    if(time=='AM' && cTime[0]<12)
    {
        document.getElementsByClassName("wholeContainer")[0].id="light";
        document.getElementById("light").style.backgroundImage="url('assets/desktop/bg-image-daytime.jpg')";
        document.getElementsByClassName("wishTime")[0].innerText="Good Morning"
        document.getElementById("timeImg").setAttribute("src","assets/desktop/icon-sun.svg")
        document.getElementById("countryDetails").style.backgroundImage="radial-gradient(#ffffff,#c6c7c7d1)";
        document.getElementById("countryDetails").style.color="black";
    }
    else if(time=='PM' && (cTime[0]>=12 || cTime[0]<5))
    {
        document.getElementsByClassName("wholeContainer")[0].id="light";
        document.getElementById("light").style.backgroundImage="url('assets/desktop/bg-image-daytime.jpg')";
        document.getElementsByClassName("wishTime")[0].innerText="Good Afternoon"
        document.getElementById("timeImg").setAttribute("src","assets/desktop/icon-sun.svg")
        document.getElementById("countryDetails").style.backgroundImage="radial-gradient(#ffffff,#c6c7c7d1)";
        document.getElementById("countryDetails").style.color="black";
    }
    else if(time=='PM' && (cTime[0]>=5 && cTime[0]<12))
    {
        document.getElementsByClassName("wholeContainer")[0].id="dark";
        document.getElementById("dark").style.backgroundImage="url('assets/desktop/bg-image-nighttime.jpg')";
        document.getElementsByClassName("wishTime")[0].innerText="Good Evening"
        document.getElementById("timeImg").setAttribute("src","assets/desktop/icon-moon.svg")
        document.getElementById("countryDetails").style.backgroundImage="radial-gradient(#0e0e0e,#000000d1)";
        document.getElementById("countryDetails").style.color="white";
    }
}

            
$(document).ready(function(){
    var toggleCount=0
    $(".more").click(function(){
        if(toggleCount==0){

            $(".div").css({'transition':'transform','transition-duration':'2s','transform':'translateY(-47%)'});
            $(".more").html(`LESS <img src="assets/desktop/icon-arrow-up.svg" id="moonSun">`)
            $(".more img").css("transform","rotate(180deg) translate(2px,3px)")
            toggleCount++
        }
        else{

            $(".div").css({'transition':'transform','transition-duration':'2s','transform':'translateY(0%)'});
            $(".more").html(`MORE <img src="assets/desktop/icon-arrow-up.svg" id="moonSun">`)
            $(".more img").css("transform","rotate(0deg) translate(2px,3px)")
            toggleCount--
        }
    });
});


// qoute

const randomquote=function(name){
    document.getElementById("quote").innerText="Loading...."
    document.getElementsByClassName("author")[0].innerText=""
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
       document.getElementById("quote").innerText=sentence
       document.getElementsByClassName("author")[0].innerText="- "+author
 })
}
 randomquote("success")

 function randomQuote()
 {
    randomquote("success")
 }
