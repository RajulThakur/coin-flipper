function result(){
    const randomValue=Math.random();
    if(randomValue>=0.54)return 'Heads';
    else return 'Tails'
}


document.getElementById('flip-button').addEventListener('click',()=>{
    const resultElement=document.getElementById('result');
    resultElement.innerHTML='Flipping..';
    //selecting element onwhich animation we have to apply
    const element=document.querySelector('.coin');
    const element2=document.querySelector('.container');

    //applying animation
    element.style='animation:coinSpin 300ms linear infinite;';
    element2.style='animation:coinFall 1.5s ease-out ;';

    const Result=result();

    setTimeout(()=>{element.style.animation='none';
    element2.style.animation='none';
    changingImg(Result);
    resultElement.innerHTML=`It's ${Result}`

},1500);})


function changingImg(inputValue){
    const element=document.querySelector('.coin-div')
    element.innerHTML=`<img class="coin" src="${inputValue}.png">`
    
}


