SELECT first.id as first_id
FROM testing_data td
JOIN first_category_values first ON td.first_category = first.property;