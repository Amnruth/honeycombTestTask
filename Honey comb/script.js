function drag(event) {
  event.dataTransfer.setData("text", event.currentTarget.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function onDrop(event) {
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  const heading = draggedElement.innerText;

  const currentTarget = document.getElementById(event.currentTarget.id);
  if (currentTarget.querySelector(".subTextContainer")) {
    assignText(currentTarget.querySelector(".subTextContainer"), heading);
  } else {
    const newInsertableElement = document
      .getElementById("insertableData")
      .cloneNode(true);
    //--------------------Stylings
    newInsertableElement.style.display = "flex";
    assignText(newInsertableElement, heading);
    event.target.append(newInsertableElement);
  }
}
function assignText(element, text) {
  element.querySelector(".subTextHeader").innerText = text;
  element.querySelector(".subTextBody").innerText = "This is body of " + text;
}
