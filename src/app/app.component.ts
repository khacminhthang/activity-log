import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'activity-log';

  groupArrays = [];

  currentDay: string = ';'

  listData = [
    {
      idHoSo: "aaaaa",
      userName: "Nguyễn Văn A",
      datetime: "2022-11-29 00:11:35.000",
      date: "2022-11-29",
      time: "00:11:35.000",
      title: "Etiam feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 0
    },
    {
      idHoSo: "aaaaa",
      userName: "Nguyễn Văn A",
      datetime: "2022-11-29 00:11:35.000",
      date: "2022-11-29",
      time: "00:11:35.000",
      title: "Etiam feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 0
    },
    {
      idHoSo: "bbbbb",
      userName: "Nguyễn Văn B",
      date: "2022-09-21",
      time: "00:11:35.000",
      datetime: "2022-09-21 00:11:35.000",
      title: "Ecuado feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 1
    },
    {
      idHoSo: "bbbbb",
      userName: "Nguyễn Văn B",
      date: "2022-09-21",
      time: "00:11:35.000",
      datetime: "2022-09-21 00:11:35.000",
      title: "Ecuado feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 1
    },
    {
      idHoSo: "bbbbb",
      userName: "Nguyễn Văn C",
      date: "2022-09-19",
      time: "00:11:35.000",
      datetime: "2022-09-19 00:11:35.000",
      title: "Ecuado feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 0
    },
    {
      idHoSo: "bbbbb",
      userName: "Nguyễn Văn D",
      date: "2022-09-19",
      time: "00:11:35.000",
      datetime: "2022-09-19 00:11:35.000",
      title: "Ecuado feugiat dolor nec molestie",
      description: `Duis iaculis commodo condimentum.
       Donec quis felis libero. Nunc feugiat nisi ut ullamcorper congue. 
       Ut tempus egestas mauris et scelerisque. Sed tincidunt ante ligula, 
       eget pharetra mi pretium eget. Fusce tincidunt, elit blandit semper sollicitudin, 
       sapien lectus lobortis quam, ac bibendum lectus risus quis lectus.`,
      status: 0
    }
  ];

  ngOnInit() {
    let today = new Date();
    this.currentDay = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(this.currentDay)
    // this gives an object with dates as keys
    const groups = this.listData.reduce((groups, item) => {
      const date = item.date.split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        items: groups[date]
      };
    });
    this.groupArrays = groupArrays;
    console.log(groupArrays);
  }
}
