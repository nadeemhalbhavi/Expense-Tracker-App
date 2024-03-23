function handleFormSubmit(event){
    event.preventDefault();
    const expenses = document.getElementById('Expenses');
    const discription = document.getElementById('Discription');
    const category = document.getElementById('Category');
    console.log(expenses.value,discription.value,category.value)

    let obj = {
        Expenses : expenses.value,
        Discription : discription.value,
        Category : category.value
    }

    let serialized = JSON.stringify(obj)
    
    localStorage.setItem('Expense Data', serialized)

    const li = document.createElement('li');
    li.classList.add('list-group-item')
    const expensesAdded = document.createTextNode(obj.Expenses+" "+obj.Discription+" "+obj.Category);
    li.appendChild(expensesAdded);
    const displayDetails = document.getElementById('ExpenseTracker');
    displayDetails.appendChild(li);

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button'
    deleteButton.value = 'Delete'
    deleteButton.className = "btn btn-danger"
    deleteButton.style= "float:right"
    li.appendChild(deleteButton)
    deleteButton.onclick=()=>{
        localStorage.removeItem('Expense Data');
        displayDetails.removeChild(li)
    }

    const editButton = document.createElement('input');
    editButton.type = "button";
    editButton.value = "Edit"
    editButton.style = "float:right"
    editButton.className = "btn btn-outline-info"
    li.appendChild(editButton);
    editButton.onclick=()=>{
        localStorage.removeItem('Expense Data');
        displayDetails.removeChild(li);
        expenses.value = obj.Expenses;
        discription.value = obj.Discription;
        category.value = obj.Category;
    }


    expenses.value = '';
    discription.value = '';
    category.value = '';
}
