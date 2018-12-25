var d=document.getElementsByClassName("half");
var count=0;
var r=document.getElementById("rst");
var t=document.getElementById("try");
var ng=document.getElementById("ng");
var p=document.getElementById("tp");
var b=Math.floor(Math.random()*9+1);
var total=50;
var game=0;
alert(b);
        for(var i=0;i<9;i++)
        {   
            
            d[i].addEventListener("click",function()
            {
                var a=this.id;
                if(a==b)
                {
                    t.textContent="You Guessed the correct one!!";
                    alert("You Won!!");
                    alert("The correct answer is "+ b);  
                    b=(Math.floor(Math.random()*9+1));                                
                    i=0;
                    count=0;
                    game++;
                    ng.textContent=game;
                    p.textContent=total;
                    total=total+50;
                }
                else
                {
                    t.textContent="Try Again";
                    count++;  
                    total=(total-10);                                     
                    if(count==5)
                    {
                        alert("Your chances are over!!");
                        alert("The correct answer is "+ b);  
                        b=(Math.floor(Math.random()*9+1));                   
                        i=0;
                        count=0;
                        game++;
                        ng.textContent=game;
                        p.textContent=total;
                        total=total+50;
                    }
                    else
                    {
                        alert("Try again,only "+ (6-count)+ " chances are left");
                    }
                   
                }
            } );
           
                
        }  


r.addEventListener("click",function()
    {
        i=0;
        count=0;
        game=0;
        ng.textContent=0;
        p.textContent=0;
        b=(Math.floor(Math.random()*9+1)); 
    }
    );