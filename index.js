console.log("working");


$(document).ready(function(){
    $("button").click(function(){
      $("h1").toggle(250);
    });
  });

  $("#twin").click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/2",
        type: "GET",
        sucess:function(data){
            console.log(data);
            document.getElementById("tag")[2].innerText=data.body;
        }
    
    
        
    })
    });