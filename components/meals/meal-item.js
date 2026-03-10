import Image from 'next/image'

import classes from './meal-item.module.css'

const MealItem = () => {
  return (
    <article className={ classes.meal }>
      <header>
        <div className={ classes.image }>
          <Image src={ image } alt={ title } fill />
        </div>
        <div className={ classes.headerText }>
          <h2>{ title }</h2>
          <p>by { creator }</p>
        </div>
      </header>
    </article>
  )
}

export default MealItem