using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpUs.Core.Data;
using HelpUs.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace HelpUs.Core.DAO
{
    public class UsuarioDao
    {

        private readonly HelpusContext _context;

        public UsuarioDao(HelpusContext context)
        {
            _context = context;
        }

        public bool CadastrarUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            _context.SaveChanges();

            return true;
        }

    }
}
