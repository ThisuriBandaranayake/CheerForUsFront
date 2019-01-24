import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {

  model:any={};
    
    public form = {
        categoryName: null,
        placeName: null,
        placeDescription: null,
        placeAddressLine1: null,
        placeAddressLine2: null,
        placeCity: null,
        placeProvince: null,
        placeCountry: null,
        placePostalCode: null,
        placeLatitude: null,
        placeLongitude: null,
        fileToUploadPP: null,
        fileToUploadCP:null,
   
  };

  
  categoryId: number;
  categoryName: string;
  placeName: string;
  placeDescription: string;
  placeAddressLine1: string;
  placeAddressLine2: string;
  placeCity: string;
  placeProvince: string;
  placeCountry: string;
  placePostalCode: string;
  placeLatitude: string;
  placeLongitude: string;
  response: any;
  
  image2:string;
  public imgUrl2 = "assets/images/DefaultCP.jpg";
  fileToUploadCP:File;


  image:string;//name
  public imgUrl = "assets/images/DefaultPP.png";
  fileToUploadPP: File;
  

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
   
  }

  handleFileInput(file:FileList){
    this.fileToUploadPP= file.item(0);
    var reader=new FileReader();

    reader.onload=(event:any)=>{
        this.imgUrl=event.target.result; 
    }

    reader.readAsDataURL(this.fileToUploadPP);
    console.log(reader);
}

handleFileInputCP(file:FileList){
  this.fileToUploadCP=file.item(0);
  var reader=new FileReader();

  reader.onload=(event:any)=>{
    this.imgUrl2=event.target.result; 
  }

  reader.readAsDataURL(this.fileToUploadCP);
  console.log(reader);
}

  

  setCategory(val: any) {
    this.categoryName = val;
  }
  setCountry(val: any) {
    this.placeCountry = val;
  }
  setProvins(val: any) {
    this.placeProvince = val;
  }
  setCity(val: any) {
    this.placeCity = val;
  }


  onSubmit() {
    let input = new FormData();
    input.append('category_name', this.categoryName);
    input.append('name', this.placeName);
    input.append('description', this.placeDescription);
    input.append('address_line1', this.placeAddressLine1);
    input.append('address_line2', this.placeAddressLine2);
    input.append('city', this.placeCity);
    input.append('province', this.placeProvince);
    input.append('country', this.placeCountry);
    input.append('postal_code', this.placePostalCode);
    input.append('latitude', this.placeLatitude);
    input.append('longitude', this.placeLongitude);
    
    input.append('photo', this.fileToUploadPP);
    input.append('cover_photo', this.fileToUploadCP);

    let headers = {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOWVkMzZmOTQxNTNmZTU0OGIwMmMwMTNhNWZhYjU4ZjY1NTYzYWY2ZjllYjI0ODAyZWIyNzQ0Yjk5NzVlMTRhOTFmYzQzYThjOTZhZjFhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI5ZWQzNmY5NDE1M2ZlNTQ4YjAyYzAxM2E1ZmFiNThmNjU1NjNhZjZmOWViMjQ4MDJlYjI3NDRiOTk3NWUxNGE5MWZjNDNhOGM5NmFmMWEiLCJpYXQiOjE1NDUwNTgwODMsIm5iZiI6MTU0NTA1ODA4MywiZXhwIjoxNTc2NTk0MDgzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.wRZ7V6mpvY-EGvo2VIxFnVYgSgm3nZAhlrg4yQA0pHSepfPMVGJiaqPucVbUxpNAcv2MMBMxhyrAuOBPZZGideUgHvIzgs0VDnmdn20zytIii7Vl1GMXndTrTmu29VLXScotoJ7sW3RjJzwnBuBHr3m2bdVaubKUdKsYm7FAPvQ90lJgIR29o_vgmogUFpeF8WcU2FVQKhzaBQQXwS5Ohpu1PYHorMgN2gNb0sNRUrSWvOzB_6tpYMbF9oAUJHgYkwEu9druFgyui1YCYbRIVteErT8ANy1CfUGWHmybeh1HU70PouDqEpypg6LCUh0IGkV8io-sbJwZH-6TSkqO57iyrt6d2FwrjYdfdZyjcnUEjB4cobV5UNNbeKeX7kZIMakirx1SbxOYOA30Iu7ck6bsB4bqqoOFeNKaS8OOpA9C76m3KypxWbkaJQvsHQNEuUmxUkfrnsTRO-np3EN4SixbOoq05Wrz781SfFCXfTSa8XR0N-Zg5RDxlCQfKtmn1DT9NsI0oij4mt_GzRlXPAjc3PQZsRlgg8c4stGEB_LSnahoNyx9BhgU0tfMJLr44i3BgUXRgTA6sQ3ZVoU7FoWFap-3e3FmCqV3Hd6srsTe4zapFxJVp5jUrimhhF-xgnBah9GfwOz1if2-Zus3XfOn14XKZUTi8Ubf8A6YVGM'
    }

    return this.http.post('http://127.0.0.1:8000/api/place/create', input, {headers: headers}).subscribe(
      response => {
        this.response = response;
        console.log(this.response);
      },
      error => {
        console.log(error);
      }
    );
  }




}
