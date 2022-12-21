function countHours(year, holidays) {
  let count  = 0
  holidays.forEach(date => {
    const d = new Date(`${year}/${date}`)
    const day = d.getDay()
    if(day !== 0 && day !== 6) count++
  })
  return count * 2
}
