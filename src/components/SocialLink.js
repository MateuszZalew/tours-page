const SocialLink = ({ href, name, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={itemClass} rel="noreferrer">
        <i className={`fab fa-${name}`}></i>
      </a>
    </li>
  );
};

export default SocialLink;
