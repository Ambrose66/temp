function scalePitch(pitch, min, max, height) {
  var scaledPitch = pitch - min
  return (scaledPitch / max) * height
}

export default scalePitch
