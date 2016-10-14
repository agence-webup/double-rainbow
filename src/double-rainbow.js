"use strict";

class DoubleRainbow {

    constructor(target) {
        this.select = document.querySelector(target);
        this.colors = [];
        this.currentColor;
    }

    init() {
        this._constructPicker();
        this.updateColors();
        this._hideSelect();
        this._insertPicker();
        this._bindEvents();
    }

    _bindEvents() {
        this.btn.addEventListener('click', () => {
            if(this.wrapper.classList.contains('dr-wrapper--active')) {
                this.hideDropdown();
            } else {
                this.showDropdown();
            }
        });

        this.list.addEventListener('click', (event) => {
            if(event.target.dataset.color) {
                this.btn.style['background-color'] = event.target.dataset.color;
                this.hideDropdown();

                let index = this.colors.indexOf(event.target.dataset.color);

                // select the value
                this.select.options[index].selected = true;
            }
        });

    }

    updateColors() {
        [].forEach.call(this.select, (el) => {
            this.colors.push(el.value);
            let listItem = document.createElement('li');
            listItem.style['background-color'] = el.value;
            listItem.dataset.color = el.value;
            this.list.appendChild(listItem);
        })

        this.btn.style['background-color'] = this.colors[0];
    }

    _hideSelect() {
        this.select.style.display = 'none';
    }

    showDropdown() {
        this.wrapper.classList.add('dr-wrapper--active');
    }

    hideDropdown() {
        this.wrapper.classList.remove('dr-wrapper--active');
    }

    _insertPicker() {
        this.select.parentNode.insertBefore(this.wrapper, this.select);
    }

    _constructPicker() {
        this.wrapper = document.createElement('span');
        this.wrapper.classList.add('dr-wrapper');

        this.btn = document.createElement('button');
        this.btn.classList.add('dr-btn');

        this.list = document.createElement('ul');
        this.list.classList.add('dr-colors');

        this.wrapper.appendChild(this.btn);
        this.wrapper.appendChild(this.list);
    }



}
