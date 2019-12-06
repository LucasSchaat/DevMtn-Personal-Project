DROP FUNCTION IF EXISTS get_training_data_for_model();

CREATE OR REPLACE FUNCTION get_training_data_for_model()
    RETURNS TABLE (outcome_id INTEGER, first_id INTEGER) AS
    $$
    BEGIN
    RETURN QUERY EXECUTE
        format('SELECT outcome.id as outcome_id, first.id as first_id FROM %I td JOIN %I outcome ON td.outcome = outcome.property JOIN %I first ON td.first_category = first.property', 'training_data_' || $1, 'outcome_values_' || $1, 'first_category_values_' || $1);
        RETURN;
    END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_training_data_for_model();


-- OLD REFACTORED CODE
-- SELECT outcome.id as outcome_id, first.id as first_id
-- FROM training_data td
-- JOIN outcome_values outcome ON td.outcome = outcome.property
-- JOIN first_category_values first ON td.first_category = first.property;