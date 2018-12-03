# Style and Stylesheet

- Style: font, color, align, and other elements of styling used in HTM-
- Stylesheet: a space that helps manage all style components

We differentiate the outer appearance of the web document and the content that goes inside it. 
By differentiating the two, we can either modify the appearance only, or the content only.

## Syntax
```css
p { text-align: center; }
```
- p: selector - an element that will receive the property specified between { and }
- text-align: style property
- center: value

```css
h2{
    font-size: 20px;
    color: orange;
}
```
In the example above, h2 (header) will have a font-size of 20px and the orange color.

## Internal vs External Stylesheet

There are two ways to manage the stylesheet: internally and externally

Having a style tag inside the head tag is a way to manage internally.
All style properties and values will be listed will be used within that document.

Having a separate document for stylesheet is a way to manage externally.
The document must be linked using href within the head tag.

## In-line Style

If you just need to apply the style to a specfic portion of the document only, use in-line style. 

## Selector

As mentioned previously, selector designates an element that will receive the property specified between { and }.
`*` is a special symbol that means - everything under the hierarchy of ...
```html
* { property1: value1; property2: value2; ... }
```
If above is the case, then the properties will be applied to every element.
We can also have `*p`, which means that properties will be applied to every element below `p`.

## Class vs id Selector
Similar: Both apply properties to specified elements on the document
Different:
    - `class`: if the style is to be repeated several times within the document, use `class`  
    - `id`: if the style is to be used only once within the document, use `id`
```html
/*class selector*/

.bluetext {
    color: blue;
}

/*id selector*/

#container {
    background: #ff6a00;
    width: 400px;
    height: 200px;
    margin: 0 auto;
}
```

