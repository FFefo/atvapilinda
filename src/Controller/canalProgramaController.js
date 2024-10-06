import * as db from '../Repository/canalProgramaRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.post('/canalPrograma/', async (req, resp) => {
    try {
        let programa = req.body
        let id = await db.inserirPrograma(programa);

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

endpoints.get('/canalPrograma/', async (req, resp) => {
    try {
        let registros = await db.consultarPrograma();
        resp.send(registros);
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/canalPrograma/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarProgramaId(id);
        resp.send(registros);
    }

    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.put('/canalPrograma/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let programa = req.body;

        let linhasAfetadas = await db.alterarPrograma(id, programa);
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

endpoints.delete('/canalPrograma/:id', async (req, resp) => {
    try { let id = req.params.id;

        let linhasAfetadas = await db.removerPrograma(id);
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