import React, { useState } from 'react';
import AddCategory from './AddCategory';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Punch Man', 'Samuray X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories( categories => [...categories, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category } >{ category }</li>
                    })
                }
            </ol>
        </>
    );
};

export default GifExpertApp;