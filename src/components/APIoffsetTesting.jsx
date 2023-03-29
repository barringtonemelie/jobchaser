import React from 'react'

const APIoffsetTesting = () => {
  return (
    <div>APIoffsetTesting</div>
  )
}

export default APIoffsetTesting

function offsetTesting() {
    let hits = 0
    let arr = []
    fetch('API')
    .then((res) => res.json())
    .then((data) => {
        hits = data.total.value
    })
    .then((data) => {
        while (arr.length < hits) {
            fetch(`API - offset()`)
        }
    })
}