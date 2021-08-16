using Microsoft.AspNetCore.Mvc;
using System;
using web_player_back.Models;

namespace web_player_back.Controllers
{
    [ApiController]
    [Route("api")]
    public class APIController : Controller
    {
        #region API functions

        // GET: @"api/getCatalog"
        [HttpGet("getCatalog")]
        public CatalogElement[] GetCatalog()
        {
            return JSONReader.GetCatalog();
        }

        // GET: @"api/getCatalog/{query}"
        [HttpGet("getCatalog/{query}")]
        public CatalogElement[] GetFilteredCatalog(string query)
        {
            return JSONReader.GetFilteredCatalog(query);
        }

        // GET: @$"api/getCatalog/{keyword}"
        [HttpGet("GetCatalog/Element/{keyword}")]
        public CatalogElement GetCatalogElementByKeywordAPI(string keyword)
        {
            return GetCatalogElementByKeyword(keyword);
        }

        // GET: @$"api/getCatalog/image/{keyword}"
        [HttpGet("getCatalog/image/{imageName}")]
        public ActionResult GetImageByKeyword(string imageName)
        {
            const string images_folder_path = "../web_player_back/Assets/Images/";

            try
            {
                Byte[] b = System.IO.File.ReadAllBytes(@$"{images_folder_path}{imageName}");
                return File(b, "image/jpeg");
            }
            catch
            {
                return null;
            }
        }

        // Get: @$"api/GetVideo/{keyword}"
        [HttpGet("GetVideo/{videoName}")]
        public ActionResult GetVideoByKeyword(string videoName)
        {
            const string videos_folder_path = "../web_player_back/Assets/Videos/";

            try
            {
                Byte[] b = System.IO.File.ReadAllBytes(@$"{videos_folder_path}{videoName}");    
                return File(b, "video/mp4");
            }
            catch
            {
                return null;
            }
        }
        #endregion

        #region HelpFunctions
        private CatalogElement GetCatalogElementByKeyword(string keyword)
        {
            CatalogElement[] catalogElements = JSONReader.GetCatalog(); 

            foreach (CatalogElement element in catalogElements)
                if (element.keyword == keyword)
                    return element;
            return null;
        }

        #endregion
    }
}
