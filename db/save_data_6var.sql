DO
$$
BEGIN
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'first_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'second_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'third_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'fourth_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'fifth_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'sixth_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id INTEGER PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'outcome_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, outcome VARCHAR(250), first_category VARCHAR(250), reference_id INTEGER)', 'training_data_' || $1);
EXECUTE
    format('ALTER TABLE %I ADD COLUMN IF NOT EXISTS second_category VARCHAR(250), ADD COLUMN IF NOT EXISTS third_category VARCHAR(250), ADD COLUMN IF NOT EXISTS fourth_category VARCHAR(250), ADD COLUMN IF NOT EXISTS fifth_category VARCHAR(250), ADD COLUMN IF NOT EXISTS sixth_category VARCHAR(250)', 'training_data_' || $1);
EXECUTE
    format('INSERT INTO %I (reference_id, property, id) VALUES($2, %L, 1) ON CONFLICT DO NOTHING', 'outcome_values_' || $1, $3);
EXECUTE
    format('INSERT INTO %I (reference_id, property, id) VALUES($2, %L, 0) ON CONFLICT DO NOTHING', 'outcome_values_' || $1, $4);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'first_category_values_' || $1, $6);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'second_category_values_' || $1, $7);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'third_category_values_' || $1, $8);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'fourth_category_values_' || $1, $9);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'fifth_category_values_' || $1, $10);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'sixth_category_values_' || $1, $11);
EXECUTE
    format('INSERT INTO %I (reference_id, outcome) VALUES($2, %L) ON CONFLICT DO NOTHING', 'training_data_' || $1, $5);
EXECUTE
    format('UPDATE %I SET first_category = %L WHERE reference_id = $2', 'training_data_' || $1, $6);
EXECUTE
    format('UPDATE %I SET second_category = %L WHERE reference_id = $2', 'training_data_' || $1, $7);
EXECUTE
    format('UPDATE %I SET third_category = %L WHERE reference_id = $2', 'training_data_' || $1, $8);
EXECUTE
    format('UPDATE %I SET fourth_category = %L WHERE reference_id = $2', 'training_data_' || $1, $9);
EXECUTE
    format('UPDATE %I SET fifth_category = %L WHERE reference_id = $2', 'training_data_' || $1, $10);
EXECUTE
    format('UPDATE %I SET sixth_category = %L WHERE reference_id = $2', 'training_data_' || $1, $11);
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_all_training_data();

CREATE OR REPLACE FUNCTION get_all_training_data()
    RETURNS TABLE (id INTEGER, outcome VARCHAR(250), first_category VARCHAR(250), reference_id INTEGER, second_category VARCHAR(250), third_category VARCHAR(250), fourth_category VARCHAR(250), fifth_category VARCHAR(250), sixth_category VARCHAR(250)) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I ORDER BY id ASC', 'training_data_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_all_training_data();


-- OLD REFACTORED CODE
-- CREATE TABLE IF NOT EXISTS first_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS second_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS third_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS fourth_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS fifth_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS sixth_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS outcome_values (
--     id INTEGER PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS training_data (
--     id SERIAL PRIMARY KEY,
--     outcome VARCHAR(250) NOT NULL,
--     first_category VARCHAR(250),
--     reference_id INTEGER
-- );

-- ALTER TABLE training_data
-- ADD COLUMN IF NOT EXISTS second_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS third_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS fourth_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS fifth_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS sixth_category VARCHAR(250);

-- INSERT INTO outcome_values (reference_id, property, id)
-- VALUES ($1, $2, 1)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO outcome_values (reference_id, property, id)
-- VALUES ($1, $3, 0)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO first_category_values (reference_id, property)
-- VALUES ($1, $5)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO second_category_values (reference_id, property)
-- VALUES ($1, $6)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO third_category_values (reference_id, property)
-- VALUES ($1, $7)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO fourth_category_values (reference_id, property)
-- VALUES ($1, $8)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO fifth_category_values (reference_id, property)
-- VALUES ($1, $9)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO sixth_category_values (reference_id, property)
-- VALUES ($1, $10)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO training_data (reference_id, outcome)
-- VALUES ($1, $4);

-- UPDATE training_data
-- SET first_category = $5
-- WHERE reference_id = $1;

-- UPDATE training_data
-- SET second_category = $6
-- WHERE reference_id = $1;

-- UPDATE training_data
-- SET third_category = $7
-- WHERE reference_id = $1;

-- UPDATE training_data
-- SET fourth_category = $8
-- WHERE reference_id = $1;

-- UPDATE training_data
-- SET fifth_category = $9
-- WHERE reference_id = $1;

-- UPDATE training_data
-- SET sixth_category = $10
-- WHERE reference_id = $1;

-- SELECT *
-- FROM training_data
-- ORDER BY id ASC;


-- -- Incoming data will look like (redference_id, firstOutcome, secondOutcome, outcomeValue, firstCategoryValue, secondCategoryValue, thirdCategoryValue, fourthCategoryValue, fifthCategoryValue, sixthCategory)
-- -- Ex. (1, good, bad, Yes, brown, 26, green, 5.8, BYU, Great Pic)