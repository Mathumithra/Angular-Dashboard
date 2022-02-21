import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../module';
import { UserService } from '../user.service';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  currentUserId:string = "";

  isLoading:boolean = true;

  userData:UserData| any={};

  constructor(private activateRoute:ActivatedRoute, 
    private userservice:UserService) {

    this.activateRoute.params.subscribe((data) => {
       this.currentUserId = data['id'];
      this.userservice.userById(this.currentUserId).subscribe((data) =>{
        this.userData = data;
      });
    });
   

  }

 

  ngOnInit(): void {
  }

}
