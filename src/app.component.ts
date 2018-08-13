import { Component, Directive, HostBinding, Input, HostListener } from '@angular/core'

@Directive({
    selector: '[first]'
})
export class FirstDirective{
    @Input() first
    @HostBinding() get innerText(){
        return this.first
    }

    @HostListener('click', ['$event'])
    onClick($event){
        this.first = 'clicked '
    }
}

@Component({
    selector: 'basic',
    template: `<div></div>`
})
export class BasicComponent{
}

@Component({
    selector: 'app',
    template: `
<basic [first]="'Something '"></basic>
<basic [first]="'Another '"></basic>
<basic [first]="'Third'"></basic>
`
})
export class AppComponent{}
