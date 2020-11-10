/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
export function query (el: string | Element): Element {
  // 字符串
  if (typeof el === 'string') {
    // 全局查找元素
    const selected = document.querySelector(el)
    // 没找到
    if (!selected) {
      // 非生产环境 报警告
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + el)
      // 创建一个空div元素
      return document.createElement('div')
    }
    // 找到后 返回元素
    return selected
  } else {
    // 元素
    return el
  }
}
