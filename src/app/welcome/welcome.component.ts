import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  myVariable = "Welcome variable";
  disabledValue = false;

  twoDataBinderVariable = "";
  usersList = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getData().subscribe(data => {
      this.usersList = data["result"];
    });
  }

  disableTextField() {
    this.disabledValue = true;
    console.log("Button disbaled");
  }
}
