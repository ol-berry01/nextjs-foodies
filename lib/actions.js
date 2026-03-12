'use server'

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { saveMeal } from "./meals"

const isInvalidText = ( text ) => {
  return !text || text.trim() === ''
}

const shareMealHandler = async ( prevState, formData ) => {
  const meal = {
    title: formData.get( 'title' ),
    summary: formData.get( 'summary' ),
    instructions: formData.get( 'instructions' ),
    image: formData.get( 'image' ),
    creator: formData.get( 'name' ),
    creator_email: formData.get( 'email' )
  }

  if ( 
    isInvalidText( meal.title ) ||
    isInvalidText( meal.summary ) ||
    isInvalidText( meal.instructions ) ||
    isInvalidText( meal.creator ) ||
    isInvalidText( meal.creator_email ) ||
    ! meal.creator_email.includes( '@' ) ||
    ! meal.image || meal.image.size === 0
  ) {
    return {
      message: 'Invalid input - please check your entries.'
    }
  }

  await saveMeal( meal )
  revalidatePath( '/meals', 'layout' )

  redirect( '/meals' )
}

export { shareMealHandler }