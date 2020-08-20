export const timeTransfer = timestamp => {
  timestamp = timestamp * 1000
  const now = Date.now()
  const diff = now - timestamp
  const d = Math.floor(diff / (24 * 3600 * 1000))
  const h = Math.floor(diff / (3600 * 1000))
  const m = Math.floor(diff / (60 * 1000))
  const s = Math.floor(diff / 1000)

  if (d > 1) {
    return `${d}天${h - d * 24}小时前`
  }

  if (h > 0 && h < 24) {
    return `${h}小时${m - h * 60}分钟前`
  }

  if (m > 0 && m < 60) {
    return `${m}分钟${s - m * 60}秒前`
  }

  if (s > 1 && s < 60) {
    return `${s}秒前`
  }

  return '刚刚'
}
