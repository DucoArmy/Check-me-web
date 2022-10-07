import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from 'react'


const Font = styled.div`
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
    font-family:Pretendard;
    font-size:18px;
`
const SmallTable = styled.div`
    width: 56px;
    height: 103px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin:5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SmallTable_row = styled.div`
    width: 103px;
    height: 56px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin:5px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SmallTable_leftlocation = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top:-320px;
    left:170px;

`
const SmallTable_rightlocation = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top:-320px;
    left:520px;

`
const Row_location = styled.div`
    display: flex;
    flex-direction: row;
`
const Top_location= styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    top:-390px;
    left:500px;
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
                return <div>{console.log('------------')}</div>
            })
            setNumber(newNumber)
            setMembers(result.data.data)
            console.log(getMembers)
        })
        .catch(console.log)
    }, [])
    return (
        <>
        <font>
            <div>
                {
                    console.log(number[14])
                }
            </div>
        <Top_location>
            { number[18] ===0 ? <SmallTable_row className="18" style={{backgroundColor:'#66AA65'}}>김예림</SmallTable_row>:<SmallTable_row className="18">김예림</SmallTable_row>}
            { number[19] ===0 ? <SmallTable_row className="19" style={{backgroundColor:'#66AA65'}}>김수인</SmallTable_row>:<SmallTable_row className="19">김수인</SmallTable_row>}
            { number[20] ===0 ? <SmallTable className="20" style={{backgroundColor:'#66AA65'}}>김건호</SmallTable>:<SmallTable className="20">김건호</SmallTable>}
        </Top_location>
        <Row_location>
        <SmallTable_leftlocation>
            <SmallTable className="4">이원준</SmallTable>
            <SmallTable className="3">최수원</SmallTable>
            <SmallTable className="2">성의근</SmallTable>
            <SmallTable className="1">한준범</SmallTable>
            <SmallTable className="0">이재명</SmallTable>
        </SmallTable_leftlocation>
        <SmallTable_rightlocation>
            <SmallTable className="9">조가연</SmallTable>
            <SmallTable className="10">김언수</SmallTable>
            <SmallTable className="11">김성주</SmallTable>
            <SmallTable className="12">박상현</SmallTable>
            <SmallTable className="13">유지민</SmallTable>
        </SmallTable_rightlocation>
        </Row_location>
        </font>
        </>
    )
}