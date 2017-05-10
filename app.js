var app = angular.module('listApp', []);
app.component('shoppingCart', {
  template: `
  <form ng-submit="vm.addItem()">
        <p><span>Name: <input type="text" ng-model="vm.newItem.name" placeholder="Item name">
        <p>Quantity: <input type="text" ng-model="vm.newItem.quantity" placeholder="Enter Amount"></p></span>
        <button type="submit">Add Item</button>
      </form>
      <h3>Shopping List</h3>
      <ul>
        <li ng-repeat="item in vm.items track by $index">
          <p>Name: {{item.name}}, Quantity: {{item.quantity}}</p>
          <button ng-click="vm.removeItem($index)" style="color: red">Delete</button>
        </li>
      </ul>
`,
  controller: function() {

    var vm = this;

    vm.items = [];

    vm.addItem = function() {
      vm.items.push(vm.newItem);
      vm.newItem = null;
    };
    vm.removeItem = function(index) {
      vm.items.splice(index, 1)
    };
  },
  controllerAs: 'vm'
})
