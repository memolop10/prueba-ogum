import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudiesAction } from '../redux/studiesDuck'

const SelectFormation = ({textValue}) => {

    const dispatch = useDispatch();

    const studies = useSelector( store => store.cat_estudies.studies )

    useEffect(() => {
        const fetchData = () => {
            dispatch(getStudiesAction())
        }

        fetchData()
    },[dispatch])


    return (

    <div className="input-group mb-2">
    
        <select className="custom-select" id="inputGroupSelect01">
          <option >{textValue}</option>
          {
              studies.map( item => (
                  <option key={item.id } value={item.id}>{ item.description }</option>
              ))
          }
        </select>

    </div>

    )
}

export default SelectFormation
