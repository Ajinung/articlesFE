import { useQuery } from '@tanstack/react-query'
import { getArticles, getOneArticle } from '../api/articleAPI'

export const useArticle = () => {
    const { data: article, isLoading } = useQuery({
        queryKey: ['articles'],
        queryFn: getArticles,
        refetchInterval: 1000
    })
    return { article, isLoading }
}


export const useOneArticle = (id: string) => {
    const { data: article, isLoading } = useQuery({
        queryKey: ['articles', { id: id }],
        queryFn: () => getOneArticle(id),
        refetchInterval: 1000
    })

    return { article, isLoading }
}

