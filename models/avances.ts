import {Schema, model } from 'mongoose';
import { projectModel } from './project';
import { UserModel } from './user';

interface Avances {
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    proyecto: Schema.Types.ObjectId;
    creadopor:Schema.Types.ObjectId;
}

const avanceSchema = new Schema<Avances>({
fecha:{
    type:Date,
    required: true,
},

descripcion:{
    type: String,
    required: true,
},

observaciones:[
    {
        type: String,

    },

    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: projectModel,
        required: true,
    },

    creadopor:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }

});

const avancesModel = model('Avances', avanceSchema);

export {avancesModel};