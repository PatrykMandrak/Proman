import data_manager


def get_card_status(status_id):
    """
    Find the first status matching the given id
    :param status_id:
    :return: str
    """
    status = data_manager.execute_select(
        """
        SELECT * FROM statuses s
        WHERE s.id = %(status_id)s
        ;
        """
        , {"status_id": status_id})

    return status


def get_boards():
    """
    Gather all boards
    :return:
    """
    # remove this code once you implement the database
    # return [{"title": "board1", "id": 1}, {"title": "board2", "id": 2}]


    return data_manager.execute_select(
        """
        SELECT * FROM boards
        ;
        """
    )


def get_cards_for_board(board_id):
    matching_cards = data_manager.execute_select(
        """
        SELECT * FROM cards
        WHERE cards.board_id = %(board_id)s
        ;
        """
        , {"board_id": board_id})

    return matching_cards


def add_new_board(board_title):
    data_manager.execute_select("""
        INSERT INTO boards(title)
        VALUES (%(board_title)s)
        ;
        """, {"board_title": board_title}, True, False)


def add_new_board1(cursor, data):
    cursor.execute(
        sql.SQL("""
        INSERT INTO boards(title)
        VALUES ({title})
        """).format(
            title=sql.Literal(data[0]),
        )
    )