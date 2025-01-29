function AddTodo(){
    return (
        <div className="container text-center">
        <div className="row prtk-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here"></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success prtk-button">
              Add
            </button>
          </div>
          </div>
          </div>
    )
}
export default AddTodo;