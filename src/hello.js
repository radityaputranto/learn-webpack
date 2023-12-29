import _ from 'lodash';

const employee = [{
    name: 'jhon', email: 'jhon@gmail.com', role: 'admin'
},
{
    name: 'doe', email: 'doe@gmail.com', role: 'developer'
},
{
    name: 'jane', email: 'jane@gmail.com', role: 'developer'
}];

const selected = _.find(employee, { name: 'jhon' });
console.log(selected);