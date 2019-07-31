SELECT first.id as first_id, second.id as second_id, third.id as third_id
FROM testing_data td
JOIN first_category_values first ON td.first_category = first.property
JOIN second_category_values second ON td.second_category = second.property
JOIN third_category_values third ON td.third_category = third.property;