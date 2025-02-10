//your JS code here. If required.

let btn = document.getElementById("openModal");

btn.addEventListener('click',()=>{
	let modal = document.createElement("div");
	modal.className = "modal";
	let modal_content = document.createElement("div");
	modal_content.className = "modal-content";
	let modal_header = document.createElement("div");
	modal_header.className = "modal-header";
	let modal_body = document.createElement("div");
	modal_body.className = "modal-body";
	modal.append(modal_content);
	modal_content.append(modal_header,modal_body);

	modal_header.innerHTML = "<h2>Modal Header</h2><button class='close-modal'>x</button>";
	modal_body.innerHTML = "<p>Modal Body Content</p>";

	let crossBtn = document.querySelector(".close-modal");
	

   
})