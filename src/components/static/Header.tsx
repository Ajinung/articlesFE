import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Container>

                <Main>

                    <Logo to="/" >Lofo</Logo>

                    <Button to="/create" >Create Article</Button>
                </Main>

            </Container>
        </div>
    )
}

export default Header

const Button = styled(Link)`
padding: 12px 25px;
border-radius: 30px;
color: white;
background-color: black;
font-weight: 600;
font-size: 20px;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
font-weight: 900;
font-size: 50px;
cursor: pointer;
text-decoration: none;
color: black
`

const Main = styled.div`
width: 90%;
justify-content: space-between;
align-items: center;
height: 80px;
display: flex;

`

const Container = styled.div`
width: 100%;
justify-content: center;
display: flex;
border-bottom: 1px solid silver;
`