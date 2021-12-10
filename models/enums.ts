enum Enum_tipousuario{
    ESTUDIANTE ='ESTUDIANTE',
    LIDER = 'LIDER',
    ADMINISTRADOR = 'ADMINISTRADOR',
}

enum Enum_EstadoUsuario{
    PENDIENTE='PENDIENTE',
    NO_AUTORIZADO='NO_AUTORIZADO',
    AUTORIZADO='AUTORIZADO',
}
enum Enum_Estado_Proyecto{
    ACTIVO='ACTIVO',
    INACTIVO='INACTIVO',
}

enum Enum_Fase_Proyecto{
INICIADO='INICIADO',
EN_PROCESO='EN_PROCESO',
TERMINADO='TERMNADO',
NULA=' ',
    
}
enum Enum_Tipo_Objetivo{
    GENERAL='GENERAL',
    ESPECIFICO='ESPECIFICO',
            
    }

enum Enum_Estado_Inscripcion{
    ACEPTADA='ACEPTADA',
    RECHAZADA='RECHAZADA',

}    


export {Enum_tipousuario, Enum_EstadoUsuario, Enum_Fase_Proyecto,
     Enum_Estado_Proyecto,Enum_Estado_Inscripcion, Enum_Tipo_Objetivo}