import Link from "next/link";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home-뉴욕 타임즈 베스트셀러",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev/list";

async function getBooks() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}s`);
  const json: BookListsResponse = await response.json();
  return json;
}

export default async function HomePage() {
  const books: BookListsResponse = await getBooks();
  return (
    <div>
      <h1 className={styles.title}>New york times bestseller</h1>
      <ul className={styles.list}>
        {books.results.map((book: BookList) => (
          <li key={book.list_name_encoded} className={styles.listItem}>
            <Link href={`/list/${book.list_name_encoded}`}>
              {book.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
