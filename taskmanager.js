console.log('hello Jodick')
document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#submit').disabled=true;

    document.querySelector('#task').onkeyup= ()=>{
        if (document.querySelector('#task').value.length>0){
            document.querySelector('#submit').disabled=false;
        }else{
            document.querySelector('#submit').disabled=true;
        }
    }
    document.querySelector('form').onsubmit = ()=>{
        const task = document.querySelector('#task').value;

        //console.log(task)
        const li = document.createElement('li');
        li.innerHTML=task;

        document.querySelector('#tasks').append(li);
        document.querySelector('#task').value='';
        document.querySelector('#submit').disabled=true;

        return false;
        //this return to false function help your browser not send forms to a server, it only sends to your laptop

        //document.querySelector('ul').innerHTML=task;
    }
})