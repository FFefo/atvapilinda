import con from './connection.js'

export async function inserirFavorito(favorito) {
    let comando = `
    insert into tb_programa_favorito (usuario_id, canal_programa_id, vl_avaliacao)
                  values (?, ?, ?)
    `;

    let resposta = await con.query(comando, [favorito.usuario, favorito.programa, favorito.avaliacao])
    let info = resposta[0];

    return info.insertId;

}

export async function consultarFavorito() {
    let comando = `
    select id_programa_favorito       id,
           usuario_id                 usuario,
           canal_programa_id          programa,
           vl_avaliacao               avaliacao

    from tb_programa_favorito

    inner join tb_usuario on tb_usuario.id_usuario = tb_programa_favorito.id_programa_favorito
    inner join tb_canal_programa on tb_canal_programa.id_canal_programa = tb_programa_favorito.id_programa_favorito;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

}

export async function consultarFavoritoId(id) {
    let comando = `
    select id_programa_favorito     		  id,
           usuario_id                 		  usuario,
           canal_programa_id         		  programa,
           vl_avaliacao               		  avaliacao

      from tb_programa_favorito

          
	inner join tb_usuario on tb_usuario.id_usuario = tb_programa_favorito.id_programa_favorito
    inner join tb_canal_programa on tb_canal_programa.id_canal_programa = tb_programa_favorito.id_programa_favorito
    
          where id_programa_favorito = 6;
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros[0];

}

export async function alterarFavorito(id, favorito) {
    let comando = `
    update tb_programa_favorito
       set usuario_id = ?,
           canal_programa_id = ?,
           vl_avaliacao = ?
       where id_programa_favorito = ?
    `;

    let resposta = await con.query(comando, [favorito.usuario, favorito.programa, favorito.avaliacao, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerProgramaFavorito(id) {
    let comando = `
    delete from tb_programa_favorito
    where id_programa_favorito = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}