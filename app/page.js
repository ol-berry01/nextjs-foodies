import Link from "next/link";

import classes from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={ classes.header }>
        <div className={ classes.slideshow }></div>
        <div>
          <div className={ classes.hero }></div>
          <div className={ classes.cta }></div>
        </div>
      </header>
      <main>
      </main>
    </>
  );
}
