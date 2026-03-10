import Image from 'next/image'
import Link from 'next/link'

import classes from './page.module.css'

const MealsSlug = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={ classes.image }>
          <Image fill />
        </div>
        <div className={ classes.headerText }>
          <h1>TITLE</h1>
          <p className={ classes.creator }>
            by <Link href={ `mailto:${ 'email'}` }>NAME</Link>
          </p>
          <p className={ classes.summary }>SUMMARY</p>
        </div>
      </header>
      <main>MealsSlug</main>
    </>
  )
}

export default MealsSlug