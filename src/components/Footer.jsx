import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="copyright">
        &copy; {new Date().getFullYear()} {"\u2022"} Dakouri M. Kobri
      </p>
    </footer>
  );
}
