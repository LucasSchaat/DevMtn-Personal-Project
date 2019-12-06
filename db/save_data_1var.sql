DO
$$
BEGIN
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'first_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id INTEGER PRIMARY KEY, property VARCHAR(250) UNIQUE, reference_id INTEGER)', 'outcome_values_' || $1);
EXECUTE
    format('ALTER TABLE IF EXISTS %I DROP COLUMN IF EXISTS second_category, DROP COLUMN IF EXISTS third_category, DROP COLUMN IF EXISTS fourth_category, DROP COLUMN IF EXISTS fifth_category, DROP COLUMN IF EXISTS sixth_category', 'training_data_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'second_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'third_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'fourth_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'fifth_category_values_' || $1);
EXECUTE
    format('DROP TABLE IF EXISTS %I', 'sixth_category_values_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, outcome VARCHAR(250), first_category VARCHAR(250), reference_id INTEGER)', 'training_data_' || $1);
EXECUTE
    format('INSERT INTO %I (reference_id, property, id) VALUES($2, %L, 1) ON CONFLICT DO NOTHING', 'outcome_values_' || $1, $3);
EXECUTE
    format('INSERT INTO %I (reference_id, property, id) VALUES($2, %L, 0) ON CONFLICT DO NOTHING', 'outcome_values_' || $1, $4);
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES($2, %L) ON CONFLICT DO NOTHING', 'first_category_values_' || $1, $6);
EXECUTE
    format('INSERT INTO %I (reference_id, outcome) VALUES($2, %L) ON CONFLICT DO NOTHING', 'training_data_' || $1, $5);
EXECUTE
    format('UPDATE %I SET first_category = %L WHERE reference_id = $2', 'training_data_' || $1, $6);
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_all_training_data();

CREATE OR REPLACE FUNCTION get_all_training_data()
    RETURNS TABLE (id INTEGER, outcome VARCHAR(250), first_category VARCHAR(250), reference_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I ORDER BY id ASC', 'training_data_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_all_training_data();


-- OLD CODE REFACTORED
-- CREATE TABLE IF NOT EXISTS first_category_values (
--     id SERIAL PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS outcome_values (
--     id INTEGER PRIMARY KEY,
--     property VARCHAR(250) UNIQUE,
--     reference_id INTEGER
-- );

-- ALTER TABLE IF EXISTS training_data
-- DROP COLUMN IF EXISTS second_category,
-- DROP COLUMN IF EXISTS third_category,
-- DROP COLUMN IF EXISTS fourth_category,
-- DROP COLUMN IF EXISTS fifth_category,
-- DROP COLUMN IF EXISTS sixth_category;

-- DROP TABLE IF EXISTS second_category_values;
-- DROP TABLE IF EXISTS third_category_values;
-- DROP TABLE IF EXISTS fourth_category_values;
-- DROP TABLE IF EXISTS fifth_category_values;
-- DROP TABLE IF EXISTS sixth_category_values;

-- CREATE TABLE IF NOT EXISTS training_data (
--     id SERIAL PRIMARY KEY,
--     outcome VARCHAR(250),
--     first_category VARCHAR(250),
--     reference_id INTEGER
-- );

-- INSERT INTO outcome_values (reference_id, property, id)
-- VALUES ($1, $2, 1)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO outcome_values (reference_id, property, id)
-- VALUES ($1, $3, 0)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO first_category_values (reference_id, property)
-- VALUES ($1, $5)
-- ON CONFLICT DO NOTHING;

-- INSERT INTO training_data (reference_id, outcome)
-- VALUES ($1, $4);

-- UPDATE training_data
-- SET first_category = $5
-- WHERE reference_id = $1;

-- SELECT *
-- FROM training_data
-- ORDER BY id ASC;


-- Incoming data will look like (reference_id, firstOutcome, secondOutcome, outcomeValue, firstCategoryValue)
-- Ex. (1, good, bad, Yes, brown)