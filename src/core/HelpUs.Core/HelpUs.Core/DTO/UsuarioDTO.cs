using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelpUs.Core.DTO
{
    public class UsuarioDTO
    {
        public int Id { get; set; }
        public string Id_Auth { get; set; }
        public int Tipo { get; set; }
        public string? Nome { get; set; }
        public string? Telefone { get; set; }
        public string? Email { get; set; }
        public string? Endereco { get; set; }
        public string? Banco { get; set; }
        public string? ContaBancaria { get; set; }
        public string? AgenciaBancaria { get; set; }
        public string? Pix { get; set; }
        public DateTime? DataNascimento { get; set; }
        public string? Descricao { get; set; }
        public string? LinkImagem { get; set; }
        public string? Password { get; set; }
    }
}
