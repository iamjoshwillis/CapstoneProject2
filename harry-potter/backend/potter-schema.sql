CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "house" INTEGER REFERENCES houses(id),
    "image_url" TEXT,
    "bio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "courses" INTEGER REFERENCES courses(id),
    "orders" INTEGER REFERENCES orders(id),
    "known_spells" INTEGER REFERENCES spells(id),
    "fav_potions" INTEGER REFERENCES potions(id)
);
-- Seeded

CREATE TABLE "houses"(
    "id" INTEGER PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "founder" TEXT NOT NULL,
    "image_link" TEXT,
    "description" TEXT NOT NULL
);
-- Seeded

CREATE TABLE "courses"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professor" INTEGER NOT NULL REFERENCES professors(id),
    "time" TIME(0) WITHOUT TIME ZONE NOT NULL
);


CREATE TABLE "professors"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "house" INTEGER REFERENCES houses(id),
    "image" TEXT,
    "courses" TEXT
);
-- Seeded

CREATE TABLE "stores"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "items" INTEGER NOT NULL REFERENCES items(id)
);

CREATE TABLE "items"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "store" INTEGER NOT NULL REFERENCES stores(id),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" FLOAT NOT NULL
);

CREATE TABLE "orders"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_qty" INTEGER NOT NULL,
    "price" FLOAT NOT NULL,
    "store" INTEGER NOT NULL REFERENCES stores(id);
);


CREATE TABLE "spells"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

CREATE TABLE "potions"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
