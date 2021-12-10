import { Schema, model } from 'mongoose';
import {Enum_EstadoUsuario, Enum_tipousuario} from './enums';



interface User{
    nombres:string;
    apellidos: string;
    identificacion: string;
    correo: string;
    tipo_usuario: Enum_tipousuario;
    estado:Enum_EstadoUsuario,

}

const userSchema = new Schema<User>({
    
    nombres:{
        type:String,
        requiered:true,
    },
    apellidos:{
        type:String,
        requiered:true,
        
    },    

    identificacion:{
        type:String,
        requiered:true,
        unique:true,
        
    },
    correo:{
        type:String,
        required:true, 
        unique:true,
    },

    tipo_usuario:{
        type:String,
        required:true,
        enum: Enum_tipousuario,
    },
    estado:{
        type:String,
        required:true,
        enum: Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.PENDIENTE,

    },

});

const UserModel = model('User', userSchema);

export { UserModel };