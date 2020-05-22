import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-fetch-salts",
  templateUrl: "./fetch-salts.component.html",
  styleUrls: ["./fetch-salts.component.scss"],
})
export class FetchSaltsComponent implements OnInit {
  public fetchSaltsForm: FormGroup;
  public rawMaterial: FormArray;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.fetchSaltsForm = this.fb.group({
      rawMaterial: this.fb.array([this.createrawMaterial()]),
      supplierid: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {}

  createrawMaterial(): FormGroup {
    return this.fb.group({
      salt: "",
      quantity: 0,
    });
  }
  addSalt(): void {
    this.rawMaterial = this.fetchSaltsForm.get("rawMaterial") as FormArray;
    this.rawMaterial.push(this.createrawMaterial());
  }
  removeSalt(i: number) {
    this.rawMaterial.removeAt(i);
  }
  get saltControls() {
    return this.fetchSaltsForm.get("rawMaterial")["controls"];
  }

  onSubmit() {
    console.log("Order is placed");
    this.fetchSaltsForm.reset();
  }
}
