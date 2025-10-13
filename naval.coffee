# https://ronlinu.github.io/battleship

game =
    winner : ''         # winner name, also flag for end of game
    previousCode : ''   # for computer to remember previous hit

shipTemplate =
    destroyer:
        code : 'D'
        size : 5
    cruiser:
        code : 'C'
        size : 4
    navette:
        code : 'N'
        size : 3
    submarine:
        code : 'S'
        size : 2

player   = JSON.parse JSON.stringify shipTemplate      # player's ships
computer = JSON.parse JSON.stringify shipTemplate      # computer's ships

# ---------------------------------------------------------------------

do ->    # Create player board
    board = document.getElementById 'boardPlayer'

    for y in [1..10]
        for x in [1..10]
            square = document.createElement('div')
            square.className = 'squarePlayer'
            square.dataset.x = x
            square.dataset.y = y
            square.innerHTML = 'X'
            square.style.color = 'lightcyan'    # hide the X

            square.addEventListener 'click', (event) ->
                if game.winner then return
                clickedSquare = event.currentTarget
                placePlayerShip clickedSquare

            board.appendChild(square)

# --------------------------------------

do ->    # Create computer board
    board = document.getElementById 'boardComputer'

    for y in [1..10]
        for x in [1..10]
            square = document.createElement('div')
            square.className = 'squareComputer'
            square.dataset.x = x
            square.dataset.y = y
            square.innerHTML = 'X'
            square.style.color = 'lightcyan'    # hide the X

            square.addEventListener 'click', (event) ->
                if game.winner then return
                clickedSquare = event.currentTarget
                shootComputerBoard clickedSquare

            board.appendChild(square)

# --------------------------------------

do ->   # Place computer ships
    getRandomCoord = (ship) ->
        # Generate random coordinates/direction that FITS ship size
        loop
            x = x1 = Math.floor(Math.random() * 10) + 1
            y = y1 = Math.floor(Math.random() * 10) + 1
            direction = Math.floor(Math.random() * 2) + 1
            if direction == 1 then x1 = x+ship.size-1 else y1 = y+ship.size-1
            if x1 <= 10 and y1 <= 10 then break

        return {x: x, y: y, direction: direction}

    # -----------------------------
    getSquareContent = (x, y) ->
        square = document.querySelector(".squareComputer[data-x='#{x}'][data-y='#{y}']")
        if square? and square.innerHTML?
            return square.innerHTML
        else
            return 'X'  # mark as empty if out of range

    # -----------------------------
    putSquareContent = (x, y, code) ->
        square = document.querySelector(".squareComputer[data-x='#{x}'][data-y='#{y}']")
        if square? and square.innerHTML?
            square.style.color = 'lightcyan'
            square.innerHTML = code

    # -----------------------------
    checkSquareNeighbours = (x, y, code) ->
        # true = if neighbouring squares are free
        free = true
        if getSquareContent(x, y) not in [code,'X'] then free = false
        else if getSquareContent(x+1, y) not in [code,'X'] then free = false
        else if getSquareContent(x-1, y) not in [code,'X'] then free = false
        else if getSquareContent(x, y+1) not in [code,'X'] then free = false
        else if getSquareContent(x, y-1) not in [code,'X'] then free = false

        else if getSquareContent(x-1, y-1) not in [code,'X'] then free = false
        else if getSquareContent(x-1, y+1) not in [code,'X'] then free = false
        else if getSquareContent(x+1, y-1) not in [code,'X'] then free = false
        else if getSquareContent(x+1, y+1) not in [code,'X'] then free = false
        return free

    # -----------------------------
    clearShip = (ship) ->
        # Clear all occurences of this ship code in computer board
        for y in [1..10]
            for x in [1..10]
                if getSquareContent(x, y) == ship.code
                    putSquareContent(x, y, 'X')

    # -----------------------------
    placeShip = (ship) ->
        # Place one computer ship, check if it doesn't collide with another
        {x, y, direction} = getRandomCoord(ship)   # starting coordinates
        count = ship.size
        while count
            if checkSquareNeighbours( x, y, ship.code )
                putSquareContent x, y, ship.code
                count--
                if direction == 1 then x++ else y++
            else
                # BUMMER: it's colliding with another ship, start over again
                clearShip ship
                count = 0       # stop this search, needed for recursion
                placeShip ship  # try again with new coordinates

    # Iterate to place all computer ships
    for _, ship of computer
        placeShip(ship)

# *********************************************************************
showAlert = (title, icon, textalign, msg) ->
    new Promise (resolve) ->
        Swal.fire
            title: title
            html: "<div style='text-align: #{textalign}; font-size: 16px;'>#{msg}</div>"
            icon: icon
            confirmButtonText: 'OK'
            position: 'center'
            animation: true
            willClose: resolve

# --------------------------------------
setWinner = (who) ->
    game.winner = who
    footer = document.getElementById 'footer'
    footer.style.color = 'yellow'
    footer.innerHTML = "#{who} wins!<br>Reload the page to play again"

# --------------------------------------
remainingFreeSquares = (board) ->
    left = 0
    for y in [1..10]
        for x in [1..10]
            square = document.querySelector(".square#{board}[data-x='#{x}'][data-y='#{y}']")
            code = square.innerHTML
            if code == code.toUpperCase() then left++
    return left

# --------------------------------------
remainingOfOneShip = (board, code) ->
    left = 0
    for y in [1..10]
        for x in [1..10]
            square = document.querySelector(".square#{board}[data-x='#{x}'][data-y='#{y}']")
            content = square.innerHTML
            if content == code then left++
    return left

# --------------------------------------
remainingOfAllShips = (board) ->
    left = 0
    for y in [1..10]
        for x in [1..10]
            square = document.querySelector(".square#{board}[data-x='#{x}'][data-y='#{y}']")
            code = square.innerHTML
            if code != 'X' and code == code.toUpperCase() then left++
    return left

# --------------------------------------
randomFreeSquare = ->
    remaining = remainingFreeSquares('Player')
    xy = Math.floor(Math.random() * remaining) + 1

    for y in [1..10]
        for x in [1..10]
            square = document.querySelector(".squarePlayer[data-x='#{x}'][data-y='#{y}']")
            code = square.innerHTML
            if code == code.toUpperCase() then xy--
            if xy == 0
                return square

# --------------------------------------
placePlayerShip = (clickedSquare) ->
    x = clickedSquare.dataset.x
    y = clickedSquare.dataset.y
    code = clickedSquare.innerHTML

    # Check if all player ships are placed
    count = 0
    count += ship.size for _, ship of player
    if count == 0
        if remainingFreeSquares('Player') == 100
            msg = "All your ships are placed.<br>You can start playing."
        else
            msg = "Keep shooting on the Computer board.<br>The game is not over yet."
            
        showAlert "", 'warning', 'center', msg
        return
        
    # Avoid placing a ship on an occupied square
    if code != 'X'
        showAlert "", 'warning' , 'center', "That square is already taken."
        return

    # Get next un-placed ship part and show it on the player board
    for _, ship of player
        if ship.size
            clickedSquare.style.backgroundColor = 'cyan'
            clickedSquare.style.color = 'black'
            clickedSquare.innerHTML = ship.code
            ship.size--
            break

# --------------------------------------
# -------------------------------------
showShipAsDestroyed = (board, code) ->
    # Scan computer board and change squares background to black only for THIS ship
    for y in [1..10]
        for x in [1..10]
            square = document.querySelector(".square#{board}[data-x='#{x}'][data-y='#{y}']")
            content = square.innerHTML
            if content == code.toLowerCase()
                square.style.backgroundColor = 'black'
                square.style.color = 'lightcyan'

# --------------------------------------
shootComputerBoard = (clickedSquare) ->
    count = 0
    count += ship.size for _, ship of player
    if count
        showAlert "", 'warning', 'center',
            "Place ALL your ships in the Player board<br>before you can start playing."
        return

    x = clickedSquare.dataset.x
    y = clickedSquare.dataset.y
    code = clickedSquare.innerHTML

    if code == code.toLowerCase()
        showAlert "", 'warning', 'center',
            "That square has already been shot."
        return

    clickedSquare.innerHTML = code.toLowerCase()

    if code is 'X'
        clickedSquare.style.color = 'black'     # miss
    else
        clickedSquare.style.backgroundColor = 'red' # hit
        clickedSquare.style.color = 'lightcyan'

        if remainingOfOneShip('Computer', code) == 0
            showShipAsDestroyed 'Computer', code
        
        # If no more computer ships to shoot, player wins!
        if remainingOfAllShips('Computer') == 0
            setWinner 'Player'
            showAlert "Bravo!", '' , 'center',"YOU WIN!"

    # Keep going with computer move if no winner
    if game.winner is '' then setTimeout shootPlayerBoard, 500

# --------------------------------------
# Flash few times a missed player square
flashSquare = (square, repeat) ->
    repeat--
    square.style.background = 'black'
    square.style.color = 'lightcyan'
    setTimeout ( () -> flashSquare2(square, repeat) ), 250

flashSquare2 = (square, repeat) ->
    square.style.background = 'lightcyan'
    square.style.color = 'black'
    if 0 < repeat < 5
        setTimeout ( () -> flashSquare(square, repeat) ), 250

# --------------------------------------
shootPlayerBoard = ->
    shootPlayerShip = (code) ->
        # Find next player ship square (uppercase code) and change it to lower case
        # and return how many left to shoot
        howManyLeft = 0
        for y in [1..10]
            for x in [1..10]
                square = document.querySelector(".squarePlayer[data-x='#{x}'][data-y='#{y}']")
                if howManyLeft == 0 and square.innerHTML == code
                    howManyLeft = 1
                    square.innerHTML = code.toLowerCase()
                    square.style.background = 'red'
                    square.style.color = 'lightcyan'
                else if square.innerHTML == code
                    howManyLeft++
        return howManyLeft

    # ----------------------------------
    prev = game.previousCode
    if prev
        if shootPlayerShip(prev) == 1   # last square destroyed
            showShipAsDestroyed('Player', prev)
            game.previousCode = ''
    else
        square = randomFreeSquare()
        code = square.innerHTML

        if code == 'X'
            square.innerHTML = 'x'
            flashSquare square, 2
        else
            game.previousCode = code
            shootPlayerShip(code)     # first square to destroyed
            console.log code

    # Check if computer wins (no more player ship to shoot)
    if remainingOfAllShips('Player') == 0
        setWinner 'Computer'
        saver.setWinner = 'Computer'
        showAlert "Sad!", '' , 'center', "The Computer wins!"

# *********************************************************************
# ----- Intro message -----
showAlert "Battleship", '', 'center',
    '''Begin by placing your four ships (shown at top left)<br>
    by placing them in the Player board.<br><br>
    Click one square at a time and all ships will be placed in succession,
    starting with the Destroyer and finishing with the Submarine.<br><br>
    Ships cannot touch each other but can touch borders.<br>
    They can be placed horizontally or vertically.<br>
    '''
