const Categoria = require('../data/categoria');

const getCategorias = async () => {
    return await Categoria.find();
}

const getCategoriaById = async (id) => {
    return await Categoria.findById(id);
}

const createCategoria = async (categoriaData) => {
    const categoria = new Categoria(categoriaData);
    return await categoria.save();
}

const updateCategoria = async (id) => {
    
}