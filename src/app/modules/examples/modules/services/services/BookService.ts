import {Book} from '../core/Book';

const BOOKS: Book[] = [
  {id: 1, title: 'Book_1', author: 'Author_1'},
  {id: 2, title: 'Book_2', author: 'Author_2'},
];

export class BookService {
  getOne() {}
  getMany() {
    return BOOKS;
  }
  update(book: Book) {}
  create(book: Book) {}
  delete(id: number) {}
}
