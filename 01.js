function wrapping(gifts) {
  return gifts.map(gif => {
    const w = Array(gif.length + 2).fill('*').join('')
    return `${w}\n*${gif}*\n${w}`
  })
}
