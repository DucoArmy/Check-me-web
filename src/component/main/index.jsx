import * as S from './index.style'
import axios from 'axios'
import { useEffect,useState} from 'react'
import { Roundtable, Pillar, LargeTable, SmallTable, StudentCard } from '../desks'
const Render = () => {
    useEffect(() => {
        axios.get("/member/list")
        .then(result => {
            console.log(result)
        })
        .catch(console.log)
    }, [])
    const [getMembers, setMembers] = useState([])
    useEffect(() => {
        axios.get("/attend/list")
        .then(result => {
            console.log(result.data)
            setMembers(result.data.data)
        })
        .catch(console.log)
    }, [])
    return (
        <S.Main>
            <S.Check_Mi_Seat> {/*회색 사각형 틀 */}
                <Pillar></Pillar>
                <Roundtable>Roundtable</Roundtable>
                <LargeTable>LargeTable</LargeTable>
                <SmallTable>SmallTable</SmallTable>
            </S.Check_Mi_Seat>
            <div>{
                getMembers.map((element, idx) => {
                    return <div key={idx}>{element.member.grade=="2" ? <div style={{color:"green"}}>{element.member.name}</div>:<div style={{color:"gray"}}>{element.member.name}</div>}</div>
                })
            }</div>
        </S.Main>
    )
}
export default Render