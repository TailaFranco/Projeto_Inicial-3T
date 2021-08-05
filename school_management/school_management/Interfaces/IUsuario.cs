using school_management.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Interfaces
{
    interface IUsuario
    {
        Usuario Login(string email, string senha);
        void Cadastrar(Usuario novoUsuario);
        List<Usuario> Listar();
        Usuario BuscarPorId(int id);
        void Deletar(int id);
    }
}
