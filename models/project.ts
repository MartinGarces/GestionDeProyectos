import { Schema, model } from 'mongoose';
import { Enum_Estado_Proyecto, Enum_Fase_Proyecto } from './enums';
import { UserModel } from './user';

interface Project{
nombre:string;
presupuesto:number;
fechainicio:Date;
fechafinal:Date;
estado: Enum_Estado_Proyecto;
fase: Enum_Fase_Proyecto;
lider:Schema.Types.ObjectId;


}

const projectSchema = new Schema<Project>({
nombre: {
    type:String,
    required: true,
},
presupuesto: {
    type:Number,
    required: true,
},

fechainicio: {
    type:Date,
    required: true,
},
fechafinal: {
    type:Date,
    required: true,
},
estado:{
    type: String,
    enum: Enum_Estado_Proyecto,
    default:Enum_Estado_Proyecto.INACTIVO,
},
fase:{
    type: String,
    enum: Enum_Fase_Proyecto,
    default:Enum_Fase_Proyecto.NULA,
},

lider:{
    type: Schema.Types.ObjectId,
    required:true,
    ref:UserModel,
},

});

const projectModel=model('Project',projectSchema, "Proyectos");

export {projectModel};