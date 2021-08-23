import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { EmptyComponent } from './EmptyComponent'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar />
            <main>
                {/* <EmptyComponent/> */}
                <NoteScreen/>
            </main>
        </div>
    )
}
