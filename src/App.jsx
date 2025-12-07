import React, { useEffect, useState } from "react";
import { FooterComp, Header, StoryCard } from "./components/index.js";
import { Card } from "antd";
import axios from "axios";
const { Meta } = Card;

const App = () => {
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

      <main>
        <section>
          <div className="">
            <h2>Stories that spark ideas</h2>
            <p>
              Dive into a clean space built for thoughtful writing, honest
              perspectives, and creative expression.
            </p>
          </div>
        </section>
        <div className="p-1">
          <h2 className="text-3xl font-bold">Featured Stories</h2>
          <div className="flex flex-wrap gap-4 justify-center mt-10 mb-10">
            {story.slice(0, 4).map((story) => (
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
      </main>

      <FooterComp />
    </>
  );
};

export default App;
