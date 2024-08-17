import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>This is public page. You can customize this page later.</h1>
      <Link href={`/admin`}>Click here to go the admin page</Link>
    </div>
  );
}
