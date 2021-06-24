import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState(({
        data: [],
        loading: true
    }));

    // In old React with classes, this is componentDidMount()
    useEffect(() => {
        getGifs( category )
            .then( images => {
                setState({
                    data: images,
                    loading: false
                });
            });
    }, [category]);

    return state;
}