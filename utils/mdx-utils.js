import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)
    try {
        // Faz a requisição GET para buscar o post com o ID específico
        const { data } = await api.get(`/posts?id=${id}`);

        // Se a API retornar dados, verifica se há pelo menos um item no array
        if (data && data.length > 0) {
            return data[0]; // Retorna o primeiro item da lista
        }

        // Caso nenhum dado seja encontrado, retorna um objeto vazio
        return {};
    } catch (error) {
        // Caso ocorra um erro, exibe no console e retorna um objeto vazio
        console.error('Erro ao buscar o post pelo slug:', error);
        return {};
    }

};