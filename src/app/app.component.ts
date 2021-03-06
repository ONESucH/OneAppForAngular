import { Component } from '@angular/core';
import { GetUsersService } from './get-users/get-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetUsersService]
})

export class AppComponent {
    /* урок 1 */
    value_1 = 'Введите первое значение';
    value_2 = 'Введите второе значение';
    value_3 = 'Введите третье значение';
    value_4 = 'Введите четвертое значение';
    value_5 = 'Введите пятое значение';
    title = 'App';
    /* урок 2 */
    usersCards = [
        {
            name: 'Name_1',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8v7eSZ32kBxQvA2mmJ1kXSTid8L_1pdQE8iN9LyEr3v-Fz01mQ',
            title: 'Title_1',
            informationText: 'informationText',
            bottomText: 'bottomTextLink'
        },
        {
            name: 'Name_2',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMp-b6Wv3B9PCSSHqB8XehLL7pXhokHV3XVYS3IsSyoWI86cimw',
            title: 'Title_2',
            informationText: 'informationText',
            bottomText: 'bottomTextLink'
        },
        {
            name: 'Name_3',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8v7eSZ32kBxQvA2mmJ1kXSTid8L_1pdQE8iN9LyEr3v-Fz01mQ',
            title: 'Title_3',
            informationText: 'informationText',
            bottomText: 'bottomTextLink'
        },
        {
            name: 'Name_4',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMp-b6Wv3B9PCSSHqB8XehLL7pXhokHV3XVYS3IsSyoWI86cimw',
            title: 'Title_4',
            informationText: 'informationText',
            bottomText: 'bottomTextLink'
        },
        {
            name: 'Name_5',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-n4cMYMgN3DGH6EHgj4BxagVuIzS_GEslNnxepxD8p8jlku74w',
            title: 'Title_5',
            informationText: 'informationText',
            bottomText: 'bottomTextLink'
        }
    ];
    /* Урок 3 */
    users = [];
    constructor(private getUsersService: GetUsersService) { // переменная с которой будем работать в дальнейшем
        this.users = this.getUsersService.users;
    }
    /* Урок 4 */
    ngOnInit() {
        this.getUsersService.getUsers();
    }
}
