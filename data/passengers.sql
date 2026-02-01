
CREATE TABLE titanic_passengers (
    passenger_id SERIAL PRIMARY KEY,
    name TEXT,
    gender TEXT,
    age NUMERIC,
    class TEXT,
    embarked TEXT,
    country TEXT,
    fare NUMERIC,
    survived BOOLEAN
);
