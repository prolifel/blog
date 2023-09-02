import markdownStyles from './markdown-styles.module.css'
import { MDXRemote } from 'next-mdx-remote'

export default function PostBody({ content }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <MDXRemote {...content} />
    </div>
  )
}
