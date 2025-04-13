import { Suspense } from "react";
import BookInfo from "../../../../components/book-info";

export default async function BookDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading Book info</h1>}>
        <BookInfo id={id} />
      </Suspense>
    </div>
  );
}
