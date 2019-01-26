import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
// import { access } from 'fs';

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


  onSubmit(access_token:string) {

      // let HttpHeaders=new HttpHeaders ({
      //   Authorization:"Bearer" + localStorage.getItem("access_token")
      // });
    

    let input = new FormData();
    let cat_id = 1;
    input.append('category_id', cat_id.toString());
    input.append('name', this.placeName);
    input.append('description', this.placeDescription);
    input.append('address_line1', this.placeAddressLine1);
    input.append('address_line2', this.placeAddressLine2);
    input.append('city', this.placeCity);
    console.log(this.placeCity);
    console.log(this.placeProvince);
    console.log(this.placeCountry);
    input.append('province', this.placeProvince);
    input.append('country', this.placeCountry);
    input.append('postal_code', this.placePostalCode);
    input.append('latitude', this.placeLatitude);
    input.append('longitude', this.placeLongitude);
    
    input.append('photo', this.fileToUploadPP);
    input.append('cover_photo', this.fileToUploadCP);

    let headers = {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
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
