# Text Style

- `text-indent`: indenting the first word of the paragraph
```css
text-indent: <size> | <percentage>

<style>
    .indent1 { text-indent:15px; }
    .indent2 { text-indent:5%; }
</style>
```
- `line-height`: spacing between lines
```css
line-height : normal | <number> | <size> | <percentage> | inherit

<style>
    .big-line { line-height:2; }
    .small-line { line-height: 0.7; }
</style>
```
- `list-style-type`: unordered list bullet or changing the order of a list
```css
list-style-type : none | <unordered list> | <order numbering>

<style>
    .book1 {
        list-style-type: lower-alpha;
    }
    .book2 {
        list-style-type: upper-roman;
    }
</style>

<ol class="book1">
    <li>Book1-1</li>
    <li>Book1-2</li>
    <li>Book1-3</li>
</ol>

<ol class="book2>
    <li>Book2-1</li>
    <li>Book2-2</li>
    <li>Book2-3</li>
<ol>
```
- `list-style-image`: changing unordered list into an image
```css
list-style-image : <image> | none 
<image> = url(image filepath)

<style>
    ul {
        list-style-image:url('images/dot.png');
    }
</style>
```
- `list-style-position`: change the position of the bullet or numbering
```css 
list-style-position : inside | outside;

<style>
    .inside {
        list-style-position:inside;
    }
ᐸ/style>

<h3> List ᐸ/h3>
<ul class=inside> ... ᐸ/ul>    
```

