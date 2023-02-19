import {articleMapper} from "../helpers/listPublications";

function TEMP_Homepage() {
    return(
        <>
            <h1>MISE EN PAGE TEMPORAIRE</h1>
            {articleMapper.map(article => {
                return(
                    <>
                        <a href={"article/"+article.id}>{article.title}</a><br/>
                    </>
                )
            })}
        </>

    )
}

export default TEMP_Homepage;