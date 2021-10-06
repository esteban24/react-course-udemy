import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { EmptyComponent } from './EmptyComponent'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    const { active } = useSelector(state => state.notes);
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {
                    (active) ? <NoteScreen/> : <EmptyComponent/>
                }
            </main>
        </div>
    )
}
