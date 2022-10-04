import styled from "styled-components"
const SmallTable = styled.div`
    width: 56px;
    height: 103px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin:5px;
`
const SmallTable_row = styled.div`
    width: 103px;
    height: 56px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin:5px;
`
const SmallTable_leftlocation = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top:-110px;
    left:170px;

`
const SmallTable_rightlocation = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top:-110px;
    left:520px;

`
const Row_location = styled.div`
    display: flex;
    flex-direction: row;
`
const Top_location= styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    top:160px;
    left:900px;
`
export default () => {
    return (
        <>
        <Top_location>
            <SmallTable_row></SmallTable_row>
            <SmallTable_row></SmallTable_row>
            <SmallTable></SmallTable>
        </Top_location>
        <Row_location>
        <SmallTable_leftlocation>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
        </SmallTable_leftlocation>
        <SmallTable_rightlocation>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
            <SmallTable></SmallTable>
        </SmallTable_rightlocation>
        </Row_location>
    
        </>
    )
}