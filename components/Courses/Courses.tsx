import Link from "next/link"
import Image from "next/image"

export default function Courses() {
  return (
    <div
      className="relative bg-white pt-16 pb-32 overflow-hidden"
      data-test="courses"
    >
      <div className="relative" data-test="course-1">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2
                  className="text-3xl font-extrabold tracking-tight text-gray-900"
                  data-test="course-title"
                >
                  Webpack 5 Fundamentals
                </h2>
                <p
                  className="mt-4 text-lg text-gray-500"
                  data-test="course-description"
                >
                  Learn the latest version of Webpack along with other modern
                  tools like Babel, Jest, ESLint, &amp; Prettier.
                </p>
                <div className="mt-6">
                  <Link href="https://www.udemy.com/course/webpack-5-fundamentals/">
                    <a
                      target="_blank"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      rel="noreferrer"
                    >
                      Take Course
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/courses/webpack-5.png"
                alt="Webpack 5 Course Cover"
                width={580}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12" data-test="course-2">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2
                  className="text-3xl font-extrabold tracking-tight text-gray-900"
                  data-test="course-title"
                >
                  Learn Webpack 2 from scratch
                </h2>
                <p
                  className="mt-4 text-lg text-gray-500"
                  data-test="course-description"
                >
                  Learn how to build web applications with Webpack 2
                </p>
                <div className="mt-6">
                  <Link href="https://www.udemy.com/course/learn-webpack-2-from-scratch/">
                    <a
                      target="_blank"
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      rel="noreferrer"
                    >
                      Take Course
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/courses/webpack.png"
                alt="Webpack 2 Course Cover"
                width={580}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
