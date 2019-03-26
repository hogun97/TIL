# CSS Positioning

- `box-sizing`: standard width value for the box model
```css
box-sizing: content-box | border-box

.box1 {
    box-sizing: content-box; /*contents area only*/
    width: 300px;            /*width of the contents area*/
    ... ...;
}
.box2 {
    box-sizing: border-box; /*up to the border area*/
    width: 300px;           /*width of the entire box model*/
    ... ...;
}
```
    + `content-box`: width of the content box
    + `border-box`: width of the border box

- `float`: make an element float either on the left or right side of the document
```css
float: left | right | none

<style>
    .box1 { float: left; }  
    .box2 { float: left; }  
    .box3 { float: left; }  
    .box4 { float: right; }
</style>
```
- `clear`: clears the float property
```css
clear: none | left | right | both

<style>
    .box1 { float: left; }
    .box2 { float: left; }  
    .box3 {  }   
    .box4 { clear: both; }
</style>
```
- `position`: positioning elements in the web document
```css
position: static | relative | absolute | fixed
```

1. `static`: follows the flow of the document
2. `relative`: a relative positioning - can alter the position of the elements
3. `absolute`: ignores the flow of the document - can fix the position anywhere
4. `fixed`: no inheritance applied - top left of the browser becomes (0,0)

- `visibility`: showing or not showing certain element on the web document
```css
visibility: visible | hidden | collapse

<style>
img {
    margin: 10px;
    padding: 5px;
    border: 1px solid black;
}
.invisible {
    visibility: hidden;
}
</style>
```
- `z-index`: decide the order of elements being piled - higher the z-index, higher it is positioned
```css
<style>
div#wrapper {
    position: relative;
}
.b1 { z-index:1; }
.b2 { z-index:3; }
.b3 { z-index:1; }  /*b2 will be placed on top*/
</style>
```

