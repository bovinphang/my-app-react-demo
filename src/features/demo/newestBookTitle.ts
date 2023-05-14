interface Book {
  title: string;
  author: string;
  description?: string;
  publishedDate: Date;
}

export const newestBookTitle = (books: Book[]): string | undefined => {
  let newest: Book | undefined = undefined;
  for (const book of books) {
    if (!newest || book.publishedDate > newest.publishedDate) {
      newest = book;
    }
  }
  return newest?.title;
};

const books: Book[] = [
  {
    title: "TypeScript Handbook",
    author: "Microsoft",
    publishedDate: new Date("2018-08-01"),
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    publishedDate: new Date("2008-05-01"),
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    publishedDate: new Date("2008-08-11"),
  },
];

console.log(newestBookTitle(books)); // TypeScript Handbook
