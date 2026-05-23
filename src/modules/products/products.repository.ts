import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository {
    private products = [
        {
            "id": 1,
            "name": "iPhone 15 Pro",
            "description": "Apple smartphone with A17 Pro chip, titanium design, advanced camera system, and USB-C charging.",
            "price": 1499.99,
            "stock": true,
            "imgUrl": "https://example.com/images/iphone-15-pro.jpg"
        },
        {
            "id": 2,
            "name": "Samsung Galaxy S24 Ultra",
            "description": "High-end Android smartphone with AMOLED display, S Pen support, AI features, and powerful camera system.",
            "price": 1399.99,
            "stock": true,
            "imgUrl": "https://example.com/images/samsung-galaxy-s24-ultra.jpg"
        },
        {
            "id": 3,
            "name": "Google Pixel 8 Pro",
            "description": "Google smartphone with Tensor chip, clean Android experience, AI photo editing, and excellent camera performance.",
            "price": 1199.99,
            "stock": true,
            "imgUrl": "https://example.com/images/google-pixel-8-pro.jpg"
        },
        {
            "id": 4,
            "name": "MacBook Air 13-inch M3",
            "description": "Lightweight Apple laptop with M3 chip, Retina display, long battery life, and silent fanless design.",
            "price": 1499.99,
            "stock": true,
            "imgUrl": "https://example.com/images/macbook-air-m3.jpg"
        },
        {
            "id": 5,
            "name": "Dell XPS 13",
            "description": "Premium Windows ultrabook with compact design, high-resolution display, fast SSD storage, and Intel processor.",
            "price": 1299.99,
            "stock": true,
            "imgUrl": "https://example.com/images/dell-xps-13.jpg"
        },
        {
            "id": 6,
            "name": "Lenovo ThinkPad X1 Carbon",
            "description": "Business laptop with durable design, excellent keyboard, lightweight build, and strong security features.",
            "price": 1799.99,
            "stock": true,
            "imgUrl": "https://example.com/images/thinkpad-x1-carbon.jpg"
        },
        {
            "id": 7,
            "name": "Sony WH-1000XM5 Headphones",
            "description": "Wireless noise-cancelling headphones with premium sound quality, long battery life, and comfortable design.",
            "price": 499.99,
            "stock": true,
            "imgUrl": "https://example.com/images/sony-wh-1000xm5.jpg"
        },
        {
            "id": 8,
            "name": "Apple Watch Series 9",
            "description": "Smartwatch with fitness tracking, health sensors, notifications, GPS, and seamless iPhone integration.",
            "price": 529.99,
            "stock": true,
            "imgUrl": "https://example.com/images/apple-watch-series-9.jpg"
        },
        {
            "id": 9,
            "name": "iPad Air 11-inch",
            "description": "Thin and powerful tablet with Liquid Retina display, Apple Pencil support, and strong performance for work or entertainment.",
            "price": 799.99,
            "stock": false,
            "imgUrl": "https://example.com/images/ipad-air-11.jpg"
        },
        {
            "id": 10,
            "name": "Logitech MX Master 3S",
            "description": "Ergonomic wireless mouse with quiet clicks, precision scrolling, customizable buttons, and multi-device support.",
            "price": 129.99,
            "stock": true,
            "imgUrl": "https://example.com/images/logitech-mx-master-3s.jpg"
        }
    ];

    async getProducts() {
        return this.products;
    }
}