let elm = document.createElement('div');
elm.classList.add('quotes');
let ol = document.createElement('ol');
let li = document.createElement('li');
elm.append(ol);
ol.append(li);
li.append(quotes.quoteText);

class Scroll{
    constructor(text,author){
        this.text = text;
        this.author=author;
    }
}

// let scrolling = new Scroll('mpew','shreyas');
// alert('scrolling');