import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function OutivityDetail({ outivities }) {
  const router = useRouter();
  const { slug } = router.query;
  const outivity = outivities.find((outivity) => outivity.slug === slug);

  if (!outivity) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{outivity.title}</title>
      </Head>

      <main>
        <article>
          <ul>
            <li>
              <h2>{outivity.title}</h2>
              <Image
                src={outivity.image}
                alt={outivity.title}
                width={300}
                height={200}
              />
              <p>
                <strong>Location: </strong> {outivity.location}
              </p>
              <p>
                <strong>Description: </strong> {outivity.description}
              </p>
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
