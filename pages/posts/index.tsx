import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Footer"
import { getAllPosts } from "../../utils/mdxUtils"
import PreviewCard from "@/components/Posts/PreviewCard"
import PageHeader from "@/components/PageHeader"

let pageTitle = "Articles"
let pageDescription = ""
let seoTitle = "Articles | How To Code"
let seoDescription =
  "How to Code is a blog for web developers that focuses on teaching web development through articles, books, courses and tutorials."

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Head>

      <Header />

      <main className="py-12 lg:py-20">
        <article className="max-w-6xl mx-auto px-3">
          <PageHeader title={pageTitle} description={pageDescription} />
          <section
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            data-test="articles-section"
          >
            {allPosts.map((post, index) => (
              <div className="col-span-1" key={index}>
                <PreviewCard post={post} />
              </div>
            ))}
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
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
