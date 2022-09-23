import styled from "styled-components"
const Main = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 10%;
    background-color: #f2f2f2;
    
`
const Userimg = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    margin:10%;
    background-color: grey;
`

export default () => {
    return (
        <Main>
            <Userimg></Userimg>
            <div style={{margin:50,backgroundColor:"white"}}>
                <div>이름</div>
                <div>학년</div>
                <div>반</div>
                <div>생일</div>
                <div>이메일</div>
            </div>
        </Main>
    )
}