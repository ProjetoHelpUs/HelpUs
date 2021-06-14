using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HelpUs.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace HelpUs.Core.Data
{
    public class HelpusContext: DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public HelpusContext(DbContextOptions<HelpusContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = helpusdb; Integrated Security = True");
        }
    }
}
