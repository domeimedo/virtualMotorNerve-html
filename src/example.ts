import {VirtualMotorNerveHTML} from './VirtualMotorNerve'

const main: VirtualMotorNerveHTML = new VirtualMotorNerveHTML(window, (domElement: any)=>{
    document.body.appendChild(domElement)
})
window.addEventListener('load', main.windowDidLoad)
window.addEventListener('load', main.windowDidResize)
