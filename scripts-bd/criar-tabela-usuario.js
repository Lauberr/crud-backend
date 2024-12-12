import { sql } from "../db.js"



async function criar(){
  
  try {
    await sql`
      DROP TABLE IF EXISTS usuarios;
    ` 
    console.log("Tabela apagada")
  } catch (error) {
    console.log(error)
    
  }
  
  try {
    await sql`
      CREATE TABLE usuarios (
        id      VARCHAR(50)  PRIMARY KEY,     
        nome    VARCHAR(100), 
        email   VARCHAR(150), 
        celular VARCHAR(15),
        data_de_admissao DATE, 
        numero_da_conta VARCHAR(10),
        quantidade_paga VARCHAR (20) 
      );
    ` 
    console.log("Tabela criada")
  } catch (error) {
    console.log(error)
  }
}


criar()