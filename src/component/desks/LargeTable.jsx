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
    display: flex;
    flex-direction:row;
    top:-230px;
`
const LargeTable_centerlocation = styled.div`
    position: relative;
    top:-130px;
    left:245px;
    display: flex;
    flex-direction:row;
`
export default () => {
    return (
        <>
            <LargeTable_leftlocation>
                <LargeTable></LargeTable>
                <LargeTable className="1"></LargeTable>
            </LargeTable_leftlocation>
            <LargeTable_centerlocation>
                <LargeTable></LargeTable>
                <LargeTable></LargeTable>
            </LargeTable_centerlocation>
            
        </>
        
    )
}