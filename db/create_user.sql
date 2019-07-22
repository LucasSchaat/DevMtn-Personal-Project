INSERT INTO users (username, password, employee_id)
VALUES ($1, $2, $3)

RETURNING *;