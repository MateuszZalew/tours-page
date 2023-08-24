const SocialMediaLink = ({ id, href, name }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" className="nav-icon" rel="noreferrer">
        <i className={`fab fa-${name}`}></i>
      </a>
    </li>
  );
};

export default SocialMediaLink;
