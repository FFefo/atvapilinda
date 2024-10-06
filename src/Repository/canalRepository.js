import con from './connection.js'

export async function inserirCanal(canal){
    let comando = `
    insert into tb_canal (nm_canal, nr_canal, bt_aberto)
                  values (?, ?, ?)
    `;

    let resposta = await con.query(comando, [canal.nome, canal.numero, canal.aberto]);
    let info = resposta[0];

    return info.insertId;

}

export async function consultarCanal(){
    let comando = `
    select id_canal     id,
           nm_canal     nome,
           nr_canal     numero,
           bt_aberto    aberto

      from tb_canal
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

}

export async function consultarCanalId(id){
    let comando = `
    select id_canal     id,
           nm_canal     nome,
           nr_canal     numero,
           bt_aberto    aberto

      from tb_canal
      where id_canal = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros[0];

}

export async function alterarCanal(id, canal){
    let comando = `
    update tb_canal
       set nm_canal = ?,
           nr_canal = ?,
           bt_aberto = ?

     where id_canal = ?
    `;

    let resposta = await con.query(comando, [canal.nome, canal.numero, canal.aberto, id])
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerCanal(id){
    let comando = `
    delete from tb_canal
    where id_canal = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    
    return info.affectedRows;
}