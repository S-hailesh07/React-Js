function TodoItem1() {

    let todoname = "Bye Milk";
    let tododate = "4/10/2023";
    return <div>
        <div class="container ">
      < div class="row add-row">
        <div class="col-6">
          {todoname}
        </div>
        <div class="col-4">
          {tododate}
        </div>
        <div class="col-2">
          <button type="button add-button" class="btn btn-danger">Delete</button>
        </div>
      </div>
      </div>
    </div>
}

export default TodoItem1;