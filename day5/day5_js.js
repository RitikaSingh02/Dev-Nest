window.onload=() => {
    const first_input = document.getElementById('first')
    const second_input = document.getElementById('second')
    
    const buttons = document.querySelectorAll('button');
    
    const addButton = buttons[0];
    const subtractButton = buttons[1];
    const multiplyButton = buttons[2];
    const divideButton = buttons[3];
    
    const addHandler = function() {
        const result = document.getElementById('result');
        const sum = parseInt(first_input.value)+parseInt(second_input.value);
        result.innerHTML= 'The result is: '+sum;
    
    }
    const subtractHandler = function() {
        const result = document.getElementById('result');
        const sum = parseInt(first_input.value)-parseInt(second_input.value);
        result.innerHTML= 'The result is: '+sum;
    
    }
    const multiplyHandler = function() {
        const result = document.getElementById('result');
        const sum = parseInt(first_input.value)*parseInt(second_input.value);
        result.innerHTML= 'The result is: '+sum;
    
    }
    const divideHandler = function() {
        const result = document.getElementById('result');
        if(first_input.value==0 && second_input.value==0)
        {
            result.innerHTML='!wrong input';
        }
        else if(second_input.value==0)
        {
            result.innerHTML='!wrong input';
        }
        else
        {
        const sum = parseFloat(first_input.value)/parseFloat(second_input.value);
        result.innerHTML= 'The result is: '+sum;
        }
        
    }
    
    addButton.addEventListener('click',addHandler)
    subtractButton.addEventListener('click',subtractHandler)
    multiplyButton.addEventListener('click',multiplyHandler)
    divideButton.addEventListener('click',divideHandler)
    
    }
