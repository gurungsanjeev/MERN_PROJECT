import React from 'react'
import Message from './Message'


const Messages = () => {
    return (
        <>

            <div style={{ minHeight: 'calc(90vh - 25vh)' }} className='px-4 overflow-auto ' >



                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />



            </div>
        </>
    )
}

export default Messages
