import { CONTENT } from "./config/content.config";
import SectionBlock from "./components/Layout/SectionBlock";
import Services from "./components/Layout/Section/Services";
import CarouselProducts from "./components/CarouselProducts";
import ContactCta from "./components/Layout/ContactCta";
import TeamProfiles from "./components/TeamProfiles";

export default function Home() {
  const { BANNER } = CONTENT;

  const TitleBlock = () => {
    return (
      <div className="container py-14 sm:py-14">
        <div className="flex flex-col gap-3 text-center">
          <h1
            className="font-semibold text-shadow text-xl text-slate-900 shadow-[#e1e1e1] md:text-3xl"
          >
            {BANNER.TITLE}:
          </h1>
          <h2
            className="font-bold text-shadow text-4xl text-slate-900 sm:text-2xl md:text-5xl"
          >
            {BANNER.SUBTITLE}
          </h2>
          <p className="font-extralight text-slate-900 md:text-xl md:px-10 lg:px-40">{BANNER.DESCRIPTION}</p>
        </div>
      </div>
    )
  }

  const Hero = () => {
    return (
      <section className="section relative pb-0 bg-white">
        <div className="relative section-pattern bg-center mt-24">
          <div className="row justify-center max-w-auto m-auto h-full lg:max-w-auto">
            <div className="flex flex-col items-center justify-center h-full relative lg:flex-row">
              <TitleBlock />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <Hero />
      <div className="flex flex-col gap-24 pb-36 section-pattern">
        <SectionBlock
          title="What We Have done"
          subtitle="Elevate your digital presence with our comprehensive software solutions. We specialize in web and mobile development, coupled with expert UI/UX design services."
          className="bg-slate-900"
        >
          <div className="container">
            <CarouselProducts />
          </div>
        </SectionBlock>

        <SectionBlock
          title="What We Offer"
          subtitle="Elevate your digital presence with our comprehensive software solutions. We specialize in web and mobile development, coupled with expert UI/UX design services."
          className="bg-slate-900 pb-4"
        >
          <Services />
        </SectionBlock>

        <ContactCta />

        <SectionBlock
          title="Who We Are"
          subtitle="Elevate your digital presence with our comprehensive software solutions. We specialize in web and mobile development, coupled with expert UI/UX design services."
          className="bg-slate-900"
        >
          <TeamProfiles />
        </SectionBlock>
      </div>
    </>
  );
}
