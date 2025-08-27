export function useRipple(evt?: any): any {
  const el = evt.currentTarget
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) {
    time = 1.2
  }

  const effectContent = document.createElement('div')

  effectContent.className = 'pr-ripple-content'

  const effect = document.createElement('div')

  effect.className = 'pr-ripple'
  /*if (solid) {
          effect.classList.add('pr-ripple-solid')
      }*/
  effect.style.transition = `all ${time}s ease`

  effect.style.left = `${x}px`
  effect.style.top = `${y}px`

  effectContent.appendChild(effect)

  el.appendChild(effectContent)

  effect.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = `1`

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt: any) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = '0'
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400,
    )

    el.removeEventListener('mouseup', removeEffect)
    el.removeEventListener('mouseleave', removeEffect)
  }

  el.addEventListener('mouseup', removeEffect)
  el.addEventListener('mouseleave', removeEffect)
}

export function rippleReverse(evt: any) {
  const el = evt.target
  const offset = el.getBoundingClientRect()
  const x = evt.clientX - offset.left
  const y = evt.clientY - offset.top

  let time = 0.6

  if (el.clientWidth > 150) {
    time = 1.2
  }

  const effectContent = document.createElement('div')

  effectContent.className = 'pr-ripple-content'

  const effect = document.createElement('div')

  effect.className = 'pr-ripple-invert'
  // effect.style.transition = `all ${time}s ease`

  effect.style.left = `${x}px`
  effect.style.top = `${y}px`
  effect.style.width = `${el.clientWidth * 2.5}px`
  effect.style.height = `${el.clientWidth * 2.5}px`
  effect.style.opacity = '0'

  effectContent.appendChild(effect)

  el.appendChild(effectContent)

  setTimeout(() => {
    effect.style.width = '0'
    effect.style.height = '0'
    effect.style.opacity = '0.5'
  }, 1)

  let noTime = false
  setTimeout(() => {
    noTime = true
  }, 300)

  function removeEffect(evt: any) {
    effect.style.transition = `all 0.${time * 600}s ease`
    setTimeout(
      () => {
        effect.style.opacity = '0'
        setTimeout(() => {
          el.removeChild(effectContent)
        }, time * 300)
      },
      noTime ? 0 : time * 400,
    )

    evt.target.removeEventListener('mouseup', removeEffect)
    evt.target.removeEventListener('mouseleave', removeEffect)
  }

  evt.target.addEventListener('mouseup', removeEffect)
  evt.target.addEventListener('mouseleave', removeEffect)
}
