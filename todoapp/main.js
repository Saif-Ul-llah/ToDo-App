var array =[];

var obj = {
    id:0,
    title:"HBS",
    com:false
}
class cons {
    constructor(id, title) {

        this.id = id;
        this.title = title;
        this.com = false;
    }
}
var ul = document.getElementById("show")

function data(){
    var data = document.getElementById("inputbox").value;
    var get = new cons(array.length, data,true)
    document.getElementById("inputbox").value="";
    array.push(get)
    
// console.log(array);
    for(var key in array){
        var newId = array.length;

        var li =  document.createElement("li");
        var litext = document.createTextNode(array[key].title);
          // var ran = Math.round(Math.random());
        li.setAttribute("id",newId+10);

// Edit button
        var btn1 = document.createElement("button");
        var btn1_img = document.createElement("img");
        btn1.setAttribute("id",newId);
        btn1.setAttribute("class","right");
        btn1_img.setAttribute("src","./img/icons8-edit-48.png");
        btn1_img.setAttribute("class","icon");
        btn1.setAttribute("onClick","edit(id)");

// Delete button   
        var btn2 = document.createElement("button");
        var btn2_img = document.createElement("img");
        btn2.setAttribute("id",newId);
        btn2.setAttribute("class","right");
        btn2_img.setAttribute("src","./img/icons8-trash-24.png"); 
        btn2_img.setAttribute("class","icon");
        btn2.setAttribute("onclick","del(id)");
        
    }
    // console.log(ul);
    btn1.appendChild(btn1_img);
    btn2.appendChild(btn2_img);
    
    li.appendChild(litext);
    li.appendChild(btn2);
    li.appendChild(btn1);
    ul.appendChild(li)
}

function del(id){
    var index = id-1;
// console.log(index);
    var dele = document.getElementById(id);
    // console.log(dele);
    dele.parentElement.remove();
    array.splice(index,1);
}
// Edit Function
function edit(id){
        var index = id-1; 
        var newArray = array[index];
        var che =document.getElementById("inputbox").value=newArray.title;
// Update button
        var btn0= document.createElement("button");
        btn0.innerHTML="Update";
        btn0.setAttribute("onClick","update(id)");
        btn0.setAttribute("id",id);
        btn0.setAttribute("class","btn0");
        btn.style.display="none";
        sec.appendChild(btn0);  
        // btn0.setAttribute("onClick",update(`${par}`,id));
        
    }


//Update function

function update(id){
    //  console.log(id +" up id");
    var data = document.getElementById("inputbox").value;
    var btn0 = document.getElementById(id);
    // console.log(btn0)
    var btn = document.getElementById("btn");
    var index = id-1;

    var dat = array[index];
    // console.log(dat.title);
    dat.title = data;
  
    var test = index+11;
    var divli= document.getElementById(test);
    // console.log(test +"test");
    // console.log(divli );

    divli.childNodes[0].nodeValue= data ;
    document.getElementById("inputbox").value = "";

    // console.log(divli.childNodes[0]);

    btn.style.display="inline-block";
    //  btn0.style.display="none";
    btn0.remove();

}



