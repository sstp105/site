import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Image } from 'components/atoms/Image'
import { IImage } from 'types/shared/Image'

const Slider = styled.div`
  margin: 20px 0;
  height: 550px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`

const Previews = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  overflow-x: scroll;
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }

  img {
    width: auto;
    height: 100%;
    margin-right: 15px;
    border-radius: 10px;
  }
  .active {
    opacity: 1;
  }
  .slide {
    opacity: 0.5;
  }
`

export interface ICarousel {
  images: Array<IImage>
}

export const Carousel: React.FC<ICarousel> = (props) => {
  const { images } = props

  const [curSlideIndex, setCurSlideIndex] = useState<number>(0)
  const indexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!indexRef.current) return

    indexRef.current.focus()
  }, [])

  const handleArrowKeyNavigation = (keyPressed: KeyboardEvent) => {
    const { key } = keyPressed
    if (!indexRef.current) {
      return
    }

    if (key === 'ArrowLeft' && curSlideIndex > 0) {
      setCurSlideIndex((prevIndex) => prevIndex - 1)
    } else if (key === 'ArrowRight' && curSlideIndex < images.length - 1) {
      setCurSlideIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <>
      <Slider>
        <Image src={images[curSlideIndex].url} alt="" variant="square" />
      </Slider>
      <Previews
        ref={indexRef}
        onKeyDown={handleArrowKeyNavigation as any}
        tabIndex={curSlideIndex}
      >
        {images.map((elem, index) => (
          <Image
            onClick={() => setCurSlideIndex(index)}
            key={elem.id}
            className={index === curSlideIndex ? 'active' : 'slide'}
            src={elem.url}
            alt=""
            variant="square"
          />
        ))}
      </Previews>
    </>
  )
}
