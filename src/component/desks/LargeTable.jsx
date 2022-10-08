import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from 'react'

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
    top:-240px;
`
const LargeTable_centerlocation = styled.div`
    position: relative;
    top:-135px;
    left:245px;
    display: flex;
    flex-direction:row;
`
export default () => {
    const [getMembers, setMembers] = useState([])
    let count = 0;
    const [number,setNumber]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    useEffect(() => {
        axios.get("/attend/list")
        .then(result => {
            console.log(result.data.data[0].id)
            const newNumber = [...number];
            result.data.data.map((element, idx)=>{
                console.log(idx);
                newNumber[count] = element.isAttend;
                console.log(newNumber);
                console.log(number);
                count += 1;
            })
            setNumber(newNumber)
            setMembers(result.data.data)
            console.log(getMembers)
        })
        .catch(console.log)
    }, [])
    return (
        <>
        <Font>
            <LargeTable_leftlocation>
            { number[14] ===0 ? <LargeTableL className="14" style={{backgroundColor:'#66AA65'}}>오은지</LargeTableL>:<LargeTableL className="14">오은지</LargeTableL>}
            { number[15] ===0 ? <LargeTableR className="15" style={{backgroundColor:'#66AA65'}}>김민지</LargeTableR>:<LargeTableR className="15">김민지</LargeTableR>}
            { number[16] ===0 ? <LargeTableL className="16" style={{backgroundColor:'#66AA65'}}>황인영</LargeTableL>:<LargeTableL className="16">황인영</LargeTableL>}
            { number[17] ===0 ? <LargeTableR className="17" style={{backgroundColor:'#66AA65'}}>강보민</LargeTableR>:<LargeTableR className="17">강보민</LargeTableR>}
            </LargeTable_leftlocation>
            <LargeTable_centerlocation>
            { number[5] ===0 ? <LargeTableL className="5" style={{backgroundColor:'#66AA65'}}>손민</LargeTableL>:<LargeTableL className="5">손민</LargeTableL>}
            { number[6] ===0 ? <LargeTableR className="6" style={{backgroundColor:'#66AA65'}}>천수인</LargeTableR>:<LargeTableR className="6">천수인</LargeTableR>}
            { number[7] ===0 ? <LargeTableL className="7" style={{backgroundColor:'#66AA65'}}>최희건</LargeTableL>:<LargeTableL className="7">최희건</LargeTableL>}
            { number[8] ===0 ? <LargeTableR className="8" style={{backgroundColor:'#66AA65'}}>조승완</LargeTableR>:<LargeTableR className="8">조승완</LargeTableR>}
            </LargeTable_centerlocation>
            </Font>
        </>
        
    )
}