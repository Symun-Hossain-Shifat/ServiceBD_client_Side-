import HomeBanner from "@/Components/Banner";
import FeaturedServices from "@/Components/FeaturedServices";
import WhyChooseUs from "@/Components/Choose";
import FaqSection from "@/Components/FAQ";
import CustomerReviews from "@/Components/Review";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <FeaturedServices />
      <WhyChooseUs />
      <CustomerReviews />
      <FaqSection />
    </>
  );
}
