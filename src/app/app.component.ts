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
    text: 'select first_name__c from salesforce.event_attendee__c',
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


}
