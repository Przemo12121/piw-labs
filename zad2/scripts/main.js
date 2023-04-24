"use strict"

const todoList = "todo-list";
const todoInput = "todo-input";
const todoItem = "todo-item";
const todoItemCompleted = "todo-item completed";
const todoItemTitle = "todo-item-title";
const todoItemTitleFinished = "todo-item-title finished";
const todoItemContent = "todo-item-content";
const todoItemContentFinished = "todo-item-content finished";
const revertButton = "revert-button";
const inactive = "inactive";
const todoItemFinished = "todo-item-finished";

const stash = {
    index: -1,
    node: null
};

function add() {
    const input = document.getElementById(todoInput);
    if (!input.value) {
        return;
    }

    const list = document.getElementById(todoList);
    const item = createItem(input.value, list.children.length);
    list.appendChild(item);
};

function createItem(text, index) {
    const finished = document.createElement("p");
    finished.className = todoItemFinished;

    const div = document.createElement("div");
    div.className = todoItem;

    const title = document.createElement("p");
    title.className = todoItemTitle;
    title.textContent = "Todo:";

    const content = document.createElement("p");
    content.className = todoItemContent;
    content.textContent = text;
    
    const button = document.createElement("button");
    button.textContent = "X";
    button.onclick = (event) => {
        event.stopPropagation();
        showModal(div, index);
    }

    const complete = (event) => {
        event.stopPropagation();

        div.className = todoItemCompleted;
        div.onclick = revertComplete;
        content.className = todoItemContentFinished;
        title.className = todoItemTitleFinished;

        finished.textContent = `Finished at ${moment().format('DD.MM.YYYY HH:mm')}`;
    }
    const revertComplete = (event) => {
        event.stopPropagation()

        div.className = todoItem;
        content.className = todoItemContent;
        title.className = todoItemTitle;
        div.onclick = complete;
        finished.textContent = "";
    }
    div.onclick = complete;

    div.appendChild(button);
    div.appendChild(title);
    div.appendChild(content);
    div.appendChild(finished);

    return div;
};

function showModal(div, index) {
    $(`#modal`).css("display", "flex");
    $(`#modal div button`).click(function () {
        $(`#${todoList} div:eq(${index})`).remove();

        stash.index = index;
        stash.node = div;

        $(`#${revertButton}`).removeClass(inactive);
    });
};

function hideModal() {
    $(`#modal`).css("display", "none");
    $(`#modal div button`).unbind("click");
}

function revertRemoval() {
    if (!stash.node) {
        return;
    }

    const list = $(`#${todoList}`)[0]
    $(`#${revertButton}`).addClass(inactive);

    if (list.childNodes[stash.index]) {
        list.childNodes[stash.index].after(stash.node);
    } else {
        list.appendChild(stash.node);
    }

    stash.index = -1;
    stash.node = null;
};