import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { NewsModule } from "./news/news.module";
import { NewsComponent } from "./news/presentation/news.component";

@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [BrowserModule, DragDropModule, NewsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
