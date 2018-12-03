# Box Model in CSS

- Block level element
    + an element takes up the entire line
    + element has a width 100%
    + `<div>` or `<p>`

- In-line level element
    + an element that shares horizontal space
    + takes up same amount of space as its size and rest is partitioned for other images
    + `<img>` or `<strong>`

- Box Model
    + Margin
    + Border
    + Padding
    + Content

- `width`, `height`
```css
width: <size> | <percentage> | auto
height: <size> | <percentage> | auto
```
- `display`: allows users to change between block level and in-line level
```css
display: none | contents | block | inline | inline-block | table | table-cell
```
    + block: use block level
    + inline: change block level to inline level
    + inline-block: use inline for elements and block for contents - most preferrable
    + none: hide the element without taking up that space

