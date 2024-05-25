using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ShopperBackend.Models
{
    public class Product
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("name")]
        public string? Name { get; set; }

        [BsonElement("category")]
        public string? Category { get; set; }
        [BsonElement("description")]
        public string? Description { get; set; }
        [BsonElement("price")]
        public decimal Price { get; set; }


        [BsonElement("image_urls")]
        public List<string>? ImageUrls { get; set; } = new List<string>();
        [BsonElement("stock_quantity")]
        public int Stock_quantity { get; set; }
    }
}
