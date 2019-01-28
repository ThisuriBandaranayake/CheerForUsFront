import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-edit-place-details",
  templateUrl: "./edit-place-details.component.html",
  styleUrls: ["./edit-place-details.component.scss"]
})
export class EditPlaceDetailsComponent implements OnInit {
  institute_category_places: any;
  title: string;
  description: string;
  image: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .post(
        "http://127.0.0.1:8000/api/place/get",
        {
          only_owned: 1
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        }
      )
      .subscribe(
        data => {
          console.log(data);
          this.institute_category_places = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  delete(id) {
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
    console.log(localStorage.getItem("access_token"));
    var response = confirm("Are you sure you want to delete this article?");

    if (response == true) {
      return this.http
        .post(
          "http://localhost:8000/api/place/delete",
          { id },
          {
            headers: httpHeaders
          }
        )
        .subscribe(response => {
          console.log(response);
          window.location.reload();
        });
    } else {
    }
  }

  // package add
  package_name: any;
  package_description: any;
  time_period: any;
  price: any;

  createPackage() {
    let httpHeaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("access_token")
    });
    return this.http
      .post(
        "http://localhost:8000/api/customer/package/create",
        {
          institute_category_place_id: this.institute_category_place_id,
          package_name: this.package_name,
          description: this.package_description,
          time_period_days: this.time_period,
          price: this.price
        },
        {
          headers: httpHeaders
        }
      )
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }

  institute_category_place_id: any;
  showDialog(basicModal: any, institute_category_place_id: any) {
    basicModal.show();
    this.institute_category_place_id = institute_category_place_id;
  }
}
