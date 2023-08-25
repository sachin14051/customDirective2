import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[customCss]'
})
export class CustomDirective implements OnInit{
   
    constructor(private eleref:ElementRef, private renderer : Renderer2){
        //    this.eleref.nativeElement.style.backgroundColor="orange";
        // renderer.setStyle(this.eleref.nativeElement,"background-color","blueviolet");
        // renderer.setStyle(this.eleref.nativeElement,"color","white");
       this.renderer.addClass(this.eleref.nativeElement,"p-5");

    }
   
   
    ngOnInit(): void {
       
    }


    @HostListener('mouseout') onMouseOut(){
        this.renderer.addClass(this.eleref.nativeElement,"bg-info")
    }
    
    @HostListener('mouseover') onMouseOver(){
        this.renderer.addClass(this.eleref.nativeElement,"bg-success");
 
     }
     
}