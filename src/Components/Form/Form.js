import { useState } from "react"
import PropTypes from 'prop-types';
import s from '../Form/Form.module.css'


function Form({ onFormSubmit }) {
    
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const resetFormInput = () => {
        setName('');
        setPhoneNumber('');
    };

    const handleInputChange = (e) => {
        const type = e.currentTarget.name;
        const value = e.currentTarget.value;
        switch (type) {
            case 'name':
                setName(value)
                break;
            case 'phoneNumber':
                setPhoneNumber(value)
                break;
            default: alert('invalid type')
        };
    };

    const onSbmit = (e) => {
        e.preventDefault();
        onFormSubmit(name, phoneNumber);
        resetFormInput();
    };
        
    return (
        <form className={s.form} onSubmit={onSbmit}>
            <label className={s.label}>Name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.label}>Number
                <input
                    className={s.input}
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    />
            </label>
            <button className={s.btn} type="submit" >Add contact</button>
        </form>
    );
};
export default Form

Form.propTypes = {
    onFormSubmit: PropTypes.func.isRequired

}