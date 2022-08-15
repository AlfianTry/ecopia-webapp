import Footer from '@/components/footer';
import BlogSection from '@/components/home/blog-section';
import ContactSection from '@/components/home/contact-section';
import ExploreSection from '@/components/home/explore-section';
import HeaderSection from '@/components/home/header-section';
import ProductSection from '@/components/home/product-section';
import { Meta } from '@/layouts/Meta';
import { fetchAPI } from '@/lib/api';
import { Main } from '@/templates/Main';

const Index = ({ listsBlog }) => {
  return (
    <Main
      meta={
        <Meta
          title="Ecopia | Healthy Food Portal"
          description="Ecopia lebih dari sekedar marketplace di Indonesia yang fokus pada
          makanan sehat berkualitas. Ecopia juga menjadi sebuah one-stop-platform bagi mereka
          yang ingin mulai hidup sehat atau meningkatkan kualitas hidup. Secara bertahap,
          Ecopia ingin mengubah persepsi masyarakat Indonesia terhadap makanan sehat.
          Kami percaya bahwa makanan sehat dengan rasa enak dan harga murah bisa dinikmati oleh semua kalangan.
          Bahkan, kini semuanya bisa dijangkau hanya melalui smartphone."
        />
      }
    >
      <HeaderSection />
      <main>
        <ExploreSection />
        <ProductSection />
        <BlogSection listsBlog={listsBlog} />
        <ContactSection />
      </main>
      <Footer />
    </Main>
  );
};

export default Index;

export async function getStaticProps() {
  const lists = await fetchAPI('/articles');
  return {
    props: {
      listsBlog: lists,
    },
  };
}
