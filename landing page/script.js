var l=1;
function expandGrid(){
    var container = document.getElementById("griid");
    if(l==1)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Audi"><img class="crs" src="data/audi.jpg" alt="audi"><div class="tover"><br>AUDI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/BMW"><img class="crs" src="data/bmw.jpg" alt="bmw"><div class="tover"><br>BMW</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Bolero"><img class="crs" src="data/bolero.jpg" alt="bolero"><div class="tover"><br>BOLERO</div></a></div>';
        l+=1;
    }
    else if(l==2)
    {        
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Dacia_Duster"><img class="crs" src="data/duster.jpg" alt="duster"><div class="tover"><br>DUSTER</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Ferrari"><img class="crs" src="data/ferrai.jpg" alt="ferrari"><div class="tover"><br>FERRARI</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Toyota_Fortuner"><img class="crs" src="data/fortuner.jpg" alt="fortuner"><div class="tover"><br>FORTUNER</div></a></div>';
        l+=1;
    }
    else if(l==3)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/MG_Motor"><img class="crs" src="data/hector.jpg" alt="hector"><div class="tover"><br>HECTOR</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Jaguar_Cars"><img class="crs" src="data/jaguar.jpg" alt="jaguar"><div class="tover"><br>JAGUAR</div></a></div><div class="box"><a href="https://en.wikipedia.org/wiki/Mercedes-Benz"><img class="crs" src="data/mercedes.jpg" alt="mercedes"><div class="tover"><br>MERCEDES</div></a></div>';
        l+=1;
    }
    else if(l==4)
    {
        container.innerHTML+= '<div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Scorpio"><img class="crs" src="data/scorpio.jpg" alt="scorpio"><div class="tover"><br>SCORPIO</div></a></div>            <div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_Thar"><img class="crs" src="data/thar.jpg" alt="thar"><div class="tover"><br>THAR</div></a></div>            <div class="box"><a href="https://en.wikipedia.org/wiki/Mahindra_XUV500"><img class="crs" src="data/xuv.jpg" alt="xuv"><div class="tover"><br>XUV</div></a></div>';
        l+=1;
    }
    else
    {
        alert('More COntent will be added Soon. Stay Tuned:)');
    }
}
function sub(){
    alert('Form Sent')
}