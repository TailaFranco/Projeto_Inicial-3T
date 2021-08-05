using school_management.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Interfaces
{
    interface ISala
    {
        List<Sala> Listar();
        Sala BuscarPorId(int id);
        void Cadastrar(Sala novaSala);
        void Deletar(int id);
        void Atualizar(Sala salaAtualizada, int id);
    }
}
