import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {

  
  async list(search) {
    let usuarios;

    if (search) {
      usuarios = await sql`select * from usuarios where nome ilike ${
        "%" + search + "%"
      }`;
    } else {
      usuarios = await sql`select * from usuarios`;
    }

    return usuarios;
  }

  async create(usuario) {
    const usuarioId = randomUUID();
    const { nome, email, celular, data_de_admissao, numero_da_conta, quantidade_paga } = usuario;

    await sql`insert into usuarios (id, nome, email, celular, data_de_admissao, numero_da_conta, quantidade_paga) VALUES (${usuarioId}, ${nome}, ${email}, ${celular}, ${data_de_admissao}, ${numero_da_conta}, ${quantidade_paga})`;
  }

  async update(id, usuario) {
    const { nome, email, celular, data_de_admissao, numero_da_conta, quantidade_paga } = usuario;

    await sql`update usuarios set nome = ${nome}, email = ${email}, celular = ${celular}, data_de_admissao = ${data_de_admissao}, numero_da_conta = ${numero_da_conta}, quantidade_paga = ${quantidade_paga} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`delete from usuarios where id = ${id}`;
  }
}
