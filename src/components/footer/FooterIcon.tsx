import { Link } from "react-router-dom";

interface props {
  logo?: React.FC<{ size: number }>;
  size: number;
  url: string;
}

export const FooterIcon = (props: props) => {
  return (
    <Link
      to={`${props.url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link-button"
    >
      {props.logo ? (
        <props.logo size={props.size} />
      ) : (
        <svg
          className="social-link-alternate-image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      )}
    </Link>
  );
};

export default FooterIcon;
