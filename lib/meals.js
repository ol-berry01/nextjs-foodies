import fs from 'node:fs'

import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql( 'meals.db' )

const getMeals = async () => {
  await new Promise( resolve => setTimeout( resolve, 2000 ) )

  return db.prepare( 'SELECT * FROM meals' ).all()
}

const getMeal = slug => {
  return db.prepare( 'SELECT * FROM meals WHERE slug = ?' ).get( slug )
}

const saveMeal = async  meal => {
  meal.slug = slugify( meal.title, { lower: true } )
  meal.instructions = xss( meal.instructions )

  const extension = meal.image.name.split( '.' ).pop()
  const fileName = `${ meal.slug }.${ extension }`
  
  const stream = fs.createReadStream( `public/images/${ fileName }` )
  const bufferedImage = await meal.image.arrayBuffer()

  stream.write( Buffer.from( bufferedImage ), error => {
    if ( error ) {
      throw new Error( 'Failed to save the image.' )
    }
  } )
}

export { getMeals, getMeal, saveMeal }