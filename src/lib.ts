const deepmerge = require("deepmerge")
const base64 = require('base-64')

export interface Props {
  [key: string]: any
}

export interface Config {
  text: string,
  textProps: Props,
  svgProps: Props,
  maskProps: Props,
}

export function style2str(style: Props) {
  return Object.keys(style).map(k => `${k}:${style[k]}`).join(';')
}
export function props2str(props: Props) {
  let arr = []
  for (let k in props) {
    if (k == 'style') {
      arr.push(`style="${style2str(props[k])}"`)
    } else {
      arr.push(`${k}="${props[k]}"`)
    }
  }
  return arr.join(' ')
}

export const svgPropsDefault = {
  width: '200px',
  height: '100px',
  xmlns: 'http://www.w3.org/2000/svg',
}

export const textPropsDefault = {
  x: '15px',
  y: '15px',
  style: {
    transform: `rotate(30deg)`
  }
}

export const maskPropsDefault = {
  style: {
    opacity: '0.3',
    width: `100%`,
    height: `100%`,
    pointerEvents: `none`,
    top: 0,
    left: 0,
    position: `absolute`
  }
}

export function getConfig(config: Config | string): Config {
  let cfg: Config = {
    text: '',
    svgProps: svgPropsDefault,
    textProps: textPropsDefault,
    maskProps: maskPropsDefault
  }
  if (typeof config == 'string') {
    cfg.text = config
  } else {
    cfg = deepmerge(cfg, config)
  }
  return cfg
}

export function getBackgroundImageStr(text: string, svgProps: Props, textProps: Props) {
  return `url("data:image/svg+xml;base64,${base64.encode(
    `<svg ${props2str(svgProps)}>${`<text ${props2str(textProps)}>${text}</text>`}</svg>`
  )}")`
}