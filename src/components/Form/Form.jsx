import css from './Form.module.css';
import React, { Component } from "react";
import { nanoid } from 'nanoid';


export class Form extends Component {
    
    formSubmit = e => {
        e.preventDefault(); 
        const form = e.currentTarget.elements;
        const name = form.name.value;
        const number = form.number.value;
        const id = nanoid();

    this.props.onSubmit({ id, name, number });
    e.currentTarget.reset();
    }

    render(){
    return(
        <form className={css.form} onSubmit={this.formSubmit}>
            <label className={css.label}>Name</label>
            <input className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required />
            
            <label className={css.label}>Number</label>
            <input className={css.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
/>
            <button className={css.butt} type="submit">Add Contact</button>
        </form>
    )}
}