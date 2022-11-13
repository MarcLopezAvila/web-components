import React, { useState } from 'react'

interface Props {
  initial?: string
  title?: string
}

function App({ initial = '0', title = 'Counter' }: Props) {
  const [count, setCount] = useState(Number(initial));

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const nextCount = count + 1;
    setCount(nextCount);

    const event = new CustomEvent('add-count', {
      bubbles: true,
      composed: true,
      detail: nextCount
    })
    e.target.dispatchEvent(event);
  }

  return (
    <div>
      <h4
        // @ts-ignore
        part="title"
      ><slot name="title-slot">{title}</slot></h4>
      <div>
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
