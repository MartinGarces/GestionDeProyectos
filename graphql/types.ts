import { gql } from 'apollo-server-express';


const typeDefs = gql `

scalar Date

enum Enum_EstadoUsuario{
    PENDIENTE
    NO_AUTORIZADO
    AUTORIZADO
}

enum Enum_tipousuario{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}

enum Enum_Estado_Proyecto{
    ACTIVO
    INACTIVO
}
enum Enum_Fase_Proyecto{
    INICIADO
    EN_PROCESO
    TERMINADO
    NULA
}
enum Enum_Tipo_Objetivo{
    GENERAL
    ESPECIFICO
            
    }

type Usuario{
    _id: ID!
    nombres: String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    tipo_usuario:Enum_tipousuario!
}

type Objetivo{
    _id:ID!
    descripcion:String!
    tipo:Enum_Tipo_Objetivo!

}

type Proyecto{
    _id:ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFinal: Date!
    estado: Enum_Estado_Proyecto!
    fase: Enum_Fase_Proyecto!
    lider:Usuario!
    objetivos:[Objetivo]
}
type Query{
    Usuarios:[Usuario]
    Usuario(_id:String!):Usuario
    Proyectos:[Proyecto]
}
type Mutation{
    crearUsuario(
    nombres:String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario 
    tipo_usuario:Enum_tipousuario!
   ): Usuario

   eliminarUsuario(
    _id:String
    nombres: String 
    )
    :Usuario

    editarUsuario(
    _id: ID!    
    nombres:String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario 
    tipo_usuario:Enum_tipousuario!   
    ): Usuario
    
    crearProyecto(
        nombre:String!
        presupuesto: Float!
        fechainicio: Date!
        fechafinal: Date!
        estado: Enum_Estado_Proyecto!
        fase: Enum_Fase_Proyecto!
        lider:String!
        ):Proyecto
    }

`;
export { typeDefs};