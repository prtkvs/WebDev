function TodoItem2(){
    let taskName = "Go to College";
    let date = "5/10/23";
  
    return (
      <div class="container">
        <div class="row prtk-row">
          <div class="col-6">{taskName}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger prtk-button">
              Danger
            </button>
          </div>
        </div>
      </div>
    );
  }
export default TodoItem2;