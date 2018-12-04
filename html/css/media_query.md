# Media Query

```css 
@media [only | not] media type [and condition] * [and condition]

@media screen and (min-width:200px) and (max-width:360px) {
    ...
}
```

- Media types:
    + `all`
    + `print`
    + `screen`
    + `tv`
    + `aural`
    + `braille`
    + `handheld`
    + `projection`
    + `tty`
    + `embossed`
 
## Orientation 

- Differs orientation of the screen depending on landscape-portrait

```css 
<style>
@media screen and (orientation:landscape) {
    body {background-color:orange;}
}
@media screen and (orientation:portrait) {
    body {background-color:yellow;}
}
</style>
```

## External CSS File Reference

- Use link tag to access external CSS files

```css
<link rel="stylesheet" media="screen and (max-width:768px)" href="css/tablet.css">
```

- Use @import between style tag

```css
@import url("css/tablet.css") only screen and (min-width:321px) and (maxwidth:768px);
```

## Internal CSS File Reference

- Use media attribute within style tag 

```css
<style media="screen and (max-width:320px)">
    body {
        background-color: orange;
    }
</style>
```

- Use @media within style tag

```css
<style>
    @media screen and (max-width:320px) {
        body {
            background-color: orange;
        }
    }
</style>
```

