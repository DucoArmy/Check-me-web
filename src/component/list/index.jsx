import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width: 200px;
    height: 30px;
`
const Render = () => {
    const [getMembers, setMembers] = useState([])
    useEffect(() => {
        axios.get("/member/list")
        .then(result => {
            console.log(result.data.data)
            setMembers(result.data.data)
        })
        .catch(console.log)
    }, [])
    const [getInput, setInput] = useState([
        {name: "name", val: ""},
        {name: "grade", val: ""},
        {name: "class", val: ""},
        {name: "birthday", val: ""},
        {name: "email", val: ""},
        {name: "github", val: ""},
        {name: "phoneNumber", val: ""}
    ])
    const change = (val, idx) => {
        const temp = [...getInput]
        temp[idx].val = val.target.value
        setInput(temp)
    }
    const click = () => {
        axios.post('/member/add', {
            name: getInput[0].val,
            grade: getInput[1].val,
            class: getInput[2].val,
            birthday: getInput[3].val,
            email: getInput[4].val,
            github: getInput[5].val,
            phoneNumber: getInput[6].val,
          })
        getInput.forEach((e) => {
            console.log(e.val)
        })
    }
    return (
        <div>
            {
                getInput.map((element, idx) => {
                    return <div key={idx}>
                        {element.name} <input onChange={(e) => {change(e, idx)}}></input>
                    </div>
                })
            }
            <Button onClick={click}>전송</Button>
            {
                getMembers.map((element, idx) => {
                    return <div key={idx}>{element.name}</div>
                })
            }
        </div>
    )
}
export default Render