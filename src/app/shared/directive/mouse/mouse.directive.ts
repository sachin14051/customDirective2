import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector : "[move]"
})
export class MouseDirective implements OnInit {
    rendere: any;
    
    constructor(private eleref:ElementRef, rendere:Renderer2){}
    
    ngOnInit(): void {
     
    }
    @HostListener('mouseover')  onmouseover(){
        this.rendere.setStyle(this.eleref.nativeElement,'background-color','orange')
   }

}