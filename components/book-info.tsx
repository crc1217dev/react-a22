import Link from "next/link";
import styles from "../styles/detail.module.css";

async function getBooks(title: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${title}`
  );
  return response.json();
}

export default async function BookInfo({ id }: { id: string }) {
  const books: BookListDetailResponse = await getBooks(id);
  return (
    <>
      <ul className={styles.list}>
        {books.results.books.map((book: Book) => (
          <li key={book.title} className={styles.listItem}>
            <a href={`${book.amazon_product_url}`}>
              <img
                src={book.book_image}
                alt={book.title}
                className={styles.listImage}
              />
              <h3 className={styles.title}>{book.title}</h3>
              <p className={styles.author}>{book.author}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
