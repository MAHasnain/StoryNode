import axios from "axios";
import React, { useEffect, useState } from "react";
import { FooterComp, Header, StoryCard } from "../../components";
// import { Card } from "antd";
// const { Meta } = Card;

const Stories = () => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setStory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="p-1">
        <h2 className="text-3xl font-bold">Stories</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-10 mb-10">
          {story.slice(0, 12).map((story) => (
            // <Card
            //   hoverable
            //   style={{ width: 240 }}
            //   cover={<img draggable={false} alt="example" src={product.image} />}
            // >
            //   <Meta title={product.title} description={product.description} />
            //   <p>Price: {product.price}</p>
            // </Card>
            <StoryCard title={story.title} description={story.body} />
          ))}
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Stories;
