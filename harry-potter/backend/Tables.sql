CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "house" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "classes" INTEGER NOT NULL,
    "orders" INTEGER NOT NULL,
    "known_spells" INTEGER NOT NULL,
    "fav_potions" INTEGER NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "professors"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_link" TEXT NOT NULL
);
ALTER TABLE
    "professors" ADD PRIMARY KEY("id");
CREATE TABLE "spells"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "spells" ADD PRIMARY KEY("id");
CREATE TABLE "stores"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "items" INTEGER NOT NULL
);
ALTER TABLE
    "stores" ADD PRIMARY KEY("id");
CREATE TABLE "orders"(
    "id" INTEGER NOT NULL,
    "item_name" TEXT NOT NULL,
    "item_qty" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "store" INTEGER NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("id");
CREATE TABLE "classes"(
    "id" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "time" TIME(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "classes" ADD PRIMARY KEY("id");
CREATE TABLE "founders"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "house" INTEGER NOT NULL
);
ALTER TABLE
    "founders" ADD PRIMARY KEY("id");
CREATE TABLE "potions"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "potions" ADD PRIMARY KEY("id");
CREATE TABLE "houses"(
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "founder" TEXT NOT NULL,
    "image_link" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "houses" ADD PRIMARY KEY("id");
CREATE TABLE "items"(
    "id" INTEGER NOT NULL,
    "store" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL
);
ALTER TABLE
    "items" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_classes_foreign" FOREIGN KEY("classes") REFERENCES "classes"("id");
ALTER TABLE
    "classes" ADD CONSTRAINT "classes_professor_foreign" FOREIGN KEY("professor") REFERENCES "professors"("id");
ALTER TABLE
    "houses" ADD CONSTRAINT "houses_founder_foreign" FOREIGN KEY("founder") REFERENCES "founders"("id");
ALTER TABLE
    "founders" ADD CONSTRAINT "founders_house_foreign" FOREIGN KEY("house") REFERENCES "houses"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_store_foreign" FOREIGN KEY("store") REFERENCES "stores"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_fav_potions_foreign" FOREIGN KEY("fav_potions") REFERENCES "potions"("id");
ALTER TABLE
    "stores" ADD CONSTRAINT "stores_items_foreign" FOREIGN KEY("items") REFERENCES "items"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_known_spells_foreign" FOREIGN KEY("known_spells") REFERENCES "spells"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_orders_foreign" FOREIGN KEY("orders") REFERENCES "orders"("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_house_foreign" FOREIGN KEY("house") REFERENCES "houses"("id");