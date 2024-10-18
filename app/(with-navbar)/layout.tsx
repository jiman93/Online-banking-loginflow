import Navbar from "../components/navbar/navbar";

export default function withNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
