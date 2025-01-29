function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row prtk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger prtk-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
