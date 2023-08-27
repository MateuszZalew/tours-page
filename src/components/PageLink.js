const PageLink = ({ href, name, childClass }) => {
  return (
    <li>
      <a href={href} className={childClass}>
        {name}
      </a>
    </li>
  );
};

export default PageLink;
