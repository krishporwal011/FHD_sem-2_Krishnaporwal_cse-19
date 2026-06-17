const heading = document.getElementById("heading"); 
const para = document.getElementById("para"); 
const input = document.getElementById("textInput"); 
 

const defaultHeading = "Welcome to JavaScript DOM"; 
const defaultPara = "This is a sample paragraph for DOM manipulation."; 
let fontSize = 32; 
 

document.getElementById("changeTextBtn").addEventListener("click", function () { 
    if (input.value !== "") { 
        heading.innerText = input.value; 
    }  }); 
 

document.getElementById("bgColorBtn").addEventListener("click", function () { 
    document.body.style.backgroundColor =  
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue"; 
}); 
 

document.getElementById("fontSizeBtn").addEventListener("click", function () { 
    fontSize += 2; 
    heading.style.fontSize = fontSize + "px"; 
}); 
 

document.getElementById("toggleParaBtn").addEventListener("click", function () { 
    if (para.style.display === "none") { 
        para.style.display = "block"; 
    } else { 
        para.style.display = "none"; 
    } 
}); 
 

document.getElementById("resetBtn").addEventListener("click", function () { 
    heading.innerText = defaultHeading; 
    para.innerText = defaultPara; 
    document.body.style.backgroundColor = "white"; 
    para.style.display = "block"; 
    fontSize = 32; 
    heading.style.fontSize = fontSize + "px"; 
    input.value = ""; 
});