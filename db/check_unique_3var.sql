DROP FUNCTION IF EXISTS check_unique_variable();

CREATE OR REPLACE FUNCTION check_unique_variable()
    RETURNS TABLE (id INTEGER, property VARCHAR(250), reference_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I WHERE property = %L', 'third_category_values_' || $1, $2);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM check_unique_variable();


-- OLD REFACTORED CODE
-- SELECT *
-- FROM third_category_values
-- WHERE property = $1;