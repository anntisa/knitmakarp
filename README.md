# KnitMaKarp

## Scribbles
### Tech Stack Research
https://medium.com/@GoRadialspark/heroku-alternatives-aws-azure-and-google-cloud-platform-870ae316527e

https://medium.com/@bgoel1991/how-to-use-firebase-and-herokus-free-plans-to-host-your-website-36fc4bc9c365

Solution:
firebase
 * DB
 * free domain pointing and custom domains
 * stripe for payments
 * email capabilities
    * firebase email https://github.com/firebase/functions-samples/tree/master/quickstarts/email-users
    * sendgrid https://gist.github.com/codediodeio/f50c2d2f3cc0243814a40f71f221d2ab


### Angular and Firebase setups
https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71

angular library for firebase `npm i firebase angularfire2`

[class.selected]="item === selectedItem" -> class binding
[item]="selectedItem" -> property binding
[(ngModel)]="item.name" -> 2 way binding
(click)="onSelect(item)"" -> event binding


The `RouterOutlet` is one of the router directives that became available to the AppComponent because AppModule imports `AppRoutingModule` which exported `RouterModule`.

The routerLink is the selector for the RouterLink directive
  ex) `<a routerLink="/item-list">Items</a>`

the `+` converts a string to a number
 ex) `+this.route.snapshot.paramMap.get('id')`
