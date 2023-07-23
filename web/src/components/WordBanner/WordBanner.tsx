import { useEffect, useState } from 'react'

import { Responsitivity } from 'src/services/responsitivity'

interface Props {
  words: Array<string>
  cssheight?: string
  cssColor?: string
}

const WordBanner = ({ words, cssheight, cssColor }: Props) => {
  const r = new Responsitivity(useState())
  const id = words.toString() + Math.random()
  const maxScrollY = (words.length + 1) * 100
  const heightFromTopToStartAnimation = 1400
  useEffect(() => {
    const thisElement = document.getElementById(id)
    cssColor
      ? (thisElement.style.color = cssColor)
      : (thisElement.style.color = `color: var(--dark)`)
    if (cssheight) {
      thisElement.style.height = cssheight
      thisElement.style.fontSize = `calc(${cssheight} - 3.5rem)`
    } else {
      thisElement.style.height = 'var(--large-spacing)'
      thisElement.style.fontSize = 'calc(var(--large-spacing) - 3.5rem)'
    }
    document
      .getElementById('paralax-wrapper')
      .addEventListener('scroll', () => {
        const elementToTop = thisElement.getBoundingClientRect().top
        if (
          elementToTop <= heightFromTopToStartAnimation &&
          elementToTop > -100
        ) {
          const bannerScrollPosition =
            elementToTop / (heightFromTopToStartAnimation / maxScrollY)
          thisElement.style.marginLeft = `-${bannerScrollPosition + 50}vw`
        } else if (elementToTop <= heightFromTopToStartAnimation) {
          thisElement.style.marginLeft = `-${maxScrollY}vw`
        } else {
          thisElement.style.marginLeft = '0vw'
        }
      })
  }, [])

  return (
    <>
      {r.responsitivity() === '-desktop' ? (
        <div id={id} className="page-banner">
          {words.map((word) => {
            return (
              <h1
                className={`banner-word${r.responsitivity()}`}
                key={word + id}
              >
                {word}
              </h1>
            )
          })}
        </div>
      ) : (
        <div id={id} className="page-banner"></div>
      )}
    </>
  )
}

export default WordBanner
