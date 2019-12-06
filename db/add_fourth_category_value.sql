DO
$$
BEGIN
EXECUTE
    format('INSERT INTO %I (reference_id, property) VALUES ($2, %L)', 'fourth_category_values_' || $1, $3);
END;
$$ LANGUAGE plpgsql;

-- OLD CODE REFACTORED
-- INSERT INTO fourth_category_values (reference_id, property)
-- VALUES ($1, $2);