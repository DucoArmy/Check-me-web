import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const Desk1 = styled.div`
    background-color: #ffffff;
`

const Desk = () => {
    useEffect(() => {
        axios.get("/member/list")
        .then(result => {
            console.log(result)
        })
        .catch(console.log)
    }, [])
    const [getMembers, setMembers] = useState([])
    useEffect(() => {
        axios.get("/attend/list")
        .then(result => {
            console.log(result.data)
            setMembers(result.data.data)
        })
        .catch(console.log)
    }, [])
    return (
        <div>hello</div>


        

    )
}
export default Desk