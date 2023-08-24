const PageLink = ({ id, href, name }) => {
  return (
    <li key={id}>
      <a href={href} className="footer-link">
        {name}
      </a>
    </li>
  );
};

export default PageLink;
