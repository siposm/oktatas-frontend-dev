let ul = document.querySelector('ul')

delegate(ul, 'click', 'li a', handleClick)

function handleClick (e) {
    if (e.shiftKey) {
        e.preventDefault()
        console.log(this.href)
    }
}

function delegate(parent, type, selector, fn) {

    function delegatedFunction(e) {
      const handlerElement = this
      const sourceElement = e.target
  
      const closestElement = sourceElement.closest(selector)
      if (handlerElement.contains(closestElement)) {
        const delegatedElement = closestElement
        fn.call(delegatedElement, e)
      }
    }
  
    parent.addEventListener(type, delegatedFunction)
}

