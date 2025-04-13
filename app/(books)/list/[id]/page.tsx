import { Suspense } from "react";
import BookInfo from "../../../../components/book-info";

export default async function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h3>Book detail page</h3>
      <Suspense fallback={<h1>Loading Book info</h1>}>
        <BookInfo id={id} />
      </Suspense>
      {/* <h4>Videos</h4>
      <Suspense fallback={<h1>Loading Book videos</h1>}>
        <BookVideos id={id} />
      </Suspense> */}
    </div>
  );
}
