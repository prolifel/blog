import { lazy } from 'react'
import { PreviewSuspense } from 'next-sanity/preview'
import { postQuery, postSlugsQuery } from '../../lib/queries'
import { getClient, overlayDrafts, sanityClient } from '../../lib/sanity.server'
import Post from '../../components/post'
import { serialize } from 'next-mdx-remote/serialize'

const PostPreview = lazy(() => import('../../components/post-preview'))

export default function PostPage({ preview, data }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <PostPreview data={data} />
      </PreviewSuspense>
    )
  }

  return <Post data={data} />
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  })

  // convert content from md to html
  const mdxSource = await serialize(post.content)

  return {
    props: {
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
        mdxSource
      },
      preview,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
