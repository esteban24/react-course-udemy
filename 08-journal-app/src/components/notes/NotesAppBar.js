import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const { active } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    }

    const handleUploadImage = () => {
        document.querySelector("#file-selector").click();
    }

    const handleFileChange = (e) => {
        if(e.target.files.length > 1) {
            Swal.fire('Excedded number of accepted files', 'Only one picture per note', 'error');
            return;
        }

        if(e.target.files.length === 0) {
            return;
        }

        const file = e.target.files[0];

        if(file) {
            dispatch(startUploading(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de Agosto de 2021</span>

            <input
                id="file-selector"
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={ handleFileChange }
                name="picture"
            />

            <div>
                <button 
                    className="btn"
                    onClick={ handleUploadImage }
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={ handleSaveNote }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
