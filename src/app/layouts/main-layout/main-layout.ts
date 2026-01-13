import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";
import { App } from "../../app";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Sidebar, App],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
notify: any;

}
