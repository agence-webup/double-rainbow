"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoubleRainbow = function () {
    function DoubleRainbow(target, options) {
        _classCallCheck(this, DoubleRainbow);

        this.select = document.querySelector(target);
        this.colors = [];
        this.currentColor;
    }

    _createClass(DoubleRainbow, [{
        key: 'init',
        value: function init() {
            this._constructPicker();
            this.updateColors();
            this._hideSelect();
            this._insertPicker();
            this._bindEvents();
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this = this;

            this.btn.addEventListener('click', function () {
                if (_this.wrapper.classList.contains('dr-wrapper--active')) {
                    _this.hideDropdown();
                } else {
                    _this.showDropdown();
                }
            });

            this.list.addEventListener('click', function (event) {
                if (event.target.dataset.color) {
                    _this.btn.style['background-color'] = event.target.dataset.color;
                    _this.hideDropdown();
                }
            });
        }
    }, {
        key: 'updateColors',
        value: function updateColors() {
            var _this2 = this;

            [].forEach.call(this.select, function (el) {
                _this2.colors.push(el.value);
                var listItem = document.createElement('li');
                listItem.style['background-color'] = el.value;
                listItem.dataset.color = el.value;
                _this2.list.appendChild(listItem);
            });

            this.btn.style['background-color'] = this.colors[0];
        }
    }, {
        key: '_hideSelect',
        value: function _hideSelect() {
            this.select.style.display = 'none';
        }
    }, {
        key: 'showDropdown',
        value: function showDropdown() {
            this.wrapper.classList.add('dr-wrapper--active');
        }
    }, {
        key: 'hideDropdown',
        value: function hideDropdown() {
            this.wrapper.classList.remove('dr-wrapper--active');
        }
    }, {
        key: '_insertPicker',
        value: function _insertPicker() {
            this.select.parentNode.insertBefore(this.wrapper, this.select);
        }
    }, {
        key: '_constructPicker',
        value: function _constructPicker() {
            this.wrapper = document.createElement('span');
            this.wrapper.classList.add('dr-wrapper');

            this.btn = document.createElement('button');
            this.btn.classList.add('dr-btn');

            this.list = document.createElement('ul');
            this.list.classList.add('dr-colors');

            this.wrapper.appendChild(this.btn);
            this.wrapper.appendChild(this.list);
        }
    }]);

    return DoubleRainbow;
}();