import { Component, Directive, Input, HostListener, Injectable } from '@angular/core'

@Injectable()
export class TrackingService{
    logs = []
    log(trackingEvent){
        this.logs.push(trackingEvent)
        console.log(this.logs)
    }
}

@Directive({
    selector: '[track]'
})
export class TrackDirective{
    @Input() track

    @HostListener('click')
    onClick(){
        this.tracking.log({event:'click', message:this.track})
    }
    @HostListener('mouseover')
    onMouseover(){
        this.tracking.log({event:'mouseover', message:this.track})
    }

    constructor(private tracking:TrackingService){}
}

@Component({
    selector: 'app',
    template: `
<button [track]="'One Button'">One</button>
<button [track]="'Two Button'">Two</button>
<button [track]="'Three Button'">Three</button>    
`
})
export class AppComponent{}
