import FooterSeven from "@/components/layout/footers/FooterSeven";
import Header1 from "@/components/layout/header/Header1";
import Hero1 from "@/components/blogs/Hero1";
import BlogList3 from "@/components/blogs/BlogList3";

export const metadata = {
  title: "blogs || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <div className="background_header"></div>
        <Header1 />
        <Hero1 />
        <BlogList3 />
        <FooterSeven />
      </main>
    </>
  );
}
