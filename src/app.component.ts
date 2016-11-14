import { Component } from '@angular/core'

@Component({
    selector: 'app',
    template: `
<template #foo let-whatever="message">
<h1>{{whatever}}</h1>
</template>

<div 
    [ngTemplateOutlet]="foo"
    [ngOutletContext]="one"
    >    
</div>
<div 
    [ngTemplateOutlet]="foo"
    [ngOutletContext]="two"
    >    
</div>
<div 
    [ngTemplateOutlet]="foo"
    [ngOutletContext]="three"
    >    
</div>
    `
})
export class AppComponent {
    one = {message:'Hello One'}
    two = {message:'Hello Two'}
    three = {message:'Hello Three'}

}