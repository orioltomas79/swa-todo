using System.IO;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

namespace Todo.Api
{
    public class HttpGetUserClaims
    {
        private readonly ILogger<HttpGetUserClaims> _logger;

        public HttpGetUserClaims(ILogger<HttpGetUserClaims> log)
        {
            _logger = log;
        }

        [FunctionName("HttpGetUserClaims")]
        [OpenApiOperation(operationId: "Run", tags: new[] { "name" })]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(ClaimsPrincipal), Description = "The OK response")]
        public ActionResult<ClaimsPrincipal> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            return StaticWebAppsAuth.Parse(req);
        }
    }
}

