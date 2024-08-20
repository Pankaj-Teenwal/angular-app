import {
  Component,
  computed,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Decorator way of taking input
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  @Output() selected = new EventEmitter();

  @Input({ required: true }) select!: boolean;

  //Signal way of taking input
  // avatar = input.required()
  // name = input.required()
  // avatar = input <string>()
  // name = input <string>()

  // avatar = input.required<string>();
  // name = input.required<string>();

  // get imagePath() {
  //   return 'assets/' + this.avatar;
  // }

  imagePath = computed(() => {
    return 'assets/' + this.user.avatar;
  });
  //created an @Output decarator for emmiting the id for child component to parent component
  //way to create @Output Event Emitter:
  //@Output() selected = new EventEmitter(); Defined the Event using new EventEmitter()
  //then onSelectUser i am emitting the id using selected.emit(this.id)
  onSelectUser() {
    console.log('User Clicked');
    this.selected.emit(this.user.id);
  }
}
