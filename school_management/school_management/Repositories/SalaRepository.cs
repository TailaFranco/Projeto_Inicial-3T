using school_management.Contexts;
using school_management.Domains;
using school_management.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Repositories
{
    public class SalaRepository : ISala
    {
        GerenciarPatrimonioContext ctx = new GerenciarPatrimonioContext();
        public void Atualizar(Sala salaAtualizada, int id)
        {
            Sala salaBuscada = BuscarPorId(id);
            if(salaAtualizada.Nome != null)
            {
                salaBuscada.Nome = salaAtualizada.Nome;
            }
            if (salaAtualizada.Metragem != null)
            {
                salaBuscada.Metragem = salaAtualizada.Metragem;
            }
            if (salaAtualizada.Andar > 0)
            {
                salaBuscada.Andar = salaAtualizada.Andar;
            }
            ctx.Salas.Update(salaBuscada);
            ctx.SaveChanges();
        }

        public Sala BuscarPorId(int id)
        {
            return ctx.Salas.FirstOrDefault(s => s.IdSala == id);
        }

        public Sala BuscarPorIdUsuario(int id)
        {
            return ctx.Salas.FirstOrDefault(s => s.IdUsuario == id);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Salas.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Sala> Listar()
        {
            return ctx.Salas.ToList();
        }
    }
}
