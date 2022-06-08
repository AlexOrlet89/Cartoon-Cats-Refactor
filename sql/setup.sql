-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists cats;

create table cats (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
    -- URL VARCHAR NOT NULL,
    -- year INT NOT NULL,
    -- lives INT NOT NULL
);

INSERT INTO cats (name, type) VALUES
('Felix', 'Tuxedo'),
('Garfield', 'Orange Tabby'),
('Duchess', 'Angora'),
('Stimpy', 'Manx'),
('Sylvester', 'Tuxedo'),
('Tigger', 'Tiger'),
('Hello Kitty', 'Angora'),
('Hobbes', 'Tiger');