
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";


export const metadata = {
  title: "Admin: Facebook - Connect with friends",
  description: "Facebook is a social utility that connects people.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
