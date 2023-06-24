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
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(UserClaims), Description = "The OK response")]
        public IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var claimsPrincipal = StaticWebAppsAuth.Parse(req);

            var userClaims = new UserClaims()
            {
                Name = claimsPrincipal.Identity!.Name,
                AuthType = claimsPrincipal.Identity.AuthenticationType
            };
            
            return new OkObjectResult(userClaims);
        }

        public class UserClaims
        {
            public string Name { get; set; }
            public string AuthType { get; set; }
        }
    }
}

