namespace web_player_back.Models
{
    /// <summary>
    /// Stores catalog(title, symbol, image(name))
    /// </summary>
    public class CatalogElement
    {
        public string title { get; set; }

        public string description { get; set; }

        public string keyword { get; set; }
    }
}
