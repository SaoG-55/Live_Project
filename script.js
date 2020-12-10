var count=document.getElementById("counter");
var followers=document.getElementById("followers");
console.log(followers);
let c=0;
setInterval(function()
{
    if(c<1500)
    {
        c++;
        count.innerText=c;
    }
},2);//does the work within that time//
setTimeout(()=>{
    followers.innerText="Followers in my website!"
},8000);//does the work after the set time//
