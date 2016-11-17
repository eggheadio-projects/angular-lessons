import { Component, Directive, ElementRef, ViewContainerRef, TemplateRef } from '@angular/core'

@Directive({
    selector: '[three]'
})
export class ThreeDirective{
    constructor(
        el:ElementRef,
        private view:ViewContainerRef,
        private template:TemplateRef<any>
    ){
        console.log(el.nativeElement)
    }

    ngAfterViewInit(){
        this.view.createEmbeddedView(this.template)
        this.view.createEmbeddedView(this.template)
        this.view.createEmbeddedView(this.template)
    }
}

@Component({
    selector: 'app',
    template: `
<h1 *three>Hello, Angular</h1>    
`
})
export class AppComponent{}
