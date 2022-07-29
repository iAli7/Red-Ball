// const app = document.querySelector<HTMLDivElement>(".app")
// const circle = document.querySelector<HTMLDivElement>(".circle")

// let x = 0;
// let y = 0;

// let moveValue = ""

// const game = () =>{
//     if(!circle) return;

//     return{

//         goLeft({
//             ctrl,
//             shift
//         }){
//             let placeCircle = circle.getBoundingClientRect()
//             if(placeCircle.x >250){
//             if(ctrl){
//                 circle.style.transform = `translate(${x-100}px,${y}px)`
//                 x= x-100
//             }
//             }
//             if(placeCircle.x >140){
//                 let addNumber = x+=-10
//                 circle.style.transform = `translate(${x-10}px,${y}px)`
//                 addNumber = x

//                 if(shift){
//                     circle.style.transform = `translate(${x-20}px,${y}px)`
//                     x= x-20
//                 }
//             }
//         },
//         goUp({
//             ctrl,
//             shift
//         }){
//             let placeCircle = circle.getBoundingClientRect()

//             if(placeCircle.y > 151){
//                 if(shift){
//                     circle.style.transform = `translate(${x}px,${y-20}px)`
//                     y= y-20
//                 }
//                 let addNumber = y+=-10
//                 circle.style.transform = `translate(${x}px,${y}px)`
//                 addNumber = y
//             }

//             if(placeCircle.y>240){
//                 if(ctrl){
//                     circle.style.transform = `translate(${x}px,${y-100}px)`
//                     y= y-100
//                 }
//             }
//         },
//         goRight({
//             shift,
//             ctrl
//         }){
//             let placeCircle = circle.getBoundingClientRect()

//             console.log(placeCircle.x)

//             if(placeCircle.x <1340){
//                 if(shift){
//                     circle.style.transform = `translate(${x+20}px,${y}px)`
//                     x= x+20
//                 }
                
//             let addNumber = x+=+10
//             circle.style.transform = `translate(${x}px,${y}px)`
//             addNumber = x
//             }
            
//             if(placeCircle.x <1260){
//                 if(ctrl){
//                     circle.style.transform = `translate(${x+100}px,${y}px)`
//                     x= x+100
//                 }
//             }
//         },
//         goBottom({
//             shift,
//             ctrl
//         }){
//             let placeCircle = circle.getBoundingClientRect()

//             if(placeCircle.y < 720){
//                 if(shift){
//                     circle.style.transform = `translate(${x}px,${y+20}px)`
//                     y= y+20
//                 }

//                 let addNumber = y+=+10
//                 circle.style.transform = `translate(${x}px,${y}px)`
//                 addNumber = y
//             }

//             if(placeCircle.y < 620){
//                 if(ctrl){
//                     circle.style.transform = `translate(${x}px,${y+100}px)`
//                     y= y+100
//                 }
//             }
//         },
//         //sıkıntılı geri alma
//         backMove(ctrl:boolean){
//             if(ctrl){
//                 if(moveValue ==="Right"){
//                     circle.style.transform = `translate(${x-10}px,${y}px)`
//                 }
//                 if(moveValue ==="Left"){
//                     circle.style.transform = `translate(${x+10}px,${y}px)`
//                 }
//                 if(moveValue ==="Up"){
//                     circle.style.transform = `translate(${x}px,${y+10}px)`
//                 }
//                 if(moveValue ==="Down"){
//                     circle.style.transform = `translate(${x}px,${y-10}px)`
//                 }
//             }
//         },
//         resizePosition(ctrl:boolean){
//             if(ctrl){
//                 x=0
//                 y=0
//                 circle.style.transform = `translate(${x}px,${y}px)`
//             }
//         }
//     }

// }

// const processGame = game()

// window.addEventListener("keyup", (e) =>{
//     e.stopPropagation();
//     e.preventDefault();
//     if(e.key === "ArrowRight"){
//         processGame?.goRight({
//             ctrl: e.ctrlKey,
//             shift: e.shiftKey
//         })
//         moveValue = "Right"
//     }
//     if(e.key === "ArrowLeft"){
//         processGame?.goLeft({
//             ctrl: e.ctrlKey,
//             shift: e.shiftKey
//         })
//         moveValue = "Left"
//     }
//     if(e.key === "ArrowUp"){
//         processGame?.goUp({
//             ctrl: e.ctrlKey,
//             shift: e.shiftKey
//         })
//         moveValue = "Up"
//     }
//     if(e.key === "ArrowDown"){
//         processGame?.goBottom({
//             ctrl: e.ctrlKey,
//             shift: e.shiftKey
//         })
//         moveValue = "Down"
//     }
//     if(e.key === "z"){
//         processGame?.backMove(e.ctrlKey)
//     }
//     if(e.key === "x"){
//         processGame?.resizePosition(e.ctrlKey)
//     }
// })

// export default circle