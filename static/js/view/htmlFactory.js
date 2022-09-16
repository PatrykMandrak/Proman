export const htmlTemplates = {
    board: 1,
    card: 2,
    status: 3
}

export const builderFunctions = {
    [htmlTemplates.board]: boardBuilder,
    [htmlTemplates.card]: cardBuilder,
    [htmlTemplates.status]: columnBuilder
};

export function htmlFactory(template) {
    if (builderFunctions.hasOwnProperty(template)) {
        return builderFunctions[template];
    }

    console.error("Undefined template: " + template);

    return () => {
        return "";
    };
}
//<button class="toggle-board-button" data-board-id="${board.id}">Show Cards</button>


//                <div class="board-column">
//                    <div class="board-column-title">New</div>
//                    <div class="board-column-content">
//                        <div class="card">
//                            <div class="card-remove"><i class="fas fa-trash-alt"></i></div>
//                            <div class="card-title">Card 1</div>
//                        </div>
//                        <div class="card">
//                            <div class="card-remove"><i class="fas fa-trash-alt"></i></div>
//                            <div class="card-title">Card 2</div>
//                        </div>
//                    </div>
//                </div>
function boardBuilder(board) {
    return `<div class="board-container">
                <section class="board">
                    <div class="board" data-board-id=${board.id}>${board.title}</div>
                    <button class="toggle-board-button" data-board-id="${board.id}">Show Cards</button>
                        <div class="board-columns" column-id="${board.id}">
                        </div>
                </section>
            </div>`;
}

//function cardBuilder(card) {
//    return `<div class="card" data-card-id="${card.id}">${card.title}</div>`;
//}

function columnBuilder() {
    return `<div class="board-column">
                    <div class="board-column-title">New</div>
                    <div class="board-column-content" status-id="1">
                    </div>
                </div>
                <div class="board-column">
                    <div class="board-column-title">In progress</div>
                    <div class="board-column-content" status-id="2">
                    </div>
                </div>
                <div class="board-column">
                    <div class="board-column-title">Testing</div>
                    <div class="board-column-content" status-id="3">
                    </div>
                </div>
                <div class="board-column">
                    <div class="board-column-title">Done</div>
                    <div class="board-column-content" status-id="4">
                    </div>
                </div>`;
}

function cardBuilder(card) {
    return `<div class="card">
                           <div class="card-remove"><i class="fas fa-trash-alt"></i></div>
                           <div class="card-title" data-card-id="${card.id}">${card.title}</div>
                        </div>`;
}

//    <div class="board-container">
//        <section class="board">
//            <div class="board-header"><span class="board-title">Board 1</span>
//                <button class="board-add">Add Card</button>
//                <button class="board-toggle"><i class="fas fa-chevron-down"></i></button>
//            </div>
//            <div class="board-columns">
//                <div class="board-column">
//                    <div class="board-column-title">New</div>
//                    <div class="board-column-content">
//                        <div class="card">
//                            <div class="card-remove"><i class="fas fa-trash-alt"></i></div>
//                            <div class="card-title">Card 1</div>
//                        </div>
//                        <div class="card">
//                            <div class="card-remove"><i class="fas fa-trash-alt"></i></div>
//                            <div class="card-title">Card 2</div>
//                        </div>
//                    </div>
//                </div>

