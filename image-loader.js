export default function imageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/project' : '';
  return `${baseUrl}${src}`
}
