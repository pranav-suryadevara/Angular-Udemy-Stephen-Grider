import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentPage = 0;

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://images.unsplash.com/photo-1464131065363-9e30e13470f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://media.istockphoto.com/photos/field-full-of-green-grass-and-hills-picture-id146766798?s=612x612'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://media.istockphoto.com/photos/field-full-of-green-grass-and-hills-picture-id146766798?s=612x612'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://media.istockphoto.com/photos/field-full-of-green-grass-and-hills-picture-id146766798?s=612x612'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://media.istockphoto.com/photos/field-full-of-green-grass-and-hills-picture-id146766798?s=612x612'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    },{
      title: 'At the Beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Taking a Stroll.',
      url: 'https://media.istockphoto.com/photos/field-full-of-green-grass-and-hills-picture-id146766798?s=612x612'
    },
    {
      title: 'Our Expedition to the Top!!!',
      url: 'https://images.unsplash.com/photo-1466940219795-c670f475e59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80'
    },
    {
      title: 'Tokyo at night.',
      url: 'https://images.unsplash.com/photo-1555397430-57791c75748a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Down the Memory Lane.',
      url: 'https://images.unsplash.com/photo-1599414816464-7dc24f35dc0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y291bnRyeSUyMHJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
    }
  ]
}
