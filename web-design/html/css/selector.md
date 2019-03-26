# CSS3 Selector

- Combination Selector: combines two selectors to limit the number of elements being applied

- Descendant Selector
    + style is applied to all children under the parent
    + grandchildren are also applied the same

```css
section p { color: blue} 
/*color blue is applied to all p under section*/
```

- Child Selector 
    + style is applied only to the direct child of parent
    + use `>` symbol to represent which is parent and which is child

```css
section > p { color: blue; }
```

- (adjacent) Sibling Selector
    + Sibling selectors are selectors with the same parent
    + Adjacent requires them to be adjacent - the one right after

```css
h1 + p { text-decoration: underline; }
/*adjacent: apply underline to the first p tag after h1*/

h1 ~ p { text-decoration: underline; }
/*regular: apply underline to all p tag after h1*/
```

- Attribute Selector (refer to regex)
    + `[attribute ~=value]`: assigns style attribute a class that consists of the value
    + `[attribute |=value]`: assigns style attribute to a class with that value (including hyphens)
    + `[attribute ^=value]`: assigns style attribute to a class that starts with that value
    + `[attribute $=value]`: assigns style attribute to a class that ends with that value
    + `[attribute *=value]`: assigns style attribute to a class that contains the value

- Virtual Class: responds to action from a user
    + `:link`: style for an unvisited link
    + `:visited`: style for a visited link
    + `:active`: style for a web element that has been activated - when clicked
    + `:hover`: style for when cursor hovers over a web element
    + `:focus`: style for when an element on the web has been focused
    + `:enabled`: when an element can take inputs
    + `:disabled`: when an element can not take inputs
    + `:checked`: style for when a checkbox-type has already been selected
    + `:nth-child(n)`: style for nth child element
    + `:nth-last-child(n)`: style for nth from last child element

```css
<style>
    .navi a:link, .navi a:visited {
        padding: 10px 5px 5px 35px;
        display: block;
        color: #fff;
    }
    .navi a:hover, .navi a:focus {
        text-shadow: 0px 2px 2px #000;
        color: #FC0;
    }
    .navi a:active {
        color: red;
    }
</style>
```

The order of these virtual classes should be the following: link - visited - hover - active.
If the order is not followed, some style may not be applied.

```css
div p:nth-child(3) /*apply style to the 3rd p element of div*/
div p:nth-child(odd) ~ div p:nth-child(2n+1) /*can use 2n+1 in place of odd*/
div p:nth-child(even) ~ div p:nth-child(2n) /*can use 2n in place of even*/

<style>
    table tr:nth-child(2n+1) {
        background: lightgray;   
        color: black;
    }
    /*fill odd rows with lightgray*/
</style>

<table border="1">
    <tr><td>Blueberry</td></tr>
    <tr><td>Tomato</td></tr>
    <tr><td>Nuts</td></tr>
    ... ...
</table>
```

    + `::first-line`
    + `::first-letter`
    + `::before`: insert specifed content in front of element
    + `::after`: insert specified content behind the element 

