# Reactive Web Design

Reactive web design allows various display dimensions without changing any of the contents on the page.

- Pros:
    + Accessible on all smart devices
    + Can design a horizontal web view
    + Easier to maintain the web page

- Cons:
    + Since reactive web design is new, it is supported only on the newest browsers

## Viewport

Viewport is the portion of the web page that displays actual contents.
PC and mobile screens have different ways of displaying pixels so viewport is needed to scale between them.

```html
<meta name="viewport" content="<attribute1=value1>, <attribute2=value2>, ...">

/*most common usage - set it to smartphone display view*/
<meta name="viewport" content="width=device-width, initial-scale=1">
```
    
    + `width`
    + `height`
    + `user-scalable`
    + `initial-scale`
    + `minimum-scale`
    + `maximum-scale`

## Grid system

- Grid system divides the screen into multiple columns and merge them if necessary.
- There are 960 grid system and 1200 grid system depending on the width of the screen.
- There are 12 column grid system, 16 column grid system and 24 column grid system depending on the column count
- 960px 12 column grid system is most commonly used.
- Fixed grid: screen width is evenly fixed.
- Fluid grid: screen width is assigned % and varies accordingly.

In a fixed grid, screen width is fixed so decreasing the browser size will hide some part of the page.
    - values are listed as pixels
In a fluid grid, screen width is variable so decreasing the browser size will scale the page accordingly - nothing hidden
    - values are listed as percentages

## Fluid fonts

- em unit
    + The width of parent element font M is 1em=16px
    + font size in em = (font size in px) / 16px

```css
<style>
    .header-text { font-size:2em; }
    .content { font-size:1.5em; }
    .right-side { font-szie:1.5em; }
    footer { font-size:1.5em; }
</style>
```

- rem unit
    + em unit is variable - the font size changes every time
    + rem fixes the font size from the beginning

```css
<style>
    body { font-size:16px; }
    .header-text { font-size:2rem; }
    .fluid-text { font-size:1.5rem; }
</style>
```

## Fluid image

The width of the a fluid image will scale according to the size of the brower.

1. CSS
    + Set `max-width` attribute of the image to 100%

    ```css
    <style>
        .content img {
            max-width:100%;
            height:auto;
        }
    </style>
    ```

2. Img tag and srcset attribute
    + Set values according to the screen width and pixel density

    ```css
    <img src="<image>" srcset="<image1>[, <image2>, <image3>, ...]">
    ```

3. Picture tag and source tag
    + Show image file that is variant not just on screen width but also on screen resolution
    
    ```css
    <picture>
        <source srcset="images/1.jpg" media="(min-width:1024px)">
        <source srcset="images/2.jpg" media="(min-width:768px)">
        <source srcset="images/3.jpg" media="(min-width:320px)">
        <img src="images/123.jpg" alt="fill with coffee" style="width:100px;">
    </picture>
    ```

## Fluid video

Same as fluid image but use CSS method - set max-width as 100%.

