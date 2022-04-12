// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by follwing the xxxx.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        // src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/278224146_388706116203933_783508183665941260_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=109&_nc_ohc=6tUAdFlOrsoAX-bgYmC&edm=AIQHJ4wBAAAA&ccb=7-4&ig_cache_key=MjgxNDcxOTc2NjA1Nzc4NDYzMw%3D%3D.2-ccb7-4&oh=00_AT-C0yt4DIM6wVWCA119pB9R8-3Cs3QZiq37ZGjIbWh-zA&oe=625B9C39&_nc_sid=7b02f1"
        src="../images/honey.jpg"
      />
    </Layout>
  );
};

// step 3: Export your componet
export default IndexPage;
