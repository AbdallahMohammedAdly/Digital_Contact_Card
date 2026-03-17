
function openAdmin(){

 adminPanel.classList.remove("hidden")

 jsonEditor.value=JSON.stringify(data,null,2)

}

function closeAdmin(){

 adminPanel.classList.add("hidden")

}

function saveJson(){

 data=JSON.parse(jsonEditor.value)

 init()

 closeAdmin()

}
