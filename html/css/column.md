# Modifying a Column 

- `column-width`: fix the column width - if screen gets wider, column count increases
```css
column-width: <size> | auto
```
- `column-count`: fix the column count - if screen gets wider, column width increases
```css
column-count: <number> | auto

<style>
.multi {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
}
</style>
<div class="multi"> ... ...</div>
```
```css
break-before:column,
break-before:avoid-column,
break-after:column,
break-after:avoid-column

<style>
.multi {
    column-count: 4;
    column-rule: 2px dotted #000;
    text-align: justify;
}
/*divide all h3-headers into columns and break before*/
.multi h3 {
    break-before: column;
}
</style>
```
- `column-span`: merging multiple columns into one
```css
column-span: 1 | all     /*all or none*/

<style>
.multi {
    column-count: 3;
    column-rule: 2px dotted #000;
}
.no-col {
    column-span:all;
}
</style>
<div class="multi">
    ... ...
    <div class="no-col">... ...</div>
</div>
```
- `caption-side`: positioning captions
```css
caption-side: top | bottom
```
- `border`: assign both table border and cell border
```css
<style>
.table1 {
    border: 1px solid black;
}
.table1 td {
    border: 1px dotted black;
}
</style>
```
- `border-collapse`: whether to merge the table and cell border
```css
border-collapse: collapse | separate

<style>
.table1 {
    border: 1px solid black;
    border-collapse:collapse;
}
.table1 td {
    border: 1px dashed black;
}
</style>
```
- `border-spacing`: assign space between cells
- `empty-cell`: whether to hide empty cells or not
```css
border-spacing: <size>

<style>
.table1 {
    border: 1px solid black;
    border-collapse: separate;
    border-spacing: 20px 10px;
}
.table1 td {
    border: 1px solid black;
}
</style>

<style>
.schedule { border-collapse:separte; }
td { border: 1px solid black; }
#tb1 td { empty-cells:show; }
#tb2 td { empty-cells:hide; }
</style>
```
- `text-align`: align text position in table
- `vertical-align`: align text position vertically

