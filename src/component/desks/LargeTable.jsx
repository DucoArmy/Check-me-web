import styled from "styled-components"
const LargeTable = styled.div`
    width: 160px;
    height: 70px;
    border-radius: 10px;
    background-color: #DADADA;
    box-shadow: 1px 3px 1px 1px #00000056;
    position: relative;
    margin:5px;

`
const LargeTable_leftlocation = styled.div`
    position: relative;
    top:-110px;
    display: flex;
    flex-direction:row;
`
const LargeTable_centerlocation = styled.div`
    position: relative;
    top:-30px;
    left:240px;
    display: flex;
    flex-direction:row;
`
export default () => {
    return (
        <>
            <LargeTable_leftlocation>
                <LargeTable></LargeTable>
                <LargeTable></LargeTable>
            </LargeTable_leftlocation>
            <LargeTable_centerlocation>
                <LargeTable></LargeTable>
                <LargeTable></LargeTable>
            </LargeTable_centerlocation>
            
        </>
        
    )
}