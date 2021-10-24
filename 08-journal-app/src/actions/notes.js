import Swal from "sweetalert2";
import { db } from "../firebase/config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);

        dispatch(activeNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async(dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const noteParsed = { ...note };

        if (!noteParsed.url) {
            delete noteParsed.url;
        }

        delete noteParsed.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteParsed);
    
        dispatch(refreshNote(note.id, noteParsed));
        Swal.fire('Note saved', `'${note.title}' sucessfully saved.`, 'success');
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload : {
        id, 
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async( dispatch, getState ) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });
        
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}