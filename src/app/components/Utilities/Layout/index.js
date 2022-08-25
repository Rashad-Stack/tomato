import { Footer, Header } from "../../Home";

export default function index({ children }) {
  return (
    <>
      <Header />
      <main className="h-full min-h-[93vh]">{children}</main>
      <Footer />
    </>
  );
}
