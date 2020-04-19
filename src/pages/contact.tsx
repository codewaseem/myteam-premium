import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      contact us
    </Layout>
  );
};

export default injectIntl(Index);
