# Border

- `border-width`: assigns width of the border
```css
border-top-width: <size> | thin | medium | thick
border-right-width: <size> | thin | medium | thick
border-bottom-width: <size> | thin | medium | thick
border-left-width: <size> | thin | medium | thick
border-width: <size> | thin | medium | thick
```
As shown above, it is possible to make a border with different thickness.

- `border-color`: assigns color of the border
```css
border-top-color: <color>
border-right-color: <color>
border-bottom-color: <color>
border-left-color: <color>
border-color: <color>

*/Below are blue and red dashed border with 2px width.*/  
<style>
div {
    ... ...
    border-style: dashed;
    border-width: 2px;
}
.box1 { border-color: red; }
.box2 { border-color: blue; }
</style>
```
- `border`: assigns the mentioned properties altogether
```css
p {
    padding: 10px;
    border: 2px dotted black;
}
```
- `border-radius`: curved corners for the border
```css
border-top-left-radius: <size> | <percentage>
border-top-right-radius: <size> | <percentage>
border-bottom-right-radius: <size> | <percentage>
border-bottom-left-radius: <size> | <percentage>
border-radius: <size> | <percentage>

/*Use pic1 to cover the entire background of the border and the border will have curved corners of 20px radius.*/
<style>
.round {
    border: 2px solid red;
    border-radius: 20px;
}
#bg {
    background: url(images/pic1.jpg) no-repeat;
    background-size:cover;
}
</style>
```
- `box-shadow`: shadow effect
```css
box-shadow: none | <shadow value> [, <shadow value>]*;
<shadow value> = <horizontal dist> <vertical dist> <clarity>
<blot> <color> inset

<style>
    .box1 { box-shadow: 2px -2px 5px 0px black; }
    .box2 { box-shadow: 5px 5px 15px 5px gray; }
</style>
```
- `padding`: space between contents and border
```css
padding-top: <size> | <percentage> | auto
padding-right: <size> | <percentage> | auto
padding-bottom: <size> | <percentage> | auto
padding-left: <size> | <percentage> | auto
padding: <size> | <percentage> | auto
```
![padding](https://i.stack.imgur.com/A6YUp.png)

