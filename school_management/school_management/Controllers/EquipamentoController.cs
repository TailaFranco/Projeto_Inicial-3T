using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using school_management.Interfaces;
using school_management.Domains;
using school_management.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace school_management.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EquipamentoController : ControllerBase
    {
        private IEquipamento _equipamento { get; set; }

        public EquipamentoController()
        {
            _equipamento = new EquipamentoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_equipamento.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("{id}")]
        public IActionResult BuscarId(int id)
        {
            try
            {
                return Ok(_equipamento.BuscarId(id));
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Equipamento novoEquipamento)
        {
            try
            {
                _equipamento.Cadastrar(novoEquipamento);

                return StatusCode(202);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPut("{id}")]
        public IActionResult Atualizar(Equipamento equipamentoAtt, int id)
        {
            try
            {
                _equipamento.Atualizar(equipamentoAtt, id);

                return StatusCode(202);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            try
            {
                _equipamento.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
