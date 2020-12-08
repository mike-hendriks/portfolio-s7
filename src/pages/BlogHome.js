import React, { useEffect, useState } from "react";
import { RichText } from "prismic-reactjs";
import { Predicates } from "prismic-javascript";

import { Header, PostList, DefaultLayout, Menu } from "../components";
import NotFound from "./NotFound";
import { TextBlock } from "./../components/blog-home";
import { client } from "../utils/prismicHelpers";

/**
 * Blog homepage component
 */
const BlogHome = () => {
  const [prismicData, setPrismicData] = useState({
    homeDoc: null,
    blogPosts: null,
    menuDoc: null,
  });
  const [notFound, toggleNotFound] = useState(false);

  // Get the homepage and blog post documents from Prismic
  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const homeDoc = await client.getSingle("blog_home");
        const menuDoc = await client.getSingle("menu");
        const blogPosts = await client.query(
          Predicates.at("document.type", "post"),
          { orderings: "[my.post.date desc]" }
        );

        if (homeDoc) {
          setPrismicData({ homeDoc, blogPosts: blogPosts.results, menuDoc });
        } else {
          console.warn(
            "Blog Home document was not found. Make sure it exists in your Prismic repository"
          );
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    };

    fetchPrismicData();
  }, []);

  // Return the page if a document was retrieved from Prismic
  if (prismicData.homeDoc) {
    const homeDoc = prismicData.homeDoc;
    const menuDoc = prismicData.menuDoc;
    const blogPosts = prismicData.blogPosts;
    const title = RichText.asText(homeDoc.data.headline);
    return (
      <DefaultLayout seoTitle={title}>
        <Menu menuDoc={menuDoc}></Menu>
        <Header
          headline={homeDoc.data.headline}
          description={homeDoc.data.description}
        />
        {homeDoc.data.assignment_block_title[0].text && (
          <TextBlock
            title={homeDoc.data.assignment_block_title}
            content={homeDoc.data.assignment_block_content}
          />
        )}
        <div className="container textSection">
          {/* <h2>All assignments</h2> */}
          <div className="blog-main">
            <PostList posts={blogPosts} />
          </div>
        </div>
        {/* {homeDoc.data.reflection_block_title[0].text && (
          <TextBlock
            title={homeDoc.data.reflection_block_title}
            content={homeDoc.data.reflection_block_content}
          />
        )} */}
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
};

export default BlogHome;
