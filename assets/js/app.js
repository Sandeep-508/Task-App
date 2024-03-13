let input = document.querySelector(".input");
let add_task = document.querySelector(".add_task");
let card = document.querySelector(".card");

add_task.addEventListener("click", () => {
    if (input.value !== "") {
        let to_do_item = document.createElement("div");
        to_do_item.classList.add("to_do_item", "d-flex", "align-items-start", "flex-column");

        let items = document.createElement("div");
        items.classList.add("w_h_changes", "mt-2", "d-flex", "align-items-center", "justify-content-between", "p-4", "hover_effect");

        let text = document.createElement("h4");
        text.classList.add("text-wrap");
        text.innerHTML = input.value;

        items.appendChild(text);

        let content = document.createElement("div");
        content.classList.add("d-flex", "align-items-center", "gap-3");

        let checkbox = document.createElement("input");
        checkbox.classList.add("check");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", (event) => {
            text.style.color = "black";
            if (event.target.checked) {
                text.style.textDecoration = "line-through";
                text.style.color = "#808080"
            } else {
                text.style.textDecoration = "none";
            }
        });

        let image = document.createElement("img");

        image.src = "data:image/svg+xml,<svg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18V6H18V4H14V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H6C5.46957 0 4.96086 0.210714 4.58579 0.585786C4.21071 0.960859 4 1.46957 4 2V4H0V6H2V18ZM6 2H12V4H6V2ZM5 6H14V18H4V6H5Z' fill='black' /></svg>";

        image.addEventListener("click", () => {
            localStorage.setItem("item", `${input.value}`);
            items.remove();
        });

        content.appendChild(checkbox);
        content.appendChild(image);
        items.appendChild(content);
        card.appendChild(items);
        input.value = "";
    }
});
