import type { MDXComponents } from 'mdx/types'

import matter from 'gray-matter';

export function getMDXContentWithoutFrontmatter(content: string) {
  const { content: mdxContent } = matter(content);
  return mdxContent;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}