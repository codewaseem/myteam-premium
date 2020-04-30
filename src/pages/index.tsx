import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import loadable from "@loadable/component";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const HeroContent = loadable(() => import("~/components/HeroContent"));
const Team = loadable(() => import("~/components/Team"));
const Testimonial = loadable(() => import("~/components/Testimonial"));
const ContactUs = loadable(() => import("~/components/ContactUs"));

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <HeroContent />
      <Team />
      <Testimonial />
      <ContactUs />
    </Layout>
  );
};

export default injectIntl(Index);
