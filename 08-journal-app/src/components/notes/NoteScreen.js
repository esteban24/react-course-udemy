import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeletingNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const { active: note } = useSelector(state => state.notes);
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, id, title, url } = formValues;
    const dispatch = useDispatch();

    const activeId = useRef(note.id);
    const activeImg = useRef(note.url);

    useEffect(() => {
        // Refresh the active note
        if(note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

        // Refresh active note image if it changes
        if(note.url !== activeImg.current) {
            reset(note);
            activeImg.current = note.url;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, { ...formValues }));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeletingNote(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                >
                </input>
                <textarea
                    placeholder="What just happened?"
                    className="notes__textarea"
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>
                {
                    (note.url) &&
                    <div className="notes__image">
                        <img
                            style={{ maxWidth: "200px", maxHeight: "200px"}}
                            src={url}
                            alt={url}
                        ></img>
                    </div>
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={ handleDelete }
            >
                Delete
            </button>
        </div>
    )
}
