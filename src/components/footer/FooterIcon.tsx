import { Link } from "react-router-dom";

interface props {
  logo: React.FC<{ size: number }>;
  size: number;
  url: string;
}

export const FooterIcon = (props: props) => {
  const Logo = props.logo;

  return (
    <Link
      to={`${props.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link-button`}
    >
      <Logo size={props.size} />
    </Link>
  );
};

export default FooterIcon;
