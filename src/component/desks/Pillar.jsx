import styled from "styled-components"

const Check_Mi_Seat=styled.div`
    /* margin:0px auto;
    width:900px;
    height:750px;
    background-color: #b5b5b5; */
`
const LargeTable = styled.div`
    width: 157px;
    height: 70px;
    border-radius: 10px;
    background-color: #DADADA;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin-left: 5px;
    margin-right: 5px;

`
const center_location = styled.div`
    width: 160px;
    height: 70px;
    border-radius: 10px;
    background-color: #DADADA;
    box-shadow: 1px 3px 1px 1px #00000056;
    margin-left: 5px;
    margin-right: 5px;

`
const SmallTable = styled.div`
    width: 120px;
    height: 60px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
`
const SmallTable_column=styled.div`
    width: 60px;
    height: 103px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10%;
    background-color: #dadada;
    box-shadow: 1px 3px 1px 1px #00000056;
`
const Roundtable = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px 2px #00000025;
    background-color: #dadada  ;
    margin:80px;
`
const Cabinet_Location=styled.div` //큰캐비넷 작은 캐비넷 위치 설정
    float:left;
`
const Under_Location=styled.div` // 창문,문,pillar2의 전체적인 위치설정
    display: flex;
    position: relative;
    left: 5%;
`
const Pillar1 = styled.div` // pillar2이 위치,디자인설정
    width: 100px;
    height: 20px;
    border-radius: 3px;
    background-color: #DADADA;
    box-shadow:3px 3px 6px 1px #5b5b5b ;
    margin-left:20px;
    margin-right:20px;
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
const LargetableTop_location = styled.div` // 상단 큰 책상 위치설정
    display: flex;
    flex-direction: row;
    margin:20px;

`
const Smalltable_location=styled.div`

    width:60px;
`
const Centertable=styled.div`
    margin-left: 180px;
`
const CenterLargetable=styled.div`
    display: flex;
    flex-direction: center;
`
const Centers=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`
const Pillar = () => {
    return(
        <Check_Mi_Seat>
            <center_location></center_location>
            <LargetableTop_location>
                <LargeTable></LargeTable>
                <LargeTable></LargeTable>
                <Pillar1></Pillar1>
                <SmallTable></SmallTable>
                <SmallTable></SmallTable>
            </LargetableTop_location>
            <Board></Board>
            <Cabinet_Location>
                <Smallcabinet></Smallcabinet>
                <Largelcabinet></Largelcabinet>
            </Cabinet_Location>
            <Centertable>
            <LargetableTop_location>
            <Smalltable_location>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
            </Smalltable_location>
            <Centers>
            <CenterLargetable>
            <LargeTable></LargeTable>
            <LargeTable></LargeTable>
            </CenterLargetable>
            <Roundtable></Roundtable>
            </Centers>
            <Smalltable_location>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
                <SmallTable_column></SmallTable_column>
            </Smalltable_location>
            </LargetableTop_location>
            </Centertable>
            
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
export default Pillar;