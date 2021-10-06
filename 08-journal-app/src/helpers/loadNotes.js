import { db } from "../firebase/config"

export const loadNotes = async (uid) => {
    const notesCollection = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];

    notesCollection.forEach(child => {
        notes.push({
            id: child.id,
            ...child.data()
        })
    });

    return notes;
}