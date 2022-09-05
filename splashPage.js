function changeBackground(num){
    let holdBackground; 
     
    if(document.body.className){
        holdBackground = document.body.className;
    }

    document.body.className = '';
    
    if(num === '1' && holdBackground !=='first-background'){
        document.body.classList.add('first-background');
    }
    else if(num === '2' && holdBackground !== 'second-background'){
        document.body.classList.add('second-background');
    }
    else if(num === '3' && holdBackground !=='third-background'){
        document.body.classList.add('third-background');
    }
    else {
        console.log('Previous background works!');
    }
}