const app = document.querySelector<HTMLDivElement>(".app")
const circle = document.querySelector<HTMLDivElement>(".circle")

let x = 0;
let y = 0;
let moves = []

let counter = 0;
let oldDate;
let eventKey;

const game = () =>{
    if(!circle) return;

    return{

        goLeft({
            ctrl,
            shift
        }){
            let placeCircle = circle.getBoundingClientRect()
            if(placeCircle.x >250){
            if(ctrl){
                x= x-100 + -5 * counter
                circle.style.transform = `translate(${x}px,${y}px)`
            }
            }
            if(placeCircle.x >140){
                x = x + -10 + -5 * counter
                circle.style.transform = `translate(${x}px,${y}px)`
                moves.push(`x ${x}`)

                if(shift){
                    x= x-20 -5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
            }
        },
        goUp({
            ctrl,
            shift
        }){
            let placeCircle = circle.getBoundingClientRect()

            if(placeCircle.y > 151){
                if(shift){
                    y= y-20 -5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
                y = y + -10 + -5 * counter
                circle.style.transform = `translate(${x}px,${y}px)`
                moves.push(`y ${y}`)
            }

            if(placeCircle.y>240){
                if(ctrl){
                    y= y-100 + -5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
            }
        },
        goRight({
            shift,
            ctrl
        }){
            let placeCircle = circle.getBoundingClientRect()

            if(placeCircle.x <1340){
                if(shift){
                    x= x+20 + 5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
                x = x + 10 + 5 * counter
                circle.style.transform = `translate(${x}px,${y}px)`
                moves.push(`x ${x}`)
            }
            
            if(placeCircle.x <1260){
                if(ctrl){
                    x= x+100 + 5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
            }
        },
        goBottom({
            shift,
            ctrl
        }){
            let placeCircle = circle.getBoundingClientRect()

            if(placeCircle.y < 720){
                if(shift){
                    y= y+20 + 5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }

                y= y+10 + 5 * counter
                circle.style.transform = `translate(${x}px,${y}px)`
            }

            if(placeCircle.y < 620){
                if(ctrl){
                    y= y+100 + 5 * counter
                    circle.style.transform = `translate(${x}px,${y}px)`
                }
            }
        },
        resetPosition(ctrl:boolean){
            if(ctrl){
                x=0
                y=0
                circle.style.transform = `translate(${x}px,${y}px)`
            }
        }
    }
}

const processGame = game()

function timeProcess ({
    key,
    date,
    count
}){
    count = counter

    if(eventKey===key.key){
        if(date-oldDate <250){
            counter+=1
        }
    }else{
        counter = 1
    }

    eventKey = key.key
    oldDate=date
}

window.addEventListener("keyup", (e) =>{

    let x = moves.filter(function(move) {
        return move == "x"; });

    console.log(moves)
    console.log(x)

    e.stopPropagation();
    e.preventDefault();
    if(e.key === "ArrowRight"){
        processGame?.goRight({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "d"){
        processGame?.goRight({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "ArrowLeft"){
        processGame?.goLeft({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "a"){
        processGame?.goLeft({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "ArrowUp"){
        processGame?.goUp({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "w"){
        processGame?.goUp({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "ArrowDown"){
        processGame?.goBottom({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "s"){
        processGame?.goBottom({
            ctrl: e.ctrlKey,
            shift: e.shiftKey
        })
    }
    if(e.key === "z"){
        if(e.ctrlKey){
            // processGame?.backMove()
        }
    }
    if(e.key === "x"){
        processGame?.resetPosition(e.ctrlKey)
    }

    timeProcess({
        key:e,
        date: Date.now(),
        count: counter
    })
})

export default circle