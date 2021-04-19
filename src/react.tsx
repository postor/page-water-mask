import * as React from 'react'
import { Config, getBackgroundImageStr, getConfig } from './lib'

const ReactTextWaterMask: React.FC<Config> = props => {
  const { text, textProps, svgProps, maskProps } = getConfig(props)
  let style = {
    ...(maskProps.style || {}),
    backgroundImage: getBackgroundImageStr(text, svgProps, textProps)
  }
  return (<div {...maskProps} style={style} />)
}

export default ReactTextWaterMask