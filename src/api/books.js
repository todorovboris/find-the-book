const booksUrl = 'http://localhost:3030/jsonstore/books';

export async function allBooks() {
    const response = await fetch(`${booksUrl}/details`);
    const books = await response.json();
    return books;
}
