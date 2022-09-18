import {dataHandler} from "../data/dataHandler.js";
import {htmlFactory, htmlTemplates} from "../view/htmlFactory.js";
import {domManager} from "../view/domManager.js";
import {cardsManager} from "./cardsManager.js";

export let boardsManager = {
    loadBoards: async function () {
        const boards = await dataHandler.getBoards();
        domManager.addEventListener(
            `.add-board-button`,
            "click",
            addBoardButtonHandler
        );
        domManager.destroyBoard();
        for (let board of boards) {
            const boardBuilder = htmlFactory(htmlTemplates.board);
            const content = boardBuilder(board);
            domManager.addChild("#root", content);
            domManager.addEventListener(
                `.toggle-board-button[data-board-id="${board.id}"]`,
                "click",
                showHideButtonHandler
            );
        }
    },
};

function addBoardButtonHandler() {
    var my_text=prompt('Provide new board name: ');
    dataHandler.createNewBoard(my_text);
    setTimeout(boardsManager.loadBoards(),1000);
}

function showHideButtonHandler(clickEvent) {
    const boardId = clickEvent.target.dataset.boardId;
    const btn = document.querySelector(`.toggle-board-button[data-board-id="${boardId}"]`);
    const columns = document.querySelector(`.board-columns[column-id="${boardId}"]`);
    if (columns.style.display == 'flex') {
        btn.textContent = 'Show Cards';
        columns.style.display = 'none';
    } else if (columns.style.display == 'none')  {
        btn.textContent = 'Hide Cards';
        columns.style.display = 'flex';
    } else {
        const columnBuilder = htmlFactory(htmlTemplates.status);
        const content = columnBuilder();
        domManager.addChild(`.board-columns[column-id="${boardId}"]`, content);
        cardsManager.loadCards(boardId);
        btn.textContent = 'Hide Cards';
        columns.style.display = 'flex';
    }
}

//btn.onclick = function () {
//  if (targetDiv.style.display !== "none") {
//    targetDiv.style.display = "none";
//  } else {
//    targetDiv.style.display = "block";
//  }