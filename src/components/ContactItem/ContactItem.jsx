import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

export const ContactItem = ({ contacts, findUser, removeContact }) => {
  return findUser().map(({ name, phoneNumber, id }) => (
    <li key={id} className={s.listItem}>
      <p>
        {name}: {phoneNumber}
      </p>
      <button
        type="button"
        className={s.btnDelete}
        onClick={() => {
          removeContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
};

ContactItem.propTypes = {
  findUser: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
