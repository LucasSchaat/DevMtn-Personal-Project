DO
$$
BEGIN
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, first_category VARCHAR(250))', 'testing_data_' || $1);
EXECUTE
    format('ALTER TABLE %I ADD COLUMN IF NOT EXISTS second_category VARCHAR(250), ADD COLUMN IF NOT EXISTS third_category VARCHAR(250), ADD COLUMN IF NOT EXISTS fourth_category VARCHAR(250), ADD COLUMN IF NOT EXISTS fifth_category VARCHAR(250), ADD COLUMN IF NOT EXISTS sixth_category VARCHAR(250)', 'testing_data_' || $1);
EXECUTE
    format('INSERT INTO %I (first_category, second_category, third_category, fourth_category, fifth_category, sixth_category) VALUES(%L, %L, %L, %L, %L, %L) ON CONFLICT DO NOTHING', 'testing_data_' || $1, $2, $3, $4, $5, $6, $7);
EXECUTE
    format('DELETE FROM %I WHERE id > 1', 'testing_data_' || $1);
EXECUTE
    format('UPDATE %I SET first_category = %L, second_category = %L, third_category = %L, fourth_category = %L, fifth_category = %L, sixth_category = %L WHERE id = 1', 'testing_data_' || $1, $2, $3, $4, $5, $6, $7);
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_all_testing_data();

CREATE OR REPLACE FUNCTION get_all_testing_data()
    RETURNS TABLE (id INTEGER, first_category VARCHAR(250), second_category VARCHAR(250), third_category VARCHAR(250), fourth_category VARCHAR(250), fifth_category VARCHAR(250), sixth_category VARCHAR(250)) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I', 'testing_data_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_all_testing_data();


-- OLD REFACTORED CODE
-- CREATE TABLE IF NOT EXISTS testing_data (
--     id SERIAL PRIMARY KEY,
--     first_category VARCHAR(250)
-- );

-- ALTER TABLE testing_data
-- ADD COLUMN IF NOT EXISTS second_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS third_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS fourth_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS fifth_category VARCHAR(250),
-- ADD COLUMN IF NOT EXISTS sixth_category VARCHAR(250);

-- INSERT INTO testing_data (first_category, second_category, third_category, fourth_category, fifth_category, sixth_category)
-- VALUES ($1, $2, $3, $4, $5, $6);

-- DELETE FROM testing_data
-- WHERE id > 1;

-- UPDATE testing_data
-- SET first_category = $1,
--     second_category = $2,
--     third_category = $3,
--     fourth_category = $4,
--     fifth_category = $5,
--     sixth_category = $6
-- WHERE id = 1;

-- SELECT *
-- FROM testing_data;