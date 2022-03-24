import Link from 'next/link'

const NextLink = (props) => {
  let { as, href } = props
  if (!as) {
    as = href
  }

  return (
    <Link as={as} {...props}>
      {props.children}
    </Link>
  );
}

NextLink.defaultProps = {
  href: "https://www.example.com",
  children: "Example Link"
}

export default NextLink;