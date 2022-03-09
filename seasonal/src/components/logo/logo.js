import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";

export function Logo() {
  return (
    <Link to="/home">
      <h1 className={css.logo}>nourish.</h1>
    </Link>
  );
}
