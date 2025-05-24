//your JS code here. If required.
let submitbtm=document.getElementById("submit");
let booklist=document.getElementById("book-list");
  submitbtm.addEventListener("click", function(){
	  let Title=document.getElementById("title").value.trim();
	    let Author=document.getElementById("author").value.trim();
	    let ISBN=document.getElementById("isbn").value.trim();

	  if(Title=== ""||Author===""||ISBN===""){
		  alert("Plese fill the blow");
		  return
	  }

let row=document.createElement("tr");
	  row.innerHTML='
		  <td>${Title}</td>
							  <td>${Author}</td>
							  <td>${ISBN}</td>
							  <td><button class="delete">Clear</button></td>
		  
	  ';
							 
	  booklist.apendChild(row);
//agar sara like title author aur isbn ko fill kr diya gya to use khali kr do new line ke liye
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
  });
booklist.addEventListener("click", function(e){
	if(e.target.classList.contains("delet")){
		let row=e.target.closest("tr");
		row.remove();
	}
	
})









