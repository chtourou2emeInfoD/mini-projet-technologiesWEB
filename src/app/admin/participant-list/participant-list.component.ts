import { Component, OnInit } from '@angular/core';
import { FakeparticipantService } from '../fakeparticipant.service';
import { Participant } from '../participant';

@Component({
  selector: 'app-participant',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
   //Attributes
   participants: any;
   modifierClicked = false;
   newparticipantCreated = false;
   tempparticipant: Participant;
 
   constructor(private participantService: FakeparticipantService) { }
 
   ngOnInit(): void {
     this.participants = this.participantService.get();
     this.tempparticipant = new Participant(-1,"","","","","","");
   }
 
   onDelete(participant:Participant){
     this.participantService.delete(participant);
   }
 
   onModifyClicked(participant:Participant){
     this.modifierClicked = !this.modifierClicked;
     this.tempparticipant.nom = participant.nom;
     this.tempparticipant.prenom = participant.prenom;
     this.tempparticipant.adresse = participant.adresse;
     this.tempparticipant.societe = participant.societe;
     this.tempparticipant.poste = participant.poste;
     this.tempparticipant.id = participant.id;
     this.tempparticipant.email = participant.email;
   }
 
   onSubmit(participant : Participant){
     this.modifierClicked = !this.modifierClicked;
     let index = this.participantService.indexOf(this.tempparticipant);
     let temp = this.participants[index];
     temp.nom = this.tempparticipant.nom;
     temp.prenom = this.tempparticipant.prenom;
     temp.adresse = this.tempparticipant.adresse;
     temp.societe = this.tempparticipant.societe;
     temp.poste = this.tempparticipant.poste;
     temp.id = this.tempparticipant.id;
     temp.email = this.tempparticipant.email;
     this.newparticipantCreated = false;
   }
 
   onAdd(){
     let temp = new Participant(this.participants.length+1,"","","","","","");
     this.newparticipantCreated = true;
     this.participantService.add(temp);
     this.onModifyClicked(temp);
   }
 
   onAnnuler(){
     if(this.newparticipantCreated){
       this.participantService.delete(this.participantService.getparticipant(this.participants.length));
       this.newparticipantCreated = false;
     }
     this.modifierClicked = !this.modifierClicked;
   }
 
 }
 