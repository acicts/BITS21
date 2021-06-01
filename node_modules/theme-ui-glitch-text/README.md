# Theme-UI Glitch Text

<img alt="Theme-UI Glitch Text" src="https://media.giphy.com/media/dZjeKTKhj4ityIs58A/source.gif" />

React component for adding glitch text effect. Component won't be animated if `prefers-reduced-motion` media query is set to `reduce`.

## API

Prop | Default | Description
---|---|---
`text` | "" | `::before` and `::after` text
`duration` | `5000ms` | Animation duration
`limit` | `0.5` | Amount of glitch effect
`keyframesNum` | `20` | Number of keyframes
`position` | `[-5, 5]` | Amount of left and right offset
`shadow` | `[-2, 2]` | Amount of left and right `text-shadow`
`colors` | `['red', 'green', 'blue']` | Text shadow colors
`backgroundColor` | `#fff` | Background color

## Example

```jsx
<GlitchText
  text="Theme-UI Glitch Text"
  duration="5000ms"
  keyframesNum={30}
  limit={1}
  colors={['pink', 'orange', 'purple']}
  position={[-2, 2]}
  shadow={[-1, 1]}
  backgroundColor="background"
>
  Theme-UI Glitch Text
</GlitchText>
```