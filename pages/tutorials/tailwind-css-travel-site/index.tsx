import Head from "next/head"
import Layout from "@/components/Layout"
import { getAllPostsDesc } from "@/utils/mdxUtils"
import PreviewCard from "@/components/Posts/PreviewCard"
import PageHeader from "@/components/PageHeader"

let pageTitle = "Tailwind CSS Travel Site"
let pageDescription = ""
let seoTitle = "Tailwind CSS Travel Site | How To Code"
let seoDescription =
  "A tutorial that teaches how to build a travel site landing page with Tailwind CSS"

export default function Home({ allPosts }) {
  const filteredPosts = allPosts.filter((post) =>
    post.tags.includes("tailwind-css-travel-site")
  )

  return (
    <Layout>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <main className="py-12 lg:py-20">
        <article className="max-w-6xl mx-auto px-3">
          <PageHeader title={pageTitle} description={pageDescription} />
          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            data-test="articles-section"
          >
            {filteredPosts.map((post, index) => (
              <div className="col-span-1" key={index}>
                <PreviewCard post={post} />
              </div>
            ))}
          </section>
        </article>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPostsDesc([
    "title",
    "date",
    "slug",
    "description",
    "hero",
    "tags",
  ])

  return {
    props: { allPosts },
  }
}
