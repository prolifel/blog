import markdownStyles from './markdown-styles.module.css'
import { MDXRemote } from 'next-mdx-remote'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import 'github-markdown-css/github-markdown-light.css'


export default function PostBody({ content }) {
  return (
    <div className={`max-w-2xl !mx-auto markdown-body`}>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]} // Allows us to have embedded HTML tags in our markdown
        linkTarget='_blank' // Append target _blank to links so they open in new tab/window
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={a11yDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
            ) : (
              <code className="md-post-code" {...props}>
                {children}
              </code>
            )
          },
        }}
      ></ReactMarkdown>
    </div>
  )
}
