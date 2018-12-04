# Transition

Makes a gradual transition from one state to another

## transition-property
- Attribute can be anything - background color, width, height, etc...
- If this attribute is not specified, all attributes will be subject to transition

```css
transition-property: all | none | attribute name
```

## transition-duration
- How long the transition is going to last
- Unit is seconds or milliseconds

## transition-timing-function
- How the transition is going to proceed - timing

```css
transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n)
```

## transition-delay 
- Assign when the transition is going to occur
- Unit is seconds or milliseconds

```css
<style>
#no-delay {
    transition-duration: 3s;
}
#delay {
    transition-duration: 3s;
    transition-del: 1s;
}
</style>
```

# Animation

- `@keyframes`: assign the point at which change of state occurs (from-to)
- `animation-duration`: how long animation occurs
- `animation-direction`: what element will do after animation ends
- `animation-iteration-count`: how many times animation will repeat itself
- `animation-timing-function`: same as transition-timing-function

