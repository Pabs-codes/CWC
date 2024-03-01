import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Services"
            paragraph="Ceylon Web Crafts offers a comprehensive suite of digital solutions tailored to elevate your online presence. From expert web development and mobile app design to strategic social media marketing and SEO, we specialize in driving digital success for businesses of all sizes. With over a decade of industry experience, our team delivers customized software solutions and captivating branding strategies that resonate with your audience. Trust us to transform your digital landscape and unlock your business's full potential."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
