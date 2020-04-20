import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import ContactForm from "../components/ContactForm";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <ContactForm />
    </Layout>
  );
};

export default injectIntl(Index);
