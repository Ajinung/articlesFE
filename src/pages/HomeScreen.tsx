import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import pix from "../assets/babe.jpg"
import { useArticle } from '../hooks/useArticle'

const HomeScreen = () => {
    const { article, isLoading } = useArticle()
    return (
        <div>
            {
                isLoading ? <div>...loading</div> :
                    <Container>
                        <Main>
                            {
                                article?.map(({ _id, title, content, description, category }: any) => {
                                    return (

                                        <Card to={`/${_id}/article`} >
                                            <Content>
                                                <Title>{title}</Title>

                                                <Sub>{description}</Sub>
                                                <Div />
                                                <div>
                                                    <Cat>{category}</Cat>
                                                </div>
                                            </Content>
                                            <Image src={pix} />
                                        </Card>


                                    )
                                })
                            }
                        </Main>
                    </Container>
            }

        </div>
    )
}

export default HomeScreen

const Image = styled.img`
width :40%;
height :200px;
border: 1px solid silver;
object-fit: cover;
`

const Cat = styled.div`
width: 100px;
height: 30px;
background-color: purple;
color: white;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;

`

const Sub = styled.div``
const Div = styled.div`flex: 1`

const Title = styled.div`
font-size: 30px;
font-weight: 700;
`

const Content = styled.div`
width: 70%;
display:flex;
flex-direction: column;

`

const Card = styled(Link)`
width: 450px;
min-height: 150px;
border-radius: 5px;
border: 1px solid silver;
display: flex;
justify-content: space-around;
padding: 10px;
margin: 10px;
text-decoration: none;
color: black
`

const Main = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;

`

const Container = styled.div`
width: 100%;

`