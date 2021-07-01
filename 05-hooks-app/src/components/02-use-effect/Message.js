import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coordinates, setCoordinates] = useState({
        x: 0,
        y: 0
    })

    const { x, y } = coordinates;

    useEffect(() => {
        //console.log('Component Message mounted');
        const mouseMove = ({ x, y }) => {
            const actualCoordinates = { x: x, y: y };
            setCoordinates(actualCoordinates);
        };

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h1>You are awesome!</h1>
            <h2>Coordinates</h2>
            <p>X: { x }, Y: { y }</p>
        </>
    );
};
