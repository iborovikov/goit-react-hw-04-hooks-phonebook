import PropTypes from 'prop-types';
import Contact from "./Contact";

function ContactList ({contacts, removeContact}) {

    return (
    <ul>
       <Contact removeContact={removeContact} contacts={contacts} />
    </ul>
    );

};
export default ContactList

ContactList.propTypes = {
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }))
};