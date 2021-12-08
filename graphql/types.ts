import { gql } from 'apollo-server-express';


const typeDefs = gql `

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

type Usuario{
    _id: ID!
    nombres: String!
    apellidos: String!
    identificacion: String!
    correo: String!
    estado: Enum_EstadoUsuario
    tipo_usuario:Enum_tipousuario!
}


type Query{
    Usuarios:[Usuario]
}
`;
export { typeDefs};