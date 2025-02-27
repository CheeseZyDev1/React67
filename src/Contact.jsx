
import PropTypes from 'prop-types';

export default function Contact(prop) {
    return (
        <div>
            <h2>{prop.email}  {prop.phone}</h2>
            
            
        </div>
    );
}
Contact.propTypes = {
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};