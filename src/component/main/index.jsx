import * as S from './index.style'
import axios from 'axios'
import { useEffect,useState} from 'react'
import { Roundtable, Pillar, LargeTable, SmallTable, StudentCard } from '../desks'
const Render = () => {
    return (
        <S.Main>
            <S.Check_Mi_Seat> {/*회색 사각형 틀 */}
                <Pillar></Pillar>
                <Roundtable>Roundtable</Roundtable>
                <LargeTable>LargeTable</LargeTable>
                <SmallTable>SmallTable</SmallTable>
            </S.Check_Mi_Seat>
        </S.Main>
    )
}
export default Render