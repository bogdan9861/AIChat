import React, { useEffect, useState } from 'react'
import './Messages.css'
import Request from '../../Request';
import AI_img from './AI-image.webp';

export const Messages = () => {

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = Request();

    const getResurse = (e) => {
        e.preventDefault();
        if (!loading && (message != '' && message != ' ')) {
            setLoading(true);
            setMessage('');
            request.getData(message)
                .then(registerNewMessage)
                .catch(() => CatchError);
        }
    }

    const registerNewMessage = (res) => {
        setResponse([...response, res.out]);
        setLoading(false);
    }

    const CatchError = () => {
        setLoading(false);
        setError(true);
        console.log('ошибка');
    }

    const scrollToBot = (e) => {
        console.log(e);
    }

    return (
        <div className="messages">
            <div className="inner">
                <ul className="messages__list" onScroll={(e) => scrollToBot}>
                    {
                        response.map((el, i) => {
                            return (
                                <div className="messages__list-inner" key={i} >
                                    <img className='message-img' src={AI_img} alt="" />
                                    <li className="item">
                                        <span className="name">AI</span>
                                        <p className="text">{el}</p>
                                    </li>
                                </div>
                            )
                        })
                    }

                    {
                        loading ? <span className='typing'>печатает...</span> : null
                    }

                    {
                        error ? <span className='typing'>возникла ошибка</span> : null
                    }

                </ul>
                <form className='form' onSubmit={(e) => getResurse(e)}>
                    <input className='input' type="text" placeholder='ask your question 'value={message} onChange={(e) => { setMessage(e.target.value) }} />
                </form>
            </div>
        </div>
    )
}