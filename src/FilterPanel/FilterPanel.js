import React from 'react'
import SliderProton from '../SliderProton/SliderProton'

function FilterPanel(
    {
        selectedPrice,
        changePrice


    }
) {
    return (
        <>
            <SliderProton value={selectedPrice} changePrice={changePrice} /></>

    )
}

export default FilterPanel