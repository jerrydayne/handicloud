import React from 'react'

const Document = ({ title, desc, user, category }) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>{user}</p>
        </>
    )
}

export default Document
