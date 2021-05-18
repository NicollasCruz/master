function addTask()
{
    let modal = document.querySelector("#modal");
    modal.style.display = "flex";

    let close = document.querySelector("#close-modal");

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });
}