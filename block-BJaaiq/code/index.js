let root = document.querySelector('ul');

let max = 3;
let index=0;

function addQuotes(){
    for(let i=0 ; i<max; i++){
        let li = document.createElement('li');
        li.classList.add('font-1');
        let blockquote = document.createElement('li');
        let cite = document.createElement('li');
        blockquote.innerText = quotes[index].quoteText;
        cite.innerText = quotes[index].quoteAuthor;
        li.append(blockquote,cite);

        root.append(li);
        index++;
    }
}
document.addEventListener('scroll',()=>{
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight && index < quotes.length){
        addQuotes();
    }

});

window.addEventListener('DOMContentLoaded',()=>{
    alert(`DOM Content Loaded`);
    addQuotes();
})