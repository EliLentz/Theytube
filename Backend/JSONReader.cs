using web_player_back.Models;
using Newtonsoft.Json;
using System.IO;
using System.Linq;

namespace web_player_back
{
    /// <summary>
    /// Read the Json file with catalog elements and deserialize it to array type of CatalogElement
    /// </summary>
    public class JSONReader
    {
        #region Data Members
        /// <summary>
        /// path to catalog json file
        /// </summary>
        private const string JSON_PATH = @"Assets/JSON/catalog.json";
        #endregion

        private static string LoadJson()
        {
            using (StreamReader r = new StreamReader(JSON_PATH))
            {
                return r.ReadToEnd();
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>array type of CatalogElement from Json file</returns>
        public static CatalogElement[] GetCatalog()
        {
            return JsonConvert.DeserializeObject<CatalogElement[]>(LoadJson());
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="query"></param>
        /// <returns>filtered by query array type of CatalogElement from Json file</returns>
        public static CatalogElement[] GetFilteredCatalog(string query)
        {
            return JsonConvert.DeserializeObject<CatalogElement[]>(LoadJson())
                .Where(item => item.title.ToLower().Contains(query.ToLower())).ToArray();
        }
    }
}
