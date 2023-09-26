"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Search from "./Search";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  let menuRef = useRef();

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    let navbarHanlder = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", navbarHanlder);

    return () => {
      document.removeEventListener("mousedown", navbarHanlder);
    };
  }, []);
  return (
    <div className="navbar_section container-fluid">
      <div className="container">
        <nav className="navbar" ref={menuRef}>
          <div className="logo">
            <Link href={`/`} className="link_logo">
              ybon.dev
            </Link>
          </div>
          <ul className={open ? "active" : "inactive"}>
            <li>
              <Link href={`/`} className="link_item">
                home
              </Link>
            </li>
            <li>
              <Link href={`/movie`} className="link_item">
                movies
              </Link>
            </li>
            <li>
              <Link href={`/tv`} className="link_item">
                tv-series
              </Link>
            </li>
            <li>
              <Search onSubmit={handleSearchSubmit} />
            </li>
          </ul>
          <label htmlFor="checkbox" onClick={() => setOpen(!open)}>
            <FaBars className="fa_icon" />
          </label>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
