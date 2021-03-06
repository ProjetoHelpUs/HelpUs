using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HelpUs.Core.Data;
using HelpUs.Core.Models;
using System.Data.SqlClient;
using System.Data;
using Dapper;

namespace HelpUs.Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : Controller
    {
        private readonly HelpusContext _context;

        public UsuariosController(HelpusContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Usuarios
        [HttpGet("/api/Usuarios/Donatarios")]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetDonatarios()
        {
            //sendo 1 donatário e 2 doador
            var usuarios = await _context.Usuarios.Where(u => u.Tipo == 1 ).ToListAsync();

            if (usuarios.Count < 1)
            {
                return BadRequest(Json("Ainda não existem usuários cadastrados."));
            }

            return Ok(Json(usuarios));
        } 

        // GET: api/Usuarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            return usuario;
        }

        // GET: api/Usuarios/email
        [HttpGet("/api/Busca/Usuarios/{email}")]
        public async Task<ActionResult<Usuario>> GetUsuarioPorEmail(string email)
        {
            try
            {
                var db = new SqlConnection("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = helpusdb; Integrated Security = True");

                string query = $"SELECT * FROM Usuarios Where Email = '{email}';";


                if (db.State == ConnectionState.Closed)
                {
                    db.Open();
                }
                var result = db.Query<Usuario>(query).ToArray();
                Usuario usuario = result[0];
                db.Close();

                if (usuario == null)
                {
                    return NotFound();
                }

                return Ok(Json(usuario));

            }catch(Exception ex)
            {
                return BadRequest(Json(ex.Message));
            }
        }

        // PUT: api/Usuarios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            if (id != usuario.Id)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Usuarios
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostUsuario(Usuario usuario)
        {
            try
            {
                var db = new SqlConnection("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = helpusdb; Integrated Security = True");
                
                string query = $"SELECT Id FROM AspNetUsers Where Email = '{usuario.Email}';";


                if(db.State == ConnectionState.Closed)
                {
                    db.Open();
                }
                var result = db.Query<AspNetUserBrabo>(query).ToArray();
                AspNetUserBrabo aspnetUser = result[0];
                usuario.Id_Auth = aspnetUser.Id;
                db.Close();
                _context.Usuarios.Add(usuario);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetUsuario", new { id = usuario.Id }, usuario);
                
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuarios.Any(e => e.Id == id);
        }
    }

    internal class AspNetUserBrabo
    {
        public string Id { get; set; }
    }
}
