import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3>I am {person.name} and I know {person.tag}</h3>
        </div>
    )
}

export default Person
