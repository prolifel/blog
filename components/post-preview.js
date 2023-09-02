import { usePreview } from '../lib/sanity'
import { postQuery } from '../lib/queries'
import Post from './post'

export default function PostPreview({ data }) {
  const slug = data?.post?.slug
  const previewData = usePreview(null, postQuery, { slug })

  let prop = data
  if (previewData !== undefined) {
    previewData.mdxSource = data.mdxSource
    prop = previewData
  }

  return <Post data={prop} preview />
}
