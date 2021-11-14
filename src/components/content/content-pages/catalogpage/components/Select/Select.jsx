import './Select.module.css';
const Select = (props) => {
    return (
        <div>
            <select>
                <option selected disabled>Filter{ props.text }</option>
                <option value='Item1'>Item1</option>
                <option value='Item2'>Item2</option>
                <option value='Item3'>Item3</option>
                <option value='Item4'>Item4</option>
            </select>
        </div>
    )
}

export default Select;