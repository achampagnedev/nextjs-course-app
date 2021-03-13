/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";

const Page = ({ note }) => {
  const router = useRouter();

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title}</h1>
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.API_URL}/api/notes/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, {
      Location: `notes`,
    });

    res.end();

    return {
      props: {},
    };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
}

export default Page;
