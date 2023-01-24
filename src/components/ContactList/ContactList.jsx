import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, findUser, removeContact }) => {
  return (
    <ul className={s.list}>
      <ContactItem
        contacts={contacts}
        findUser={findUser}
        removeContact={removeContact}
      ></ContactItem>
    </ul>
  );
};

ContactList.propTypes = {
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
