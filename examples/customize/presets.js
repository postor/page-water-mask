export const presets = [
  {
    text: 'basic fill'
  },
  {
    text: 'full page',
    maskProps: {
      style: {
        position: 'fixed'
      }
    }
  },
  {
    text: 'grid size',
    svgProps: {
      width: '400px',
      height: '200px',
    }
  },
  {
    text: 'text font',
    textProps: {
      fill:"red",
      style: {
        font: "700 16px/26px 'Microsoft YaHei',SimHei,arial"
      }
    }
  },
]