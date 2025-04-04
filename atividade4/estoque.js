let itens = [];

function adicionar(item){
    let item_valido = validar_item(item);
    
    if(item_valido){
        itens.push(item);   //adicionar cada item que esta sendo requisitado
    }
    return item_valido
}   

function listar(){
    return itens;
}

function editar(id,qntd){
    if(!is_numerico(id) || !is_id_cadastrado(id) || !is_numerico(qntd) || qntd < 0){
        return false;
    }
    itens.forEach(item_cadastrado=>{
        if(item_cadastrado.id == id){
            item_cadastrado.qntd = qntd;
        }
    });
    return true
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    let item_existente = false;
    itens.forEach(item_cadastrado =>{
        if(id == item_cadastrado.id){
            item_existente = true;
        }
    });
    return item_existente;
}

function validar_item(item){
    let item_valido = true;


    if(!is_numerico(item.id) || item.id <= 0){
        item_valido = false;
    }

    if (is_id_cadastrado(item.id) == true){
        item_valido = false;
    }

    if(item.nome.length == 0){
        item_valido = false;
    }

    if(!is_numerico(item.qntd) || item.qntd < 0){
        item_valido = false;
    }

    return item_valido;
}

function remover(id) {
    if (!is_id_cadastrado(id)) {
        return false;
    }
    
    itens = itens.filter(item => item.id != id);
    return true;
}


module.exports={
    adicionar, listar, editar, remover
}