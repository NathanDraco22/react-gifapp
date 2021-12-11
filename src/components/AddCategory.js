import { useState } from "react"
import PropTypes from "prop-types"

const AddCategory = ({setCategories})=>{

    const [textValue, setTextValue] = useState("");

    const handledSubmit = (e)=>{
        e.preventDefault();

        if ( textValue.trim().length > 2){

            setCategories( cats => [ textValue, ...cats])

            setTextValue("")
        }

    }

    return <form
        onSubmit={handledSubmit}
    >
        <input 
            type={"text"}
            placeholder="esciba cualquier mierda"

            value={textValue}

            onChange={(e)=>{
                setTextValue(e.target.value)
            }}
        />    
    </form>

}

export default AddCategory

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}