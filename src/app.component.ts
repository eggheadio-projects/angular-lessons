import { Component, Directive, ViewChild, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[first]'
})
export class FirstDirective {

}

@Component({
    selector: 'basic',
    template: `
<template #foo>
This is content inside a template
</template>
`
})
export class BasicComponent{
    @ViewChild('foo') template

    constructor(private view:ViewContainerRef){}

    ngAfterContentInit(){
        this.view.createEmbeddedView(this.template)
        this.view.createEmbeddedView(this.template)
        this.view.createEmbeddedView(this.template)
    }
}

@Component({
    selector: 'app',
    template: `
<basic></basic>
`
})
export class AppComponent{}
