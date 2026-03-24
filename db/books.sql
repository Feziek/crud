DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cover VARCHAR(50) NULL
);

-- INSERT INTO books
-- VALUES
--     (1, 'Sample Book', 'This is a test description for the sample book.', 'sample.jpg');