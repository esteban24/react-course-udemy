import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './hooks.css'

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = data ? data[0] : [];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            { loading ?
                (
                    <div className="alert alert-info">
                        Loading...
                    </div>
                ):
                (
                    <>
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                        </blockquote>
                        <footer className="blockquote-footer">{ author }</footer>
                    </>
                )
            }
            <button onClick={ increment } className="btn btn-primary">Next quote</button>
        </div>
    )
}
