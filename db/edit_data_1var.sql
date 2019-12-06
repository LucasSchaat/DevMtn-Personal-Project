DO
$$
BEGIN
EXECUTE
    format('UPDATE %I SET outcome = %L, first_category = %L WHERE id = $2', 'training_data_' || $1, $3, $4);
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
-- UPDATE training_data
-- SET outcome = $2,
--     first_category = $3
-- WHERE id = $1;

-- SELECT *
-- FROM training_data
-- ORDER BY id ASC;


-- -- Incoming data will look like (id, newOutcomeValue, newFirstCategoryValue)
-- -- Ex. (1, Yes, brown)