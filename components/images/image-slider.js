import Image from "next/image"

import burgerImg from '@/assets/burger.jpg'
import curryImg from '@/assets/curry.jpg'
import dumplingImg from '@/assets/dumplings.jpg'
import macncheeseImg from '@/assets/macncheese.jpg'
import pizzaImg from '@/assets/pizza.jpg'
import schnitzelImg from '@/assets/schnitzel.jpg'
import tomatoSaladImg from '@/assets/tomatosalad.jpg'

import classes from './image-slider.module.css'

const images = [
  {
    src: burgerImg, alt: 'A delicious burger with lettuce, tomato, and cheese',
  },
  {
    src: curryImg, alt: 'A bowl of curry with rice and vegetables',
  },
  {
    src: dumplingImg, alt: 'A plate of dumplings with dipping sauce',
  },
  {
    src: macncheeseImg, alt: 'A bowl of mac and cheese with a crispy topping',
  },
  {
    src: pizzaImg, alt: 'A slice of pizza with pepperoni and cheese',
  },
  {
    src: schnitzelImg, alt: 'A plate of schnitzel with potatoes and vegetables',
  },
  {
    src: tomatoSaladImg, alt: 'A bowl of tomato salad with basil and mozzarella',
  },
]

const ImageSlider = () => {
  const [ currentImageIndex, setCurrentImageIndex ] = useState( 0 )

  useEffect( () => {
    const interval = setInterval( () => {
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    }, 5000)

    return () => clearInterval( interval )
  }, [] )

  return (
    <div className={ classes.slideshow }>
      { images.map( ( image, index ) => (
        <Image 
          className={ index === currentImageIndex ? classes.active : '' }
          key={ index }
          src={ image.src }
          alt={ image.alt }
        />
      ) )}
    </div>
  )
}

export default ImageSlider