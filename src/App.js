import React,{ Component } from 'react';
import Header from './components/Header';
import Incomes from './components/Incomes';
import IncomeAdd from './components/IncomeAdd';
import Expenses from './components/Expenses';
import ExpenseAdd from './components/ExpenseAdd';
import Totals from './components/Totals';
import './App.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    incomes : [  
    ],
    expenses :[ 
    ],
    totals :[
      {
        id:1,
        totalIncome : 0,
        totalExpense : 0,
        netTotal : 0
      }
    ]
  }
  //Delete income
  delIncomes = (id) => {
    this.setState({ incomes: [...this.state.incomes.filter(income => income.id !== id)]});
  }
  //Add income
  incomeAdd = (state) => {
    const newIncome = {
      id:uuid.v4(),
      activity : state.activity,
      money : state.money * 1
    }
    this.setState({incomes : [...this.state.incomes,newIncome]})
  }

  //Delete expense
  delExpenses = (id) => {
    this.setState({ expenses: [...this.state.expenses.filter(expense => expense.id !== id)]});
  }

  //Add expense
  expenseAdd = (state) => {
    const newExpense = {
      id:uuid.v4(),
      activity : state.activity,
      money : state.money * 1
    }
    this.setState({expenses : [...this.state.expenses,newExpense]})
  }

  cal = () => {
    const newCal = {
        id:1,
        totalIncome : this.state.incomes.reduce((total,income) => (total + income.money),0) ,
        totalExpense : this.state.expenses.reduce((total,expense) => (total + expense.money),0),
        netTotal : this.state.incomes.reduce((total,income) => (total + income.money),0) - this.state.expenses.reduce((total,expense) => (total + expense.money),0) 
    }
    this.setState({totals : [newCal]})
     
  }

  render () {
    
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <IncomeAdd 
            incomeAdd = {this.incomeAdd}
          />
          <Incomes 
            delIncomes = {this.delIncomes}
            incomes = { this.state.incomes}   
          />
        </div>
        <div>
        <ExpenseAdd 
            expenseAdd = {this.expenseAdd}
          />
          <Expenses 
            delExpenses = {this.delExpenses}
            expenses = { this.state.expenses}   
          />
        </div>
        <div> 
          <div>
          <Totals 
            totals= {this.state.totals}
            cal = {this.cal}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
