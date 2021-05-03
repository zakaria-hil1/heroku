export class Assignment {
  _id?:string;
  id?:number;
  nom:string;
  dateDeRendu:Date;
  rendu?:boolean;

  auteur: string;
  matiere: string;
  image_matiere: string;
  photo_prof: string;
  note: number;
  remarques: string;
}
