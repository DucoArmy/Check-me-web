import styled from "styled-components"
const Font = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family:Pretendard;
    font-size:18px;
`

const LargeTableL = styled.div`
    width: 80px;
    height: 70px;
    border-radius: 10px 0px 0px 10px;
    background-color: #DADADA;
    box-shadow: -0.9px 3px 1px 1px #00000056;
    position: relative;
    margin-top:5px;
    display: flex;
    justify-content: center;
    align-items: center;

`

const LargeTableR = styled.div`
    width: 80px;
    height: 70px;
    border-radius: 0px 10px 10px 0px;
    background-color: #DADADA;
    box-shadow: 1px 3px 1px 1px #00000056;
    position: relative;
    margin-top:5px;
    margin-right:10px;
    display: flex;
    justify-content: center;
    align-items: center;

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
        <Font>
            <LargeTable_leftlocation>
                <LargeTableL className="14">오은지</LargeTableL>
                <LargeTableR className="15">김민지</LargeTableR>
                <LargeTableL className="16">황인영</LargeTableL>
                <LargeTableR className="17">강보민</LargeTableR>
            </LargeTable_leftlocation>
            <LargeTable_centerlocation>
                <LargeTableL className="5">손민</LargeTableL>
                <LargeTableR className="6">천수인</LargeTableR>
                <LargeTableL className="7">최희건</LargeTableL>
                <LargeTableR className="8">조승완</LargeTableR>
            </LargeTable_centerlocation>
            </Font>
        </>
        
    )
}