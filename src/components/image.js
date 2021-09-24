import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Astro() {
 return (
   <StaticImage
     src="../images/gatsby-astronaut.png"
     alt="A dinosaur"
     placeholder="blurred"
     width={200}
     height={200}
   />
 )
}
export default Astro
