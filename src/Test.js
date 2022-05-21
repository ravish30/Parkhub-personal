import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/myparking/1', {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => console.log(res))
    }, [])

    return (
        <></>
    )
}

export default Test