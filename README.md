# text-water-mask

支持 js 和 react 的文本水印 | text water-mask for js and react

![screenshot](./examples/basic/screenshot.jpg)

高性能 | high performance  
- 仅使用一个 div | single div element
- 没有事件侦听自动适应父容器 | without listeners 

可定制 | fully customizable
- mask div | mask div
- 平铺背景 svg 定制 | background svg
- svg text 元素定制 | svg text element

## 使用 | usage

umd

```
<script src="../../dist/text-water-mask.umd.js"></script>
<script>
  document.body.appendChild(TextWaterMask.default({ text: 'hello world!!' }))
</script>
```

commonjs
```
const textWaterMask = require('text-water-mask').default
document.body.appendChild(TextWaterMask.default({ text: 'hello world!!' }))
```

react umd

```
<script src="../../dist/react-text-water-mask.umd.js"></script>
<script>
  let d = React.createElement, C = ReactTextWaterMask.default
  ReactDOM.render(d('div', { style: { position: 'relative' } },
    d('input'), d('p', null, `hello world!`),
    d(C, { text: 'hello react!' })
  ), document.body)
</script>
```
react commonjs

```
import ReactTextWaterMask from 'text-water-mask/dist/react'
ReactDOM.render(<div style={{position:'relative'}}>
  <input />
  <p>hello world!</p>
  <ReactTextWaterMask text={'hello react!'} />
</div>,document.body)
```

体验 | try yourself

https://postor.github.io/text-water-mask/