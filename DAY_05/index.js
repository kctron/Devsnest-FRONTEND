let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenvalue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText =e.target.innerText;
        console.log('button text is', buttonText);
        if(buttonText=='X'){
            buttonText =  '*';
            screenValue =buttonText; 
            screen.value = screenvalue;
        }
        else if(buttonText == 'C'){
            screenValue = ""; 
            screen.value = screenvalue;
        }
        else if (buttonText =='='){
            screen.value = eval(screenValue);
           
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }



    })
}