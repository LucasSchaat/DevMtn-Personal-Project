DO
$$
BEGIN
EXECUTE
    format('DELETE FROM %I WHERE id = $2', 'training_data_' || $1);
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS get_training_data();

CREATE OR REPLACE FUNCTION get_training_data()
    RETURNS TABLE (id INTEGER, outcome VARCHAR(250), first_category VARCHAR(250), second_category VARCHAR(250), reference_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT * FROM %I ORDER BY id ASC', 'training_data_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_training_data();


-- OLD REFACTORED CODE
-- DELETE FROM training_data
-- WHERE id = $1;

-- SELECT *
-- FROM training_data;