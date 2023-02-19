import { NewsComponent } from "./presentation/news.component";
import { ModalDetailsComponent } from "./presentation/modal-details/modal-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ModalDetailsComponent],
  imports: [BrowserModule, MatButtonModule, DragDropModule, MatDialogModule],
  providers: [],
  bootstrap: [],
  exports: [NewsComponent]
})
export class NewsModule {}
