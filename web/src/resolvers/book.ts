const BOOKS = [
  {
		id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
		id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export const books = {
  Query: {
    books: () => BOOKS,
  },
};
