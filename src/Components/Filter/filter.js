import PropTypes from 'prop-types';
import s from '../Filter/filter.module.css'

function Filter ({onFilterInputChange, filter}) {

    const handleInputChange = (e) => {
        onFilterInputChange(e.currentTarget.value);
    };

    return (
        <label>
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleInputChange}
            />
        </label>
    );
};

export default Filter

Filter.propTypes = {
    onFilterInputChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}