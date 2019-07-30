CREATE TABLE IF NOT EXISTS first_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS second_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS third_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS fourth_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS fifth_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS sixth_category_values (
    id SERIAL PRIMARY KEY,
    property TEXT UNIQUE,
    reference_id INTEGER
);

CREATE TABLE IF NOT EXISTS training_data (
    id SERIAL PRIMARY KEY,
    outcome TEXT NOT NULL,
    first_category TEXT,
    reference_id INTEGER
);

ALTER TABLE training_data
ADD COLUMN IF NOT EXISTS second_category TEXT,
ADD COLUMN IF NOT EXISTS third_category TEXT,
ADD COLUMN IF NOT EXISTS fourth_category TEXT,
ADD COLUMN IF NOT EXISTS fifth_category TEXT,
ADD COLUMN IF NOT EXISTS sixth_category TEXT;

INSERT INTO first_category_values (reference_id, property)
VALUES ($1, $3)
ON CONFLICT DO NOTHING;

INSERT INTO second_category_values (reference_id, property)
VALUES ($1, $4)
ON CONFLICT DO NOTHING;

INSERT INTO third_category_values (reference_id, property)
VALUES ($1, $5)
ON CONFLICT DO NOTHING;

INSERT INTO fourth_category_values (reference_id, property)
VALUES ($1, $6)
ON CONFLICT DO NOTHING;

INSERT INTO fifth_category_values (reference_id, property)
VALUES ($1, $7)
ON CONFLICT DO NOTHING;

INSERT INTO sixth_category_values (reference_id, property)
VALUES ($1, $8)
ON CONFLICT DO NOTHING;

INSERT INTO training_data (reference_id, outcome)
VALUES ($1, $2);

UPDATE training_data
SET first_category = $3
WHERE reference_id = $1;

UPDATE training_data
SET second_category = $4
WHERE reference_id = $1;

UPDATE training_data
SET third_category = $5
WHERE reference_id = $1;

UPDATE training_data
SET fourth_category = $6
WHERE reference_id = $1;

UPDATE training_data
SET fifth_category = $7
WHERE reference_id = $1;

UPDATE training_data
SET sixth_category = $8
WHERE reference_id = $1;

SELECT *
FROM training_data
ORDER BY id ASC;


-- Incoming data will look like (outcomeValue, firstCategoryValue, secondCategoryValue, thirdCategoryValue, fourthCategoryValue, fifthCategoryValue, sixthCategory)
-- Ex. (Yes, brown, 26, green, 5.8, BYU, Great Pic)