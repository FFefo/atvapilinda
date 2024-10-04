import * as db from '../Repository/programaFavoritoRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/programaFavorito/', async (req, resp) => {
    try {
        let favorito = req.body
        let id = await db.inserirFavorito(favorito);

        resp.send({
            novoId: id
        })
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/programaFavorito/', async (req, resp) => {
    try {
        let registros = await db.consultarFavorito();
        resp.send(registros);
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/programaFavorito/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let favorito = req.body;

        let linhasAfetadas = await db.alterarFavorito(id, favorito);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado'})
        }
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/programaFavorito/:id', async (req, resp) => {
    try { let id = req.params.id;

        let linhasAfetadas = await db.removerProgramaFavorito(id);
        if(linhasAfetadas >= 1){
            resp.send()
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado'})
        }
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

export default endpoints;