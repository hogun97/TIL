# Colors

There are several ways to represent color on web:
    + base-16: used to specify the details in a color
    + hsl/hsla
    + rgb/rgba: can specify the opacity too 
    + accurate color name: use common, solid colors (blue, orange, red, etc)

- `background-color`: assign a background color for a web page
```css
background-color: <color>

<style>
    body {
        background-color:#0094ff;   /*entire document*/
    }
    div {
        background-color:white;     /*div area only*/
        width:90%;
        padding:15px;
        border:1px solid black;
    }
    p {
        line-height:30px;
    }
ᐸ/style>
```
- `background-clip`: assign the background border
```css
background-clip: border-box | padding-box | content-box
```
    + border-box: applied up to the border
    + padding-box: applied up to the padding, within the border
    + content-box: applied only on the content

- `background-image`: assign background image using the image filepath
```css
background-image: url(filepath)

<style>
    body { background-image: url('images/bg1.png'); }
ᐸ/style>

repeat :: 
```
- `background-repeat`: assigns whether to repeat the background image

```css
background-repeat: repeat | repeat-x | repeat-y | no-repeat
```
    + repeat: repeat until the browser window is full both horizontally and vertically
    + repeat-x: repeat - horizontally
    + repeat-y: repeat - vertically
    + no-repeat: display image only once

- `background-size`: size of the background
```css
background-size: auto | contain | cover | <size> | <percentage>
```
    + auto: original image size
    + contain: fit the background size
    + cover: scale to cover the entire background
    + size: set width and height
    + percentage: set width and height in terms of its proportion to original image 

- `background-position`: assign the position of the background image
```css 
background-position: <horizontal pos> <vertical pos>;
horizontal: left | center | right | <percentage> | <length>
vertical: top | center | bottom | <percentage> | <length>
```
- `background-attachment`: fixing a background image
```css
background-attachment: scroll | fixed

body {
    background-image:url('images/bg3.jpg');
    background-repeat:no-repeat;
    background-position:right bottom;
    background-attachment:fixed;
}
```
There are many background properties. The order does not matter much because all properties are different and there will not be any conflicts.

