/** @jsx jsx */
import { jsx } from "theme-ui";

const Page = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 7, my: 0 }}>
        This is a really dope note taking app.
      </h1>
    </div>
  </div>
);

export function getStaticProps() {
  // get data from CMS

  return {
    props: {
      content: {
        title: "This is my really nice app",
      },
    },
  };
}

export default Page;
