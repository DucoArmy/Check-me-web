import styled from "styled-components"
const Roundtable = styled.div`
    width: 200px;
    height:200px;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 2px #00000056;
    background-color: #dadada;
`
const Round_location = styled.div`
    position: relative;
    top:350px;
    left:350px;
`
export default () => {
    return (
        <Round_location>
            <Roundtable></Roundtable>
        </Round_location>
    )
}