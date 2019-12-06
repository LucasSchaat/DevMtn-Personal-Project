DO
$$
BEGIN
EXECUTE
    format('ALTER TABLE IF EXISTS %I DROP COLUMN IF EXISTS second_category, DROP COLUMN IF EXISTS third_category, DROP COLUMN IF EXISTS fourth_category, DROP COLUMN IF EXISTS fifth_category, DROP COLUMN IF EXISTS sixth_category', 'testing_data_' || $1);
EXECUTE
    format('CREATE TABLE IF NOT EXISTS %I (id SERIAL PRIMARY KEY, first_category VARCHAR(250))', 'testing_data_' || $1);
EXECUTE
    format('INSERT INTO %I (first_category) VALUES(%L) ON CONFLICT DO NOTHING', 'testing_data_' || $1, $2);
EXECUTE
    format('DELETE FROM %I WHERE id > 1', 'testing_data_' || $1);
EXECUTE
    format('UPDATE %I SET first_category = %L WHERE id = 1', 'testing_data_' || $1, $2);
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_all_testing_data();

CREATE OR REPLACE FUNCTION get_all_testing_data()
    RETURNS TABLE (id INTEGER, first_category VARCHAR(250)) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I', 'testing_data_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_all_testing_data();


-- OLD REFACTORED CODE
-- ALTER TABLE IF EXISTS testing_data
-- DROP COLUMN IF EXISTS second_category,
-- DROP COLUMN IF EXISTS third_category,
-- DROP COLUMN IF EXISTS fourth_category,
-- DROP COLUMN IF EXISTS fifth_category,
-- DROP COLUMN IF EXISTS sixth_category;

-- CREATE TABLE IF NOT EXISTS testing_data (
--     id SERIAL PRIMARY KEY,
--     first_category VARCHAR(250)
-- );

-- INSERT INTO testing_data (first_category)
-- VALUES ($1);

-- DELETE FROM testing_data
-- WHERE id > 1;

-- UPDATE testing_data
-- SET first_category = $1
-- WHERE id = 1;

-- SELECT *
-- FROM testing_data;