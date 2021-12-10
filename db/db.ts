//import { connect } from 'mongoose';
import  mongoose  from 'mongoose';

const conectarBD = async () =>{

  // console.log(process.env.DATABASE_URL );

    return await mongoose.connect(process.env.DATABASE_URL ? process.env.DATABASE_URL:
               'mongodb+srv://DianaGonzalez:simon0304@proyectoventas.cmbcl.mongodb.net/Gestion-Proyecto?retryWrites=true&w=majority'
    )
    .then(() =>{
        console.log('Conexion Exitosa');
    })
    .catch((e)=>{
        console.error('Error conectando con la Base de Datos', e);
        });
    };
export default conectarBD;