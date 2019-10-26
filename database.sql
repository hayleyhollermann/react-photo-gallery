CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(80) NOT NULL,
	"description" VARCHAR(200) NOT NULL,
	"likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("path", "description") VALUES('images/sedona.jpg', 'Bear Mountain in Sedona');

INSERT INTO "gallery" ("path", "description") VALUES('images/beanlake.jpg', 'Bean Lake in Tettegouche State Park');

INSERT INTO "gallery" ("path", "description") VALUES('images/colorado.jpg', 'St Marys Glacier in the Rocky Mountains');

INSERT INTO "gallery" ("path", "description") VALUES('images/hike.jpg', 'I love hiking!!');

INSERT INTO "gallery" ("path", "description") VALUES('images/duluth.jpg', 'Concert with friends in Duluth!');

INSERT INTO "gallery" ("path", "description") VALUES('images/bighornsheep.jpg', 'Big Horn Sheep in Badlands National Park');

INSERT INTO "gallery" ("path", "description") VALUES('images/cliff.jpg', 'Sitting on the edge of a cliff in Coconino National Forest');

