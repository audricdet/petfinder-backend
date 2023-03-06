CREATE TABLE "profile"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "user_id" BIGINT NOT NULL
);
ALTER TABLE
    "profile" ADD PRIMARY KEY("id");
CREATE TABLE "user"(
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "user" ADD PRIMARY KEY("id");
CREATE TABLE "category"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "category" ADD PRIMARY KEY("id");
CREATE TABLE "post"(
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "category_id" BIGINT NOT NULL,
    "animal_id" BIGINT NOT NULL,
    "profile_id" BIGINT NOT NULL
);
ALTER TABLE
    "post" ADD PRIMARY KEY("id");
CREATE TABLE "animal"(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "animal" ADD PRIMARY KEY("id");
ALTER TABLE
    "post" ADD CONSTRAINT "post_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "post" ADD CONSTRAINT "post_animal_id_foreign" FOREIGN KEY("animal_id") REFERENCES "animal"("id");
ALTER TABLE
    "post" ADD CONSTRAINT "post_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "category"("id");
ALTER TABLE
    "profile" ADD CONSTRAINT "profile_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user"("id");