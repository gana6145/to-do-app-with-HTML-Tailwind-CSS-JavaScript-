    let input=document.getElementById("input");
    let list = document.getElementById('list');

    function addtask(){
      if(input.value === ''){
        alert("please enter to do");

      }
      else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        li.className = "bg-gray-100 p-2 rounded mb-2";
        list.appendChild(li);
        input.value="";
    };
      }
      input.value="";
    
    

    li.appendChild(deleteBtn);
  

  