// моё решение
const getHiddenCard = (text, х = 4) => {
  const obrez = text.slice(12, 16)
  const x = '*'.repeat(х)
  const result = `${x}${obrez}`
  console.log(result)
  return result
}

// решение учителя
const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigitsLine = cardNumber.slice(12)
  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`
}