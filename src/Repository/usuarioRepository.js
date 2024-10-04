import con from './connection.js';

export async function inserirUsuario(usuario){
    let comando = `
    insert into tb_usuario (nm_usuario)
                  values (?)
    `;

    let resposta = await con.query(comando, [usuario.nome])
    let info = resposta[0];

    return info.insertId;

}

export async function consultarUsuario(){
    let comando = `
    select id_usuario       id,
           nm_usuario       nome

      from tb_usuario
    `

    let resposta = await con.query(comando);
    let registros = resposta[0]

    return registros;
}

export async function alterarUsuario(id, usuario){
    let comando = `
    update tb_usuario
       set nm_usuario = ?
     where id_usuario = ?
    `;

    let resposta = await con.query(comando, [usuario.nome, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerUsuario(id){
    let comando = `
    delete from tb_usuario
    where id_usuario = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    
    return info.affectedRows;
}