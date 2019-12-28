import React, { useEffect, useState } from 'react';
import { RichText } from 'prismic-reactjs';
import { DefaultLayout, Menu, SliceZone } from '../components';
import NotFound from './NotFound';
import { client } from '../utils/prismicHelpers';

const Leeswijzer = () => {
  const [prismicData, setPrismicData] = useState({ leeswijzerDoc: null, blogPosts: null, menuDoc: null});
  const [notFound, toggleNotFound] = useState(false);

  useEffect(() => {
    const fetchPrismicData = async () => {
      try {
        const leeswijzerDoc = await client.getSingle('leeswijzer');
        const menuDoc = await client.getSingle('menu');
  
        if (leeswijzerDoc) {
          setPrismicData({ leeswijzerDoc, menuDoc });
        } else {
          console.warn('Leeswijzer document was not found. Make sure it exists in your Prismic repository');
          toggleNotFound(true);
        }
      } catch (error) {
        console.error(error);
        toggleNotFound(true);
      }
    }

    fetchPrismicData();
  }, []);

  if (prismicData.leeswijzerDoc) {
    const leeswijzerDoc = prismicData.leeswijzerDoc;
    const menuDoc = prismicData.menuDoc;
    const title = RichText.asText(leeswijzerDoc.data.title);
    return (

      <DefaultLayout seoTitle={title}>
        <Menu menuDoc={menuDoc}></Menu>
        <SliceZone sliceZone={leeswijzerDoc.data.body} />
      </DefaultLayout>
    );
  } else if (notFound) {
    return <NotFound />;
  }
  return null;
}

export default Leeswijzer;
