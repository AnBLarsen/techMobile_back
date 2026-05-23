import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    private users = [
        {
            "id": 1,
            "email": "sofia.martinez@example.com",
            "name": "Sofia Martinez",
            "password": "Password123!",
            "address": "123 Queen Street West",
            "phone": "+1 416-555-0147",
            "country": "Canada",
            "city": "Toronto"
        },
        {
            "id": 2,
            "email": "liam.chen@example.com",
            "name": "Liam Chen",
            "password": "SecurePass456!",
            "address": "88 King Street East",
            "phone": "+1 647-555-0192",
            "country": "Canada",
            "city": "Mississauga"
        },
        {
            "id": 3,
            "email": "emma.wilson@example.com",
            "name": "Emma Wilson",
            "password": "EmmaTest789!",
            "address": "45 Granville Street",
            "phone": "+1 604-555-0118",
            "country": "Canada",
            "city": "Vancouver"
        },
        {
            "id": 4,
            "email": "mateo.garcia@example.com",
            "name": "Mateo Garcia",
            "password": "MateoDev321!",
            "address": "210 Saint Catherine Street",
            "phone": "+1 514-555-0164",
            "country": "Canada",
            "city": "Montreal"
        },
        {
            "id": 5,
            "email": "ava.thompson@example.com",
            "name": "Ava Thompson",
            "password": "AvaShop2026!",
            "address": "17 Jasper Avenue",
            "phone": "+1 780-555-0189",
            "country": "Canada",
            "city": "Edmonton"
        }
    ];

    async getUsers() {
        return this.users;
    }
}