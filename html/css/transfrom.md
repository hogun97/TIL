# CSS3 Transform

Altering the shape or position of elements

## Translate

```css
transform:translate(tx, ty)
transform:translate3d(tx, ty, tz)
transform:translateX(tx)
transform:translateY(ty)
transform:translateZ(tz)

<style>
    .movex:hover { transform: translateX(50px); }
    .movey:hover { transfrom: translateY(20px); }
    .movexy:hover { transform: translate(10px, 20px); }
</style>
```

## Scale

```css
transform:scale(sx, sy)
transform:scale3d(sx, sy, sz)
transform:scaleX(sx)
transform:scaleY(sy)
transform:scaleZ(sz)

<style>
    .scalex:hover { transform: scaleX(1.2); }
    .scaley:hover { transform: scaleY(1.5); }
    .scale:hover { transform: scale(0.7); }
</style>
```

## Rotate

```css
transform:rotate(degree)
transform:rotate(rx, ry, degree)
transform:rotate3d(rx, ry, rz, degree)
transform:rotateX(degree)
transform:rotateY(degree)
transform:rotateZ(degree)

/*2d rotation*/
<style>
    .rotate1:hover { transform: rotate(20deg); }
    .rotate2:hover { transform: rotate(-40deg); }
</style>

/*3d rotation*/
<style>
    .origin { perspective: 200px; }
    .rotatex { transform: rotateX(45deg); }
    .rotatey { transform: rotateY(45deg); }
    .rotatez { transform: rotateZ(45deg); }
    .rotatexyz { transform: rotate3d(2.5, 1.2, -1.5, 45deg); }
</style>
```

## Skew

```css
transform:skew(ax, ay)
transform:skewX(ax)
transform:skewY(ay)
```

## Transform-origin
- Assigns a new origin to one of the four corners
```css
transform-origin: <x> <y> <z> | initial | inherit ;

<style>
    .rose { transform: rotateZ(10deg); }
    .ltop .rose { transform-origin: left top; }
    .rtop .rose { transform-origin: right top; }
    .lbottom .rose { transform-origin: left bottom; }
    .lbottom .rose { transform-origin: right bottom; }
</style>
```

## Transform-style

```css
transform-style: flat | preserve-3d
/*whether to apply style in 2d(flat) or 3d*/
```

## Backface-visibility

```css
backface-visibility : visible | hidden
/*whether to show the back side of the image or not*/
```

