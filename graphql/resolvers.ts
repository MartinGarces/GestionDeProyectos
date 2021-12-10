import { UserModel } from "../models/user";
import { projectModel } from "../models/project";
const resolvers ={
    Query:{
        Usuarios: async (parent, args)=>{
          const usuarios =await UserModel.find();
          return usuarios; 
        },
        Usuario: async (parent, args)=>{
          const usuario = await UserModel.findOne({_id:args._id})    
          return usuario;
          },


        Proyectos: async (parent, args)=>{
            const proyectos = await projectModel.find().populate('lider');   
            return proyectos;
                }
          
    },
    Mutation: {
    crearUsuario: async (parent, args)=>{
      const usuarioCreado = await UserModel.create({
        nombres: args.nombres,
        apellidos: args.apellidos,
        identificacion: args.identificacion,
        correo: args.correo,
        tipo_usuario: args.tipo_usuario,
    });
    if (Object.keys(args).includes('estado')){
       usuarioCreado.estado = args.estado;
  }

    return usuarioCreado;
      
      },

      editarUsuario: async (parent, args)=>{
        const usuarioEditar = await UserModel.findByIdAndUpdate(args._id,{
                nombres: args.nombres,
                apellidos: args.apellidos,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                tipo_usuario: args.tipo_usuario, 
             
          }); 
          return usuarioEditar;
        },  

      eliminarUsuario: async (parent, args)=>{
       if(Object.keys(args).includes('_id'))
          {
          const usuarioEliminado =await UserModel.findOneAndDelete({_id: args._id});
          return usuarioEliminado;

          } else if (Object.keys(args).includes('nombres')){

          const usuarioEliminado = await UserModel.findOneAndDelete({nombres: args.nombres});
          return usuarioEliminado;
         
          } 
    },  
    crearProyecto: async(parent, args)=>{ 
      const proyectoCreado = await projectModel.create({  
       nombre:args.nombre,
       estado:args.estado,
       fase:args.fase,
       presupuesto:args.presupuesto,
       fechainicio:args.fechainicio,
       fechafinal:args.fechafinal,
       lider: args.lider,
       objetivos: [{descripcion:'objetivo general *****', tipo:'GENERAL'}],
      });
      return proyectoCreado;
      }
    },
};

export { resolvers};