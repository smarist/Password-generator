const char = [
    1,2,3,4,5,6,7,8,9,0,"A","B","C", "D", "E","F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "+", "/", ",", "{", "}", "[", "]", "<", ">", "?","=","q", "a","z", "w", "e", "r", "y","u", "i", "o", "p", "s", "d", "f", "g", "h", "j", "k", "l", "x", "c", "v", "b", "n", "m"
]



const passwordBtn = document.getElementById("password-btn");
const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const password3 = document.getElementById("password-3");
const password4 = document.getElementById("password-4");
const error = document.getElementById("error");


document.querySelector('input').addEventListener('change', e=>{
    const el = e.target || e
  
    if(el.type == "number" && el.max && el.min ){
      let value = parseInt(el.value)
      el.value = value // for 000 like input cleanup to 0
      let max = parseInt(el.max)
      let min = parseInt(el.min)
      if ( value > max ) el.value = el.max
      if ( value < min ) el.value = el.min
    }
  });


//allows the user to choose the password length
function getLength(){
    let passLength =  parseInt(document.getElementById("len-id").value);
    passwordLength = passLength;

}

function getPassword() {
   let password = ""; 
   for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random()* char.length);
        password += char[index];    
    }
    return password;
}

function displayPassword(){
    password1.textContent = getPassword();
    password2.textContent = getPassword();
    password3.textContent = getPassword();
    password4.textContent = getPassword();

    
}



function copyText1(){
    let copyText = password1.value;
    navigator.clipboard.writeText(copyText). then (() => {
       return  alert("copied to clipboard");
    })
}

function copyText2(){
    let copyText = password2.value;
    navigator.clipboard.writeText(copyText). then (() => {
       return  alert("copied to clipboard");
    })
}

function copyText3(){
    let copyText = password3.value;
    navigator.clipboard.writeText(copyText). then (() => {
       return  alert("copied to clipboard");
    })
}

function copyText4(){
    let copyText = password4.value;
    navigator.clipboard.writeText(copyText). then (() => {
       return  alert("copied to clipboard");
    })
}


