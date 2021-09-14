import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Carousel } from '.'
import { IImage } from 'types/shared/Image'

describe('Organisms: <Carousel /> component render tests', () => {
  test('Test case 1: should render Carousel correct number of images (actual)', () => {
    const images: Array<IImage> = [
      {
        _id: 'img-1',
        url: 'image-1.jpg'
      },
      {
        _id: 'img-2',
        url: 'image-2.jpg'
      },
      {
        _id: 'img-3',
        url: 'image-3.jpg'
      },
      {
        _id: 'img-4',
        url: 'image-4.jpg'
      }
    ]

    render(
      <Theme themeMode="light">
        <Carousel images={images} />
      </Theme>
    )

    const renderedImages = document.querySelectorAll('img')
    expect(renderedImages.length).toEqual(images.length + 1) // +1 for the current displayed image
  })
})
