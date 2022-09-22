import styled from "styled-components"
const SmallTable = styled.div`
    width: 56px;
    height: 103px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000025;
`
const Main = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: #dadada;
`
export default () => {
    return (
        <SmallTable></SmallTable>
    )
}