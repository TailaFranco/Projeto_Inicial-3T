using school_management.Contexts;
using school_management.Domains;
using school_management.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Repositories
{
    public class UsuariosRepository : IUsuario
    {
        public GerenciarPatrimonioContext ctx = new GerenciarPatrimonioContext();

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Usuario usuario = ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);

            Sala sala = ctx.Salas.FirstOrDefault(s => s.IdUsuario == id);

            Equipamento equipamento = ctx.Equipamentos.FirstOrDefault(e => e.IdUsuario == id);

            if (sala != null)
            {
                ctx.Salas.Remove(sala);
            }
            if (equipamento != null)
            {
                ctx.Equipamentos.Remove(equipamento);
            }

            ctx.Usuarios.Remove(usuario);

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
