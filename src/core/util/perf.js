import { inBrowser } from './env'

export let mark
export let measure

// 性能监控相关
if (process.env.NODE_ENV !== 'production') {
  // 在浏览器模式下 perf 赋值为 window.performance
  // 其他条件为 false
  const perf = inBrowser && window.performance
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = tag => perf.mark(tag)
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag)
      perf.clearMarks(startTag)
      perf.clearMarks(endTag)
      // perf.clearMeasures(name)
    }
  }
}
