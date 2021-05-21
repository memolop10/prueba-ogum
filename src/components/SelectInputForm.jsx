import React from 'react'


const SelectInputForm = ({textValue}) => {
    return (

    <div className="input-group mb-2">
    
        <select className="custom-select" id="inputGroupSelect01">
          <option >{textValue}</option>
        </select>

    </div>

    )
}

export default SelectInputForm
