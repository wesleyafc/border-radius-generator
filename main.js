const root = document.documentElement

function border(event) {
  newValue = event.value
  direction = event.id

  cssVariable = "--" + direction
  root.style.setProperty(cssVariable, newValue + "px")
}

function copy() {
  const topLeft = root.style.getPropertyValue("--top-left")
  const topRight = root.style.getPropertyValue("--top-right")
  const bottomleft = root.style.getPropertyValue("--bottom-left")
  const bottomRight = root.style.getPropertyValue("--bottom-right")

  let text = ""
  text =
    "border-radius: " +
    topLeft +
    " " +
    topRight +
    " " +
    bottomleft +
    " " +
    bottomRight
  text += ";"

  let textToCopy = document.createElement("input")
  textToCopy.value = text
  textToCopy.id = "copy"
  document.body.append(textToCopy)

  let copyInput = document.getElementById("copy")
  copyInput.select()
  document.execCommand("copy")
  copyInput.remove()

  prompt("You CSS Border radius is:", text)
}
