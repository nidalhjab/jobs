import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  viewDetails: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
  getModalStatus(): Observable<boolean> {
    return this.isOpen.asObservable();
  }
  getDetailsModalStatus() {
    return this.viewDetails.asObservable();
  }
  openModal() {
    const currentModalStatus = this.isOpen.getValue();
    this.isOpen.next(!currentModalStatus);
  }
  closeModal() {
    const currentUseCashback = this.isOpen.getValue();
    this.isOpen.next(!currentUseCashback);
  }
  openViewModal() {
    const currentUseCashback = this.viewDetails.getValue();
    this.viewDetails.next(!currentUseCashback);
  }
  closeViewModal() {
    const currentUseCashback = this.viewDetails.getValue();
    this.viewDetails.next(!currentUseCashback);
  }

}
