import styled from "styled-components"
const Roundtable = styled.div`
    width: 200px;
    height:200px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px 2px #00000025;
    background-color: #dadada;
`
const Round_location = styled.div`
    position: absolute;
    top:450px;
    left:700px;
`
export default () => {
    return (
        <Round_location>
            <Roundtable></Roundtable>
        </Round_location>
    )
}