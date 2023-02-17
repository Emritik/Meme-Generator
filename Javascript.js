function activate()
        {
            let f_txt=document.getElementById("ftxt").value;
            let l_txt=document.getElementById("ltxt").value;
            console.log("working");
            let f_lenght=f_txt.lenght;
            let l_lenght=l_txt.lenght;
            if(f_lenght%2==0)
            {
                document.getElementById("para").innerHTML= f_txt+ '<br>' + '<img src="mene1.jpg" width="300px" height="300px" alt="Meme-logo" id="img">'+'<br>'+ l_txt;

            }
            else if(l_lenght%2==0)
            {
                document.getElementById("para").innerHTML= f_txt+ '<br>' + '<img src="mene2.jpg" width="300px" height="300px" alt="Meme-logo" id="img">'+'<br>'+ l_txt;
            }
            else 
            {
                document.getElementById("para").innerHTML= f_txt+ '<br>' + '<img src="mene3.jpg" width="300px" height="300px" alt="Meme-logo" id="img">'+'<br>'+ l_txt;

            }           
        };
