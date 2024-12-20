import React from "react";
import { Helmet } from "react-helmet";

const MetaHelmet = ({ metaData }) => {
  return (
    <Helmet>
      <title>
        {metaData?.meta_title
          ? metaData?.meta_title + " - Mach-International"
          : "Mach-International"}
      </title>
      <meta name="title" content={metaData?.meta_title} />
      <meta name="description" content={metaData?.meta_description} />
      <meta name="keyword" content={metaData?.meta_keyword} />
      <meta name="other_meta_tag" content={metaData?.other_meta_tag} />
    </Helmet>
  );
};

export default MetaHelmet;
