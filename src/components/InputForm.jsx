import React from 'react'

const InputForm = ({placeholder}) => {
    return (
        <div>
           <input
                className="form-control mb-2" 
                type="text" 
                placeholder={ placeholder }
            /> 
        </div>
    )
}

export default InputForm
