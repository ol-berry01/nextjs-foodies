import ImagePicker from '@/components/meals/image-picker'

import classes from './page.module.css'

const ShareMealPage = () => {
  const shareMealHandler = async ( formData ) => {
    'use server'

    const meal = {
      title: formData.get( 'title' ),
      summary: formData.get( 'summary' ),
      instructions: formData.get( 'instructions' ),
      image: formData.get( 'image' ),
      creator: formData.get( 'name' ),
      creator_email: formData.get( 'email' )
    }

    console.log( meal )
  }

  return (
    <>
      <header className={ classes.main }>
        <h1>Share your <span className={ classes.highlight }>favourite meal</span></h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={ classes.main }>
        <form className={ classes.form } action={ shareMealHandler }>
          <div className={ classes.row }>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" id="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' name='title' required />
          </p>
          <p>
            <label htmlFor="summary">Summary</label>
            <input id='summary' name='summary' required />
          </p>
          <p>
            <label htmlFor="instructions">instructions</label>
            <textarea 
              id='instructions' 
              name='instructions' 
              rows='5' 
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={ classes.actions }>
            <button type='submit'>Share Meal</button>
          </p>
        </form>
      </main>
    </>
  )
}

export default ShareMealPage