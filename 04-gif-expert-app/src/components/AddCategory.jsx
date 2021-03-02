import {useState} from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({onAdd}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length > 2){
            onAdd(value);
            setValue("");
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
            type="text"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value) }/>
        </form>
    )
}

AddCategory.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default AddCategory
