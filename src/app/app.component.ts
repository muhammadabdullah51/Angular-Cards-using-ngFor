import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cards';
  students:any = [];
  obj:any = [
      {
        userId: '1',
        username: 'vendor_one',
        catalogs: [
          { slug: 'apparel' },
          { slug: 'art' },
          { slug: 'electronics' }
        ]
      },
      {
        userId: '2',
        username: 'vendor_two',
        catalogs: [
          { slug: 'apparel' },
          { slug: 'home-goods' }
        ]
      },
      {
        userId: '3',
        username: 'vendor_three',
        catalogs: [
          { slug: 'electronics' },
          { slug: 'sports' }
        ]
      },
      {
        userId: '4',
        username: 'vendor_four',
        catalogs: [
          { slug: 'toys' },
          { slug: 'art' }
        ]
      },
      {
        userId: '5',
        username: 'vendor_five',
        catalogs: [
          { slug: 'books' },
          { slug: 'electronics' },
          { slug: 'gardening' }
        ]
      },
      {
        userId: '6',
        username: 'vendor_six',
        catalogs: [
          { slug: 'kitchen' },
          { slug: 'apparel' }
        ]
      },
      {
        userId: '7',
        username: 'vendor_seven',
        catalogs: [
          { slug: 'art' },
          { slug: 'jewelry' },
          { slug: 'electronics' }
        ]
      },
      {
        userId: '8',
        username: 'vendor_eight',
        catalogs: [
          { slug: 'furniture' },
          { slug: 'sports' }
        ]
      },
      {
        userId: '9',
        username: 'vendor_nine',
        catalogs: [
          { slug: 'beauty' },
          { slug: 'electronics' }
        ]
      },
      {
        userId: '10',
        username: 'vendor_ten',
        catalogs: [
          { slug: 'automotive' },
          { slug: 'home-goods' }
        ]
      }

    ];

    // this.students = [
    //   {
    //     id : 1,
    //     name : "Abdullah",
    //     gender : "male",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 2,
    //     name : "Rooshan",
    //     gender : "male",
    //     age : "21",
    //     course : "BSSE",
    //   },
    //   {
    //     id : 3,
    //     name : "Alyaan",
    //     gender : "male",
    //     age : "24",
    //     course : "BSIT",
    //   },
    //   {
    //     id : 4,
    //     name : "Mariya",
    //     gender : "female",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 5,
    //     name : "alishba",
    //     gender : "female",
    //     age : "21",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 1,
    //     name : "Abdullah",
    //     gender : "male",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 2,
    //     name : "Rooshan",
    //     gender : "male",
    //     age : "21",
    //     course : "BSSE",
    //   },
    //   {
    //     id : 3,
    //     name : "Alyaan",
    //     gender : "male",
    //     age : "24",
    //     course : "BSIT",
    //   },
    //   {
    //     id : 4,
    //     name : "Mariya",
    //     gender : "female",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 5,
    //     name : "alishba",
    //     gender : "female",
    //     age : "21",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 1,
    //     name : "Abdullah",
    //     gender : "male",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 2,
    //     name : "Rooshan",
    //     gender : "male",
    //     age : "21",
    //     course : "BSSE",
    //   },
    //   {
    //     id : 3,
    //     name : "Alyaan",
    //     gender : "male",
    //     age : "24",
    //     course : "BSIT",
    //   },
    //   {
    //     id : 4,
    //     name : "Mariya",
    //     gender : "female",
    //     age : "22",
    //     course : "BSCS",
    //   },
    //   {
    //     id : 5,
    //     name : "alishba",
    //     gender : "female",
    //     age : "21",
    //     course : "BSCS",
    //   },
      
    // ]

    
  }

