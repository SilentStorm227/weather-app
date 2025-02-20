const apiKey = 'c86d189bfef7f13dc331ea990002abdd';
const place = document.getElementById("place");
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const temprature = document.querySelector(".temperature");
const emoji = document.querySelector(".emoji");
const hunidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".windspeed");
const error = document.querySelector(".error");


        function myFun(){

            const ele = document.getElementById("place")

            var xyz =`Weather in ${search.value}`;
            const place = document.getElementById("search"); 

            ele.innerHTML= xyz;


        }