import { addTodo } from "../../redux/todo/todoActions";
import { connect } from "react-redux";
import Form from "./Form";

export default connect(null, { addTodo })(Form);
