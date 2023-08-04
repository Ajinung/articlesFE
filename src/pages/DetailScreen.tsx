import { useParams } from 'react-router-dom'
import { useOneArticle } from '../hooks/useArticle'

const DetailScreen = () => {
    const { articleID } = useParams()
    const { article, } = useOneArticle(articleID!)
    // const { content } = article

    console.log(article)

    return (
        <div style={{ width: "100%", }} >
            <br />
            <br />
            <br />
            <center>
                <div style={{ width: "80%" }} >
                    <div
                        dangerouslySetInnerHTML={{ __html: article?.content }}
                    />
                </div>
            </center>
        </div>
    )
}

export default DetailScreen