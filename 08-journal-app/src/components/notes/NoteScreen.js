import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                >
                </input>
                <textarea
                    placeholder="What just happened?"
                    className="notes__textarea"
                ></textarea>
                <div className="notes__image">
                    <img
                        src="https://s.clipartkey.com/mpngs/s/302-3022664_pokemon-red-8-bit.png"
                        alt="pokemon_trainer"
                    ></img>
                </div>
            </div>
        </div>
    )
}
