import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import { homePageGallery } from '../../constants'

const GallerySection = () => {
  return (
      <>
          <ImageGallery items={homePageGallery} />
      </>
  )
}

export default GallerySection