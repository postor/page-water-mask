import { getConfig, Config, getBackgroundImageStr } from './lib'

export default function getWaterMask(config: Config | string) {
  let { text, textProps, maskProps, svgProps } = getConfig(config)
  let div = document.createElement('div')
  let style = {
    ...(maskProps.style || {}),
    backgroundImage: getBackgroundImageStr(text, svgProps, textProps)
  }
  for (let k in maskProps) {
    // @ts-ignore
    div[k] = maskProps[k]
  }
  for (let k in style) {
    // @ts-ignore
    div.style[k] = style[k]
  }
  return div
}