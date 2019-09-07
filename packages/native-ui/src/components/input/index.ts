import {NgModule} from "@angular/core";
import {InputComponent} from "./input.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DuiIconModule} from "../icon";

@NgModule({
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        DuiIconModule,
    ]
})
export class DuiInputModule {

}
