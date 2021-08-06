using school_management.Contexts;
using school_management.Domains;
using school_management.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management
{
    public class EquipamentoRepository : IEquipamento
    {
        public GerenciarPatrimonioContext ctx = new GerenciarPatrimonioContext();

        public void Atualizar(Equipamento equipamentoAtt, int id)
        {
            Equipamento buscarEquip = BuscarId(id);

            if (equipamentoAtt.IdAtivo != null)
            {
                buscarEquip.IdAtivo = equipamentoAtt.IdAtivo;
            }

            if (equipamentoAtt.IdSala != null)
            {
                buscarEquip.IdSala = equipamentoAtt.IdSala;
            }

            if (equipamentoAtt.IdTipoEquipamento != null)
            {
                buscarEquip.IdTipoEquipamento = equipamentoAtt.IdTipoEquipamento;
            }

            if (equipamentoAtt.Marca != null)
            {
                buscarEquip.Marca = equipamentoAtt.Marca;
            }

            if (equipamentoAtt.NumeroSerie != null)
            {
                buscarEquip.NumeroSerie = equipamentoAtt.NumeroSerie;
            }

            if (equipamentoAtt.Descricao != null)
            {
                buscarEquip.Descricao = equipamentoAtt.Descricao;
            }

            ctx.Equipamentos.Update(buscarEquip);
            ctx.SaveChanges();
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            ctx.Remove(BuscarId(id));

            ctx.SaveChanges();
        }

        public List<Equipamento> Listar()
        {
            return ctx.Equipamentos.ToList();
        }

        public Equipamento BuscarId(int id)
        {
            return ctx.Equipamentos.FirstOrDefault(e => e.IdEquipamento == id);
        }

        public List<Equipamento> BuscarIdUsuario(int id)
        {
            return ctx.Equipamentos.Where(e => e.IdUsuario == id).ToList();
        }
    }
}
