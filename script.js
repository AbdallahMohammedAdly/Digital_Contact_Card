let data

async function fetchData() {
    const response = await fetch("https://abdallahmohammedadly.github.io/Digital_Contact_Card/data.json")
    data = await response.json()
    init()
}

fetchData()

function init(){


cover.src=data.cover

profile.src=data.profile

name.innerText=data.name

title.innerText=data.title

call.href=`tel:${data.phone}`

email.href=`mailto:${data.email}`

whatsapp.href=`https://wa.me/${data.whatsapp}`

linkedin.href=data.linkedin

github.href=data.github

new QRCode(document.querySelector("#qrcode"),{ text:location.href,width:160,height:160})

}


// function downloadVcard(){

// const v=`BEGIN:VCARD
// VERSION:3.0
// FN:${data.name}
// ORG:${data.title}
// TEL:${data.phone}
// EMAIL:${data.email}
// URL:${data.website}
// END:VCARD`

// const blob=new Blob([v],{type:"text/vcard"})

// const a=document.createElement("a")

// a.href=URL.createObjectURL(blob)

// a.download="contact.vcf"

// a.click()

// }

function shareContact(){

if(navigator.share)

navigator.share({title:data.name,url:location.href})

}



themeToggle.onclick=()=>{

 document.body.classList.toggle("light")

}
