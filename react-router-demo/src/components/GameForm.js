import { useRef } from "react";
import Card from "./UI/Card";
import classes from './GameForm.module.css';

const GameForm = (props) => {
    const nameInputRef = useRef();
    const detailsInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDetails = detailsInputRef.current.value;

        // optional: Could validate here

        props.onAddGame({ name: enteredName, details: enteredDetails });
    }

    return (
        <>
            <Card>
            <form className={classes.form} onSubmit={submitFormHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' ref={nameInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor='details'>Details</label>
                    <textarea id='details' rows='5' ref={detailsInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button className='btn'>Add Game</button>
                </div>
            </form>
            </Card>
        </>
    );
}

export default GameForm;