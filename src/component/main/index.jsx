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
            <Roundtable>Roundtable</Roundtable>
            <Pillar>Pillar</Pillar>
            <LargeTable>LargeTable</LargeTable>
            <SmallTable>SmallTable</SmallTable>
        </S.Main>
    )
}
export default Render