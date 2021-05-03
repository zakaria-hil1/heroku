import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // pour le formulaire
  nomAssignment = '';
  dateDeRendu = '';
  auteurAssignment = '';
  matiereAssignment = '';
  noteAssignment: number;
  remarquesAssignment = '';

  constructor(private assignmentsService:AssignmentsService,
              private router:Router) {}

  ngOnInit(): void {}

  onSubmit() {
    let nouvelAssignment = new Assignment();
    if(!this.nomAssignment) return;
    if(!this.dateDeRendu) return;
    if(!this.auteurAssignment) return;
    if(!this.matiereAssignment) return;
    if(!this.noteAssignment) return;
    if(!this.remarquesAssignment) return;

    nouvelAssignment.nom = this.nomAssignment;
    nouvelAssignment.dateDeRendu = new Date(this.dateDeRendu);
    nouvelAssignment.rendu = false;
    nouvelAssignment.auteur = this.auteurAssignment;
    nouvelAssignment.matiere = this.matiereAssignment;
    nouvelAssignment.note = this.noteAssignment;
    nouvelAssignment.remarques = this.remarquesAssignment;

    //this.assignments.push(nouvelAssignment);
    this.assignmentsService.addAssignment(nouvelAssignment)
    .subscribe((reponseObject) => {
      console.log(reponseObject.message);

      // naviguer programmatiquement vers "/home" pour afficher la liste
      this.router.navigate(["/home"]);
    });
  }

}
