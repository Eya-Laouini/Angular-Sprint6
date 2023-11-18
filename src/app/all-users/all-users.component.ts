import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users!:User[];
  constructor(

    private authService:AuthService
  ) { }

  ngOnInit(): void {

//remove the logged user from the list
      // this.users=this.users.filter((user)=>user.username!=this.authService.loggedUser)
      this.getLocalsUsers()
      }

      getLocalsUsers() {
        this.authService.getAllUsers().subscribe({
            next: (res) => {
                console.log(res);
                this.users = res;
            },
            error: (error) => console.log(error),
        });
    }

onDeleteUser(id:number){
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
  this.authService.deleteUser(id).subscribe((res)=>{
    console.log(res);

    this.users=this.users.filter((user)=>user.user_id!=id)
  })
}

 

}


}