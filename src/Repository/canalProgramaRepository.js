import con from './connection.js'

export async function inserirPrograma(programa){
    let comando = `
    insert into tb_canal_programa (canal_id, nm_programa, ds_genero, hr_programa)
                  values (?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [programa.canal, programa.nome, programa.genero, programa.horario])
    let info = resposta[0];

    return info.insertId;

}

export async function consultarPrograma(){
    let comando = `
    select id_canal_programa    id,
           nm_canal             canal,
           nm_programa          nome,
           ds_genero            genero,
           hr_programa          horario

    from tb_canal_programa

    inner join tb_canal 
    on tb_canal.id_canal = tb_canal_programa.id_canal_programa;
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

}

export async function consultarProgramaId(id){
    let comando = `
    select id_canal_programa    id,
           nm_canal             canal,
           nm_programa          nome,
           ds_genero            genero,
           hr_programa          horario

    from tb_canal_programa

    inner join tb_canal 
    on tb_canal.id_canal = tb_canal_programa.id_canal_programa

    where id_canal_programa = ?
    `;

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0];

    return registros[0];

}

export async function alterarPrograma(id, programa){
    let comando = `
    update tb_canal_programa
       set canal_id = ?,
           nm_programa = ?,
           ds_genero = ?,
           hr_programa = ?
       where id_canal_programa = ?
    `;

    let resposta = await con.query(comando, [programa.canal, programa.nome, programa.genero, programa.horario, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerPrograma(id){
    let comando = `
    delete from tb_canal_programa
    where id_canal_programa = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];
    
    return info.affectedRows;
}