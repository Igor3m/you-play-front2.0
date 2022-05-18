import ApiService from "../apiService";

export default class CategoriaService extends ApiService {

    constructor() {
        super('/api/categorias')
    }

    salvar(categoria){
        return this.post('/', categoria)
    }

    consultar(categoriaFiltro){
        
        let params = `?usuario=${categoriaFiltro.usuario}`
        
        if(categoriaFiltro.nome){
            params = `${params}&nome=${categoriaFiltro.nome}`
        }

        return this.get(params)
    }

    editar(id, categoria){
        return this.put(`/${id}`, categoria)
    }

    deletar(id) {
        return this.delete(`/${id}`)
    }

}