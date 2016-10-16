# double-rainbow

Double-rainbow allows you to transform a <select> into a nice color picker.

## Demo

[https://agence-webup.github.io/double-rainbow/](https://agence-webup.github.io/double-rainbow/)

## Install

### bower
```shell
bower install --save double-rainbow
```

### npm
```shell
npm install --save double-rainbow
```


## Use

Just add a simple select with supported values for colors (option text is used for color title)

```js
<select id="picker">
    <option value="#f44336">red</option>
    <option value="#03a9f4">blue</option>
    <option value="#ffeb3b">yellow</option>
    <option value="#ff5722">orange</option>
    <option value="#4caf50">green</option>
    <option value="#795548">brown</option>
    <option value="#607d8b">grey</option>
    <option value="#009688">turquoise</option>
    <option value="#e91e63">pink</option>
</select>
```

Then, instanciate double-rainbow
```js
let picker = new DoubleRainbow('#picker').init();
```

The select will be replaced by the picker.

That's all!

## Styling

Double-rainbow is fully customizable via CSS. Feel free to be inspired by the [default style](https://github.com/agence-webup/double-rainbow/blob/master/src/double-rainbow.css).

## Licence
Released under the [MIT LICENSE](http://opensource.org/licenses/MIT)  
Developed by [robinparisi](https://github.com/robinparisi/) [@agencewebup](https://github.com/agence-webup)
