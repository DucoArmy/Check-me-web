import * as S from './index.style'
import axios from 'axios'
import { useEffect } from 'react'
import { Roundtable, Pillar, LargeTable, SmallTable } from '../desks'
const Render = () => {
    useEffect(() => {
        axios.get("/member/list")
        .then(result => {
            console.log(result)
        })
        .catch(console.log)
    }, [])
    return (
        <S.Main>
            <S.Check_Mi_Seat> {/*회색 사각형 틀 */}
                <Pillar></Pillar>
                {/* <Roundtable>Roundtable</Roundtable> */}
                {/* <Pillar>Pillar</Pillar> */}
                {/* <LargeTable>LargeTable</LargeTable> */}
                {/* <SmallTable>SmallTable</SmallTable> */}
            </S.Check_Mi_Seat>
        </S.Main>
    )
}
export default Render