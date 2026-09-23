document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.className = "wrap-toggle";
    button.type = "button";
    button.textContent = "折り返し ON";

    pre.parentNode.insertBefore(button, pre);
    pre.classList.add("code-wrap");

    button.addEventListener("click", () => {
      const wrapped = pre.classList.toggle("code-wrap");
      pre.classList.toggle("code-nowrap", !wrapped);
      button.textContent = wrapped ? "折り返し ON" : "折り返し OFF";
    });
  });
});
