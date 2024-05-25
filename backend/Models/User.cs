using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ShopperBackend.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("username")]
    public string? Username { get; set; }

    [BsonElement("password_hash")]
    public string PasswordHash { get; set; } = null!;

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("first_name")]
    public string? FirstName { get; set; }

    [BsonElement("last_name")]
    public string? LastName { get; set; }

    [BsonElement("address")]
    public string? Address { get; set; }
}