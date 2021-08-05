using school_management.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Interfaces
{
    interface IEquipamento
    {
        List<Equipamento> Listar();
        Equipamento BuscarId(int id);
        void Cadastrar(Equipamento novoEquipamento);
        void Deletar(int id);
        void Atualizar(Equipamento equipamento, int id);
    }
}
