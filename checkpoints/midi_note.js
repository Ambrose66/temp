import useFitText from "use-fit-text";

const Note = (props) => {
  const { fontSize, ref } = useFitText();

  const onClick = () => {
    console.log('object')
  }

  return (
      <div
        draggable
        ref={ref}
        style={{
          fontSize,
          position: 'absolute',
          width: props.length*props.xScale,
          height: 50,
          bottom:props.y,
          left:props.x*props.xScale,
          backgroundColor: 'blue',
          color: 'orange',
          cursor: 'grab'
        }}
        onClick={onClick}
      >
        {props.text}
      </div>
  )
}

export default Note
