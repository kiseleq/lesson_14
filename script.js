'use strict';

let DomElement = {
    selector: prompt('Введите . или #', ''),
    height: '50px',
    width: '100px',
    bg: '#FF8C00',
    fontSize: '30px',

    createDiv: function(selector, height, width, bg, fontSize) {

        // this.selector = selector;

        if (this.selector.slice(0, 1) === '.') {
            height = '500px';
            width = '800px';
            bg = '#941616';
            fontSize = '75px';
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize; 
            let newDivClass = document.createElement('div');
            newDivClass.textContent = 'Я новый блок1';
            newDivClass.style.height = this.height;
            newDivClass.style.width = this.width;
            newDivClass.style.backgroundColor = this.bg;
            newDivClass.style.fontSize = this.fontSize;
            document.body.appendChild(newDivClass);
            newDivClass = newDivClass.setAttribute('class', '.block');
            newDivClass = document.querySelector ('.block');

          console.log(newDivClass);
        } else if (this.selector.slice(0, 1) === '#') {
            height = '150px';
            width = '200px';
            bg = '#614d4d';
            fontSize = '50px';
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize; 
            let newDivId = document.createElement('div');
            newDivId.textContent = 'Я новый блок2';
            console.log(newDivId);
            newDivId.style.height = this.height;
            newDivId.style.width = this.width;
            newDivId.style.backgroundColor = this.bg;
            newDivId.style.fontSize = this.fontSize;
            document.body.appendChild(newDivId);
            newDivId = newDivId.setAttribute('id', '#block');
            newDivId = document.querySelector('#block');
            
        } 

    },
};

DomElement.createDiv();