window.onload=()=>{

    let i =0 ;
    var divId;
    while(i<40)
    {
        if(i==0)
        {
            // create amain div of classname new-div and set its displayy flex
            let new_div = document.createElement("tr");
            new_div.setAttribute('class',"new-tr");
            new_div.setAttribute('id' , "new_tr"+String(i));
            document.getElementById('start').append(new_div );
            divId = String(i);
        }

        if(i%8==0 && i!=0)
        {
            let br = document.createElement("br");
            document.getElementById('start').append(br);
            //append a br tag into the box-start div

            let new_br = document.createElement("tr");
            document.getElementById('start').append(new_br);
            new_br.setAttribute('id' , "new_tr" + String(i));
            // let new_div = document.createElement("td");
            // new_div.setAttribute('class',"new-div");
            // new_div.setAttribute('id' , "new_div"+String(i));
            // document.getElementById("new-tr" + String(i)).append(new_div );
            divId = String(i);
        }

        // create a div and append this div into new-div
        let clone =document.createElement("td");
        let id  = "box" + String(i);
        clone.setAttribute( 'id',id);
        clone.setAttribute('class' , "box");

        // Append the newly created element on element box 
        document.getElementById('new_tr'+ divId).append( clone );   
        i++;
    }
    var boxes= document.querySelectorAll('td');
      //  console.log(boxes);
     boxes.forEach((link)=>{
     link.addEventListener("click",function(){
      //    console.log(link.classList);
      link.classList.toggle("white");
     })
     });
   
  };