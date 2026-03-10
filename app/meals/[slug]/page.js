import Image from 'next/image'
import Link from 'next/link'

import { getMeal } from '@/lib/meals'

import classes from './page.module.css'

const MealDetailsPage = () => {
  const meal = getMeal()

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
      <main>
        <p className={ classes.instructions } dangerouslySetInnerHTML={ {
          __html: '...'
        } }></p>
      </main>
    </>
  )
}

export default MealDetailsPage