import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  @Input()
  users:IMember[];
   
  @Output()
 userSelected: EventEmitter<number> = new EventEmitter();

 displayedColumns: string[] = ['select', 'id', 'avatar', 'name', 'role', 'email', 'deviceid', 'icon'];
 dataSource = new MatTableDataSource();
 @ViewChild(MatSort,{static:true}) sort: MatSort;
 @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
 
 constructor()  {}
 
  
ngOnInit(){

}


ngOnChanges(): void {
   this.dataSource.data=this.members;
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
}


 logData(row) {
   console.log(row);
 }

 applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }
 navigateToUser(id: number) {
      this.userSelected.emit(id);
      }

}
