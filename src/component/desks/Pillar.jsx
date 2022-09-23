import styled from "styled-components"

const Check_Mi_Seat=styled.div`
    /* margin:0px auto;
    width:900px;
    height:750px;
    background-color: #b5b5b5; */
`

const Cabinet_Location=styled.div` //큰캐비넷 작은 캐비넷 위치 설정
    float:left;
`
const Under_Location=styled.div` // 창문,문,pillar2의 전체적인 위치설정
    display: flex;
    position: relative;
    top:590px;
    left: 5%;
`
const Pillar1 = styled.div` // pillar2이 위치,디자인설정
    width: 100px;
    height: 20px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    margin: 10px auto;
`

const Pillar2 = styled.div` // pillar2의 위치,디자인 설정
    width: 150px;
    height: 25px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    position: relative;
    top:82px;
    margin: 0 15px 0 15px;
`
const Board = styled.div` //칠판 위치,디자인 설정
    width: 17px;
    height: 420px;
    border-radius: 3px; 
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    float:right;
    margin:95px 15px 0 0;
`
const Smallcabinet = styled.div` //작은 캐비넷 위치,디자인 설정
    width: 21px;
    height: 115px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    margin:85px 0 15px 15px;
`
const Largelcabinet = styled.div` //큰 캐비넷 위치,디자인,설정
    width: 21px;
    height: 220px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    margin:85px 0 0 15px;
`

const Window1 = styled.div` // 창문1의 위치,디자인 설정
    width: 150px;
    height: 10px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    position: relative;
    top:95px;
    margin:0 20px 0 15px;
`
const Window2 = styled.div` // 창문2의 위치,디자인 설정
    width: 150px;
    height: 10px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    position: relative;
    top:95px;
    margin:0 20px 0 15px;
`

const Door1 = styled.div` // 왼쪽 문 위치,디자인 설정
    width: 100px;
    height: 100px;
    border-top-right-radius: 100px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    position: relative;
    right: 45px;
    top:8px;
`

const Door2 = styled.div` //오른쪽문 위치, 디자인 설정
    width: 100px;
    height: 100px;
    border-top-left-radius: 100px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    position: relative;
    left: 35px;
    top:8px;
`

export default () => {
    return (
       <Check_Mi_Seat>
            <Pillar1></Pillar1>
            <Board></Board>

            <Cabinet_Location>
                <Smallcabinet></Smallcabinet>
                <Largelcabinet></Largelcabinet>
            </Cabinet_Location>


            <Under_Location>
                <Door1></Door1>
                <Window1></Window1>
                <Pillar2></Pillar2>
                <Window2></Window2>
                <Door2></Door2>
            </Under_Location>

        </Check_Mi_Seat>
    )
}