import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';
import { Profile } from '../../../model/profile'
import { MenuItem } from 'primeng/api'
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  showProfileForm: boolean = false;
  loading: boolean = true;

  profiles: Profile[] = [];
  profile?: Profile;

  items: MenuItem[] = [];

  constructor(private profileService: ProfileService) {

    this.items = [
      { label: 'Edit', icon: 'pi pi-fw pi-plus', command: () => { this.onClickEditProfileForm() } },
      { label: 'Delete', icon: 'pi pi-fw pi-download' }
    ];

  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {

    this.profileService.list().subscribe((data) => {

      this.loading = false;

      this.profiles = [...data];

    });

  }

  onClickShowProfileForm(): void {
    this.showProfileForm = true;
  }

  onClickEditProfileForm(): void {
    this.showProfileForm = true;
  }

  onClose(): void {
    this.showProfileForm = false;
  }

  setProfile(Profile: Profile): void {
    this.profile = Profile;
  }

}
