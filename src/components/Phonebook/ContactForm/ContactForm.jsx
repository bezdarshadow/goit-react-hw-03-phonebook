import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import styles from './contact-form.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      name,
      number,
    };
    const { onChange } = this.props;

    onChange(newContact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { numberInputId, nameInputId } = this;
    const { name, number } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.inputList}>
            <label className={styles.label} htmlFor={nameInputId}>
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              id={nameInputId}
            />
          </div>
          <div className={styles.inputList}>
            <label className={styles.label} htmlFor={numberInputId}>
              Number
            </label>
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleChange}
              required
              id={numberInputId}
            />
          </div>
            <button className={styles.button} type="submit">
              Добавить контакт
            </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
