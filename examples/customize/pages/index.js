import { useState } from 'react'
import { presets } from '../presets'
import ReactTextWaterMask from 'text-water-mask/dist/react'

const Index = () => {
  const [i, setI] = useState(0)
  const [config, setConfig] = useState(presets[0])
  const [configStr, setConfigStr] = useState(JSON.stringify(presets[0], null, 2))
  return (<div style={{ position: 'relative' }}>
    <select value={i} onChange={e => {
      setI(e.target.value)
      setConfig(presets[e.target.value])
      setConfigStr(JSON.stringify(presets[e.target.value], null, 2))
    }}>
      {presets.map((x, j) => (<option key={j} value={j}>{x.text}</option>))}
    </select>
    <br />
    <textarea value={configStr} rows="10" onChange={e => {
      let str = e.target.value
      setConfigStr(str)
      try {
        let parsed = JSON.parse(str)
        setConfig(parsed)
      } catch (e) { }

    }} />
    <p>cur config</p>
    <pre>{JSON.stringify(config, null, 2)}</pre>
    <ReactTextWaterMask {...config} />
    {/* <ReactTextWaterMask text="abc" textProps={{}} svgProps={{}} maskProps={{}} /> */}
  </div>)
}

export default Index