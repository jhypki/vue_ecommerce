using ShopperBackend.Models;
using ShopperBackend.Services;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<ShopperDatabaseSettings>(builder.Configuration.GetSection("ShopperDatabase"));

builder.Services.AddSingleton<ProductsService>();

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();