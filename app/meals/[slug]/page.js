import Image from 'next/image'
import Link from 'next/link'

import { getMeal } from '@/lib/meals'

import classes from './page.module.css'

const MealDetailsPage = ( { params } ) => {
  const meal = getMeal( params.slug )

  meal.instructions = meal.instructions.replaceAll( /\n/g, '<br>' )

  return (
    <>
      <header className={classes.header}>
        <div className={ classes.image }>
          <Image src={ meal.image } alt={ meal.title } fill />
        </div>
        <div className={ classes.headerText }>
          <h1>{ meal.title }</h1>
          <p className={ classes.creator }>
            by <Link href={ `mailto:${ meal.creatorEmail }` }>{ meal.creator }</Link>
          </p>
          <p className={ classes.summary }>{ meal.summary }</p>
        </div>
      </header>
      <main>
        <p className={ classes.instructions } dangerouslySetInnerHTML={ {
          __html: meal.instructions
        } }></p>
      </main>
    </>
  )
}

export default MealDetailsPage