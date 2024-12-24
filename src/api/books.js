const booksUrl = 'http://localhost:3030/data/books';

export async function getAllBooks() {
    const response = await fetch(`${booksUrl}`);
    const books = await response.json();
    return books;
}

export async function getOneBook(bookId) {
    const response = await fetch(`${booksUrl}/${bookId}`);
    const book = await response.json();
    return book;
}
