DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL (10, 2) NOT NULL,
    cover VARCHAR(50) NULL
);

-- INSERT INTO books
-- VALUES
--     (1, 'Sample Book', 'This is a test description for the sample book.', 'sample.jpg');

-- ALTER TABLE books
-- ADD COLUMN price INT NOT NULL;

-- DELETE FROM books 
-- WHERE id BETWEEN 2 AND 10;