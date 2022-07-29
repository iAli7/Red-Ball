// const circle = document.querySelector<HTMLElement>(".circle")

// const initCircle = () =>{
//     if (!circle) return;

//     return{
        // goRight(shift: boolean,ctrl: boolean){
        //     const circleTransform = circle.style.transform.replace(/[^-\d.]/g, '')
        //     const value = Number(circleTransform)

        //     console.log(value)
        //     if(value <0){
        //         if(shift){
        //             circle.style.transform = `translateX(${value + 20}px)`
        //         }
        //         else if(ctrl){
        //             circle.style.transform = `translateX(${value + 100}px)`
        //         }else{
        //             circle.style.transform = `translateX(${value + 10}px)`
        //         }
        //     }else{
        //         if(shift){
        //             circle.style.transform = `translateX(${value + 20}px)`
        //         }
        //         else if(ctrl){
        //             circle.style.transform = `translateX(${value + 100}px)`
        //         }else{
        //             circle.style.transform = `translateX(${value + 10}px)`
        //         }
        //     }
        // },
    
//         goLeft(shift: boolean,ctrl: boolean){
//             const circleTransform = circle.style.transform.replace(/[^-\d.]/g, '')
//             const value = Number(circleTransform)
            
//             if(value > 0) {
//                 if(shift){
//                     circle.style.transform = `translateX(${value - 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateX(${value - 100}px)`
//                 }else{
//                     circle.style.transform = `translateX(${value - 10}px)`
//                 }
//             }else{
//                 if(shift){
//                     circle.style.transform = `translateX(-${-value + 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateX(-${-value + 100}px)`
//                 }else{
//                     circle.style.transform = `translateX(-${-value + 10}px)`
//                 }
//             }


//             if(!value){
//                 circle.style.transform = `translateX(-10px)`
//             }
//         },
    
//         goTop(shift: boolean,ctrl: boolean){
//             const circleTransform = circle.style.transform.replace(/[^-\d.]/g, '')
//             const value = Number(circleTransform)
            
//             if(value > 0) {
//                 if(shift){
//                     circle.style.transform = `translateY(${value - 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateY(${value - 100}px)`
//                 }else{
//                     circle.style.transform = `translateY(${value - 10}px)`
//                 }
//             }else{
//                 if(shift){
//                     circle.style.transform = `translateY(-${-value + 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateY(-${-value + 100}px)`
//                 }else{
//                     circle.style.transform = `translateY(-${-value + 10}px)`
//                 }
//             }


//             if(!value){
//                 circle.style.transform = `translateY(-10px)`
//             }
//         },
    
//         goBottom(shift: boolean,ctrl: boolean){
//             const circleTransform = circle.style.transform.replace(/[^-\d.]/g, '')
//             const value = Number(circleTransform)

//             console.log(value)
//             if(value <0){
//                 if(shift){
//                     circle.style.transform = `translateY(${value - 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateY(${value - 100}px)`
//                 }else{
//                     circle.style.transform = `translateY(${value + 10}px)`
//                 }
//             }else{
//                 if(shift){
//                     circle.style.transform = `translateY(${value + 20}px)`
//                 }
//                 else if(ctrl){
//                     circle.style.transform = `translateY(${value + 100}px)`
//                 }else{
//                     circle.style.transform = `translateY(${value + 10}px)`
//                 }
//             }
//         },

//         resetPosition(){
//             circle.style.transform = `translateY(0px)`
//             circle.style.transform = `translateX(0px)`
//         }
//     }
// }


// const processCircle = initCircle();

// window.addEventListener("keyup",(event) =>{
//     if(event.key === "ArrowRight"){
//         processCircle?.goRight(event.shiftKey, event.ctrlKey)
//     }
//     if(event.key === "ArrowLeft"){
//         processCircle?.goLeft(event.shiftKey, event.ctrlKey)
//     }
//     if(event.key === "ArrowUp"){
//         processCircle?.goTop(event.shiftKey, event.ctrlKey)
//     }
//     if(event.key === "ArrowDown"){
//         processCircle?.goBottom(event.shiftKey, event.ctrlKey)
//     }

//     if(event.ctrlKey){
//         if(event.key === "x"){
//             processCircle?.resetPosition()
//         }
//     }

//     event.stopPropagation();
//     event.preventDefault();
// })

// export default circle