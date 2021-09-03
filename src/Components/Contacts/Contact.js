import PropTypes from 'prop-types';

function Contact ({removeContact, contacts}) {

    const deleteContact = (e) => {
        removeContact(e.currentTarget.id)
    };

    return (
        contacts.map(({ name, number, id }) =>
            <li key={id}>{name}: {number} <button type='button' id={id} onClick={deleteContact}>Delete</button></li>)
    );

};

export default Contact

Contact.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
}