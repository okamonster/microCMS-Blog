import Link from "next/link";
import { client } from "../libs/client";
import { Blog } from "../src/types/blog";
//import styles from "../styles/Home.module.css";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

type Props = {
  blog: Array<Blog>;
};

export default function Home({ blog }: Props) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </div>
  );
}
