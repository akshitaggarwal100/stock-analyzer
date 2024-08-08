const form = document.querySelector('.form')
const initial = document.querySelector('#initial')
const quantity = document.querySelector('#quantity')
const current = document.querySelector('#current')
const result = document.querySelector('.result')

form.onsubmit = (e) => {
    e.preventDefault()
    result.style.display = 'block'
    const initialPrice = initial.value
    const units = quantity.value
    const currentPrice = current.value
    const outcome = (currentPrice * units) - (initialPrice * units)
    if (outcome > 0) {
        result.style.backgroundColor = '#588157'
        result.innerText = `Your profit is ${outcome}`
    }
    else if (outcome === 0) {
        result.style.backgroundColor = '#fcbf49'
        result.innerText = `Your profit is ${outcome}`
    }
    else {
        result.style.backgroundColor = '#e63946'
        result.innerText = `Your loss is ${-outcome}`
    }
}
