import Error from "../articles/error.pdf"
import {articleMapper} from "./listPublications";

export function findPDF(query){
    const article = articleMapper.find(article => article.id === query);
    if(article != undefined){
        return article.file
    } else {
        return Error
    }
}

export default findPDF()