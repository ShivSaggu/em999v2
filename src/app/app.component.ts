import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'em999v2';


  const query = {
    // give the query a unique name
    name: 'fetch-user',
    text: 'SELECT * FROM user WHERE id = $1',
    values: [1],
  }
  // callback
  client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
  // promise
  client
    .query(query)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))


}
