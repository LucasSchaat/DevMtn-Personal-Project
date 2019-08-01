CREATE TABLE IF NOT EXISTS testing_data (
    id SERIAL PRIMARY KEY,
    first_category TEXT
);

ALTER TABLE testing_data
ADD COLUMN IF NOT EXISTS second_category TEXT,
ADD COLUMN IF NOT EXISTS third_category TEXT,
ADD COLUMN IF NOT EXISTS fourth_category TEXT,
ADD COLUMN IF NOT EXISTS fifth_category TEXT,
ADD COLUMN IF NOT EXISTS sixth_category TEXT;

INSERT INTO testing_data (first_category, second_category, third_category, fourth_category, fifth_category, sixth_category)
VALUES ($1, $2, $3, $4, $5, $6);

DELETE FROM testing_data
WHERE id > 1;

UPDATE testing_data
SET first_category = $1,
    second_category = $2,
    third_category = $3,
    fourth_category = $4,
    fifth_category = $5,
    sixth_category = $6
WHERE id = 1;

SELECT *
FROM testing_data;