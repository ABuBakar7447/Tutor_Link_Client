import Footer from "@/components/sheared/home/Footer";
import Navbar from "@/components/sheared/home/Navbar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tutor Link",
  description:
    "Welcome to TutorLink – find expert tutors for any subject near you.",
};
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
