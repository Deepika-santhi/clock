//f2b0b8b7de284fb284cf2210dd2412fb

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
                   
                    
                }
            )
            }
        )
    
    
}
getTime();
