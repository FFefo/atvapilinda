import canalController from './Controller/canalController.js';
import canalProgramaController from './Controller/canalProgramaController.js';
import usuarioController from './Controller/usuarioController.js';
import programaFavoritoController from './Controller/programaFavoritoController.js';

export default function adicionarRotas(servidor){
    servidor.use(canalController),
    servidor.use(canalProgramaController),
    servidor.use(usuarioController),
    servidor.use(programaFavoritoController);
}
