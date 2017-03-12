using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using WebAPIs.Models;

using System.Web.Http.Cors;

namespace WebAPIs.Controllers
{
    public class ProductsController : ApiController
    {
        Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Laptop", Category = "Electronics", Price = 100000 },

            new Product { Id = 2, Name = "Jeans", Category = "Garments", Price = 200000 },

            new Product { Id = 3, Name = "Juicer", Category = "Home Appliances", Price = 300000 },
        };

        public IEnumerable<Product> GetProducts()
        {
            return products;
        }

        public HttpResponseMessage GetProduct(int id)
        {
            var product = products.FirstOrDefault(i => i.Id == id);
            if(product == null)
            {
                Request.CreateResponse(HttpStatusCode.NotFound, product);
            }
            return Request.CreateResponse(HttpStatusCode.OK, product);
            //return Ok(product);
        }
    }
}
