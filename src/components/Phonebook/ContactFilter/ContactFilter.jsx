import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import styles from './contact-filter.module.css'
const ContactFilter = ({ value, onChange }) => {
    const filterInputId = nanoid()
  return (
    <>
      <label className={styles.label} htmlFor={filterInputId}> Find contacts by name</label>
      <input className={styles.input} type="text" name="filter" value={value} onChange={onChange} id={filterInputId} />
    </>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
