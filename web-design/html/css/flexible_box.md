# Flexible Box Layout

 Positioning flex box on a grid layout
 Depending on the available space, it is possible to freely change width, height and position.

 1. Flex container: the most fundamental layer that contains all flex items
 2. Flex item: elements in the flex container
 3. Main axis: direction of positioning flex items in the flex container - commonly left to right
 4. Cross axis: perpendicular axis to the main axis - commonly top to bottom

 - `display`: assigns the flex container

 ```css
 display: flex | inline-flex

 <style>
 #container {
     display:flex;
 }
 </style>

/*Since container display is flex, the div contents will be positioned using box level flex*/
 <div id="container">
    <div></div>
    <div></div>
</div>
 ```

Be sure to check the browser suffix according to usage:
    - -webkit-box
    - -moz-box
    - -ms-flexbox
    - -webkit-flex
    - flex

- `flex-direction`: axis direction while positioning flex items

```css 
flex-direction: row | row-inverse | column | column-inverse
```

    + row: left to right
    + row-inverse: right to left
    + column: top to bottom
    + column-inverse: bottom to top

- `flex-wrap`: position flex items in a single or multiple lines

```css 
flex-wrap: no-wrap | wrap | wrap-reverse
```

    + no-wrap: default - position in single line
    + wrap: position in multiple lines
    + wrap-reverse: position in multiple lines but in reverse order

- `justify-content`: positioning guideline in line with main axis

```css
justify-conent: flex-start | flex-end | center | space-between | space-around
```

- `align-items`: positioning guideline in line with cross axis 

```css
align-items: stretch | flex-start | flex-end | center | baseline
```

- `align-self`: positioning guideline in line with cross axis

```css
align-self: auto | stretch | flex-start | flex-end | center | baseline
```

- `align-content`

```css
align-content: flex-start | flex-end | center | space-between | space-around 
```

- `flex`: scaling the size of the flex item

```css
flex: [<flex-grow> <flex-shrink> <flex-basis>] | auto | initial

<style>
    #box1 {
        flex: 1 1 0;
    }
    #box2 {
        flex: 2 2 0;
    }
</style>

